// ==========================================
// CONTROLE DE SESSÃO E VARIÁVEIS GLOBAIS
// ==========================================
const idsUsados = new Set(); // Histórico de eliminação na sessão ativa
let serieAtual = "6"; // Série padrão inicial

let perguntaAtual = null;
let timerInterval; 
let tempoRestante; 

// Variáveis do Modo Desafio
let modoAtual = 'normal'; // 'normal' ou 'desafio'
let timerDesafio;
let tempoJ1 = 60;
let tempoJ2 = 60;
let turnoAtual = 0; // 0 = Preparo, 1 = J1 ativo, 2 = J2 ativo
let materiaDesafio = "";

// Variáveis do Modo Verificação
let modoVerificacaoAtivo = false;
let listaVerificacao = [];
let indiceVerificacao = 0;
let materiaVerificacaoAtual = "";

// Lógica de pareamento por rodada no Desafio
let nivelRodadaDesafio = null;
let contadorPerguntasRodada = 0;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function tocarBipe() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'sine';
    oscillator.frequency.value = 800; 
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.1);
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function mudarTela(idTela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(idTela).classList.add('ativa');
}

// ==========================================
// NAVEGAÇÃO DE SÉRIES E MENU DE OPÇÕES
// ==========================================
function selecionarSerie(serie) {
    serieAtual = serie;
    
    document.getElementById('badge-serie-menu').innerText = `${serie}º ANO`;
    document.getElementById('badge-serie-pergunta').innerText = `${serie}º ANO`;
    
    mudarTela('tela-menu');
}

function abrirMenuOpcoes() {
    document.getElementById('toggle-modo-verificacao').checked = modoVerificacaoAtivo;
    document.getElementById('modal-opcoes').style.display = 'flex';
}

function fecharMenuOpcoes(event) {
    if (event && event.target !== document.getElementById('modal-opcoes')) return;
    document.getElementById('modal-opcoes').style.display = 'none';
}

function alternarModoVerificacao() {
    modoVerificacaoAtivo = document.getElementById('toggle-modo-verificacao').checked;
    const avisoMenu = document.getElementById('aviso-verificacao-menu');
    const btnDesafio = document.getElementById('btn-toggle-desafio');

    if (modoVerificacaoAtivo) {
        if (modoAtual === 'desafio') {
            modoAtual = 'normal';
            document.getElementById('titulo-menu').innerText = "MATÉRIAS";
            btnDesafio.innerText = "⚔️ MODO DESAFIO (2 JOGADORES)";
            btnDesafio.style.backgroundColor = "#D32F2F";
        }
        avisoMenu.style.display = 'inline-block';
        document.getElementById('subtitulo-menu').innerText = "Escolha a disciplina para verificar";
    } else {
        avisoMenu.style.display = 'none';
        document.getElementById('subtitulo-menu').innerText = "Escolha a disciplina para jogar";
    }
}

function trocarSeriePeloMenu() {
    fecharMenuOpcoes();
    voltarParaSeries();
}

function voltarParaSeries() {
    voltarMenu();
    mudarTela('tela-series');
}

// ==========================================
// MOTOR DE SELEÇÃO SEM REPETIÇÃO
// ==========================================
function sortearNivelAleatorio() {
    const niveis = [2, 3, 4]; // 2: Fácil, 3: Médio, 4: Difícil
    return niveis[Math.floor(Math.random() * niveis.length)];
}

function obterQuestaoSemRepeticao(materia, nivelDesejado = null) {
    const listaMateria = (banco[serieAtual] && banco[serieAtual][materia]) ? banco[serieAtual][materia] : [];
    
    if (listaMateria.length === 0) {
        alert(`Ainda não existem perguntas cadastradas para ${materia} no ${serieAtual}º Ano.`);
        return null;
    }

    let disponiveis = listaMateria.filter(q => !idsUsados.has(q.id));

    if (nivelDesejado !== null) {
        let disponiveisNivel = disponiveis.filter(q => q.pts === nivelDesejado);
        
        if (disponiveisNivel.length === 0) {
            listaMateria.filter(q => q.pts === nivelDesejado).forEach(q => idsUsados.delete(q.id));
            disponiveisNivel = listaMateria.filter(q => q.pts === nivelDesejado);
        }
        disponiveis = disponiveisNivel;
    } else {
        if (disponiveis.length === 0) {
            listaMateria.forEach(q => idsUsados.delete(q.id));
            disponiveis = listaMateria;
        }
    }

    const randomIndex = Math.floor(Math.random() * disponiveis.length);
    const questaoEscolhida = disponiveis[randomIndex];

    idsUsados.add(questaoEscolhida.id);
    return JSON.parse(JSON.stringify(questaoEscolhida));
}

// ==========================================
// CONTROLES DO MENU PRINCIPAL
// ==========================================
function abrirMenuDesafio() {
    if (modoVerificacaoAtivo) {
        modoVerificacaoAtivo = false;
        document.getElementById('toggle-modo-verificacao').checked = false;
        document.getElementById('aviso-verificacao-menu').style.display = 'none';
    }

    const btn = document.getElementById('btn-toggle-desafio');
    
    if (modoAtual === 'normal') {
        modoAtual = 'desafio';
        document.getElementById('titulo-menu').innerText = "MODO DESAFIO";
        document.getElementById('subtitulo-menu').innerText = "2 Jogadores em Arena Dividida";
        btn.innerText = "❌ CANCELAR DESAFIO";
        btn.style.backgroundColor = "#607D8B";
    } else {
        modoAtual = 'normal';
        document.getElementById('titulo-menu').innerText = "MATÉRIAS";
        document.getElementById('subtitulo-menu').innerText = "Escolha a disciplina para jogar";
        btn.innerText = "⚔️ MODO DESAFIO (2 JOGADORES)";
        btn.style.backgroundColor = "#D32F2F";
    }
}

function voltarMenu() {
    clearInterval(timerInterval); 
    clearInterval(timerDesafio); 
    
    document.getElementById('tela-feedback').style.transform = 'rotate(0deg)';
    
    modoAtual = 'normal';
    document.getElementById('titulo-menu').innerText = "MATÉRIAS";
    document.getElementById('subtitulo-menu').innerText = modoVerificacaoAtivo 
        ? "Escolha a disciplina para verificar" 
        : "Escolha a disciplina para jogar";
    
    const btnDesafio = document.getElementById('btn-toggle-desafio');
    if (btnDesafio) {
        btnDesafio.innerText = "⚔️ MODO DESAFIO (2 JOGADORES)";
        btnDesafio.style.backgroundColor = "#D32F2F";
    }

    mudarTela('tela-menu');
}

// ==========================================
// MODO NORMAL E MODO VERIFICAÇÃO
// ==========================================
function sortearPergunta(materia) {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    if (modoAtual === 'desafio') {
        prepararArenaDesafio(materia);
        return;
    }

    if (modoVerificacaoAtivo) {
        iniciarModoVerificacao(materia);
        return;
    }

    perguntaAtual = obterQuestaoSemRepeticao(materia, null);
    if (!perguntaAtual) return;

    renderizarPergunta(materia, perguntaAtual, false);
}

function iniciarModoVerificacao(materia) {
    const listaMateria = (banco[serieAtual] && banco[serieAtual][materia]) ? banco[serieAtual][materia] : [];
    if (listaMateria.length === 0) {
        alert(`Ainda não existem perguntas cadastradas para ${materia} no ${serieAtual}º Ano.`);
        return;
    }

    materiaVerificacaoAtual = materia;
    listaVerificacao = JSON.parse(JSON.stringify(listaMateria));
    indiceVerificacao = 0;

    carregarQuestaoVerificacao();
}

function carregarQuestaoVerificacao() {
    perguntaAtual = listaVerificacao[indiceVerificacao];
    renderizarPergunta(materiaVerificacaoAtual, perguntaAtual, true);
}

function voltarPerguntaVerificacao() {
    if (indiceVerificacao > 0) {
        indiceVerificacao--;
        carregarQuestaoVerificacao();
    }
}

function pularPerguntaVerificacao() {
    indiceVerificacao++;
    if (indiceVerificacao >= listaVerificacao.length) {
        alert(`Você concluiu todas as ${listaVerificacao.length} perguntas de ${materiaVerificacaoAtual} (${serieAtual}º Ano)!`);
        voltarMenu();
        return;
    }
    carregarQuestaoVerificacao();
}

function renderizarPergunta(materia, questao, isVerificacao) {
    const btnDica = document.getElementById('btn-dica');
    const containerDica = document.getElementById('container-dica');
    const barraVerificacao = document.getElementById('barra-info-verificacao');
    const controlesVerificacao = document.getElementById('controles-verificacao');
    const displayTempo = document.getElementById('tempo-restante');

    if (isVerificacao) {
        clearInterval(timerInterval);
        displayTempo.innerText = "🔍 REVISÃO";
        displayTempo.classList.remove('tempo-esgotando');

        if (containerDica) containerDica.style.display = 'none';
        barraVerificacao.style.display = 'flex';
        controlesVerificacao.style.display = 'flex';

        document.getElementById('contador-verificacao').innerText = `Questão ${indiceVerificacao + 1} de ${listaVerificacao.length}`;
        document.getElementById('id-verificacao').innerText = `ID: ${questao.id}`;

        const btnVoltar = document.getElementById('btn-voltar-pergunta');
        if (btnVoltar) {
            btnVoltar.disabled = (indiceVerificacao === 0);
        }
    } else {
        barraVerificacao.style.display = 'none';
        controlesVerificacao.style.display = 'none';

        if (containerDica) containerDica.style.display = 'flex';
        if (btnDica) {
            btnDica.disabled = false;
            btnDica.style.display = 'inline-block';
        }
        const btnCancelar = document.getElementById('btn-dica-cancelar');
        if (btnCancelar) btnCancelar.style.display = 'none';
        const btnConfirmar = document.getElementById('btn-dica-confirmar');
        if (btnConfirmar) btnConfirmar.style.display = 'none';
    }

    document.getElementById('nome-materia').innerText = materia;
    document.getElementById('pontos-materia').innerText = questao.pts + " PTS";
    
    const headerMateria = document.getElementById('nome-materia');
    if(materia === "Matemática") headerMateria.style.color = "var(--cor-mat)";
    if(materia === "Português") headerMateria.style.color = "var(--cor-port)";
    if(materia === "História") headerMateria.style.color = "var(--cor-hist)";
    if(materia === "Ciências") headerMateria.style.color = "var(--cor-cien)";

    document.getElementById('texto-pergunta').innerText = questao.p;
    
    const opcoesParaExibir = isVerificacao ? questao.o : embaralhar(questao.o);
    const containerOpcoes = document.getElementById('opcoes');
    containerOpcoes.innerHTML = ''; 
    
    opcoesParaExibir.forEach(opcao => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcao';
        btn.innerText = opcao.t;
        btn.dataset.correta = opcao.c;

        if (isVerificacao && opcao.c === true) {
            btn.classList.add('opcao-correta-verificacao');
        }

        btn.onclick = () => verificarResposta(opcao.c, questao, false);
        containerOpcoes.appendChild(btn);
    });

    mudarTela('tela-pergunta');

    if (!isVerificacao) {
        iniciarTimer(questao);
    }

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function iniciarTimer(objPergunta) {
    clearInterval(timerInterval); 
    tempoRestante = 60;
    const displayTempo = document.getElementById('tempo-restante');
    displayTempo.innerText = `⏱️ ${tempoRestante}s`;
    displayTempo.classList.remove('tempo-esgotando');

    timerInterval = setInterval(() => {
        tempoRestante--;
        displayTempo.innerText = `⏱️ ${tempoRestante}s`;

        if (tempoRestante <= 10 && tempoRestante > 0) {
            displayTempo.classList.add('tempo-esgotando');
            tocarBipe(); 
        }

        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            verificarResposta(false, objPergunta, true); 
        }
    }, 1000); 
}

function verificarResposta(isCorreta, objPergunta, tempoEsgotado = false) {
    clearInterval(timerInterval); 

    const titulo = document.getElementById('titulo-feedback');
    const pontos = document.getElementById('pontos-feedback');
    const icone = document.getElementById('icone-feedback');
    const ref = document.getElementById('referencia-pergunta');
    const btnContinuar = document.getElementById('btn-continuar-feedback');

    if (tempoEsgotado) {
        icone.innerText = "⏰";
        titulo.innerText = "TEMPO ESGOTADO!";
        titulo.style.color = "#F44336"; 
        pontos.innerText = "O sinal tocou antes de você responder.";
    } else if (isCorreta) {
        icone.innerText = "✅";
        titulo.innerText = "RESPOSTA CORRETA!";
        titulo.style.color = "#4CAF50"; 
        pontos.innerText = modoVerificacaoAtivo 
            ? `Modo Verificação (${objPergunta.pts} PTS)` 
            : `Você ganhou +${objPergunta.pts} Pontos!`;
    } else {
        icone.innerText = "❌";
        titulo.innerText = "RESPOSTA INCORRETA!";
        titulo.style.color = "#F44336"; 
        pontos.innerText = "Nenhum ponto recebido.";
    }

    btnContinuar.innerText = modoVerificacaoAtivo ? "PRÓXIMA QUESTÃO" : "CONTINUAR JOGANDO";

    document.getElementById('explicacao-feedback').innerText = objPergunta.exp;
    ref.innerText = "Ref: " + objPergunta.id;
    mudarTela('tela-feedback');

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function continuarAposFeedback() {
    if (modoVerificacaoAtivo) {
        pularPerguntaVerificacao();
    } else {
        voltarMenu();
    }
}

function solicitarDica() {
    const btnDica = document.getElementById('btn-dica');
    if (btnDica.disabled) return;
    
    btnDica.style.display = 'none';
    document.getElementById('btn-dica-cancelar').style.display = 'inline-block';
    document.getElementById('btn-dica-confirmar').style.display = 'inline-block';
}

function cancelarDica() {
    document.getElementById('btn-dica-cancelar').style.display = 'none';
    document.getElementById('btn-dica-confirmar').style.display = 'none';
    document.getElementById('btn-dica').style.display = 'inline-block';
}

function confirmarDica() {
    const botoesOpcoes = document.querySelectorAll('#opcoes .btn-opcao');
    const erradas = Array.from(botoesOpcoes).filter(btn => 
        btn.dataset.correta === "false" && !btn.classList.contains('opcao-eliminada')
    );
    
    if (erradas.length > 0) {
        const indexAleatorio = Math.floor(Math.random() * erradas.length);
        erradas[indexAleatorio].classList.add('opcao-eliminada');
        tocarBipe();
    }
    
    document.getElementById('btn-dica-cancelar').style.display = 'none';
    document.getElementById('btn-dica-confirmar').style.display = 'none';
    const btnDica = document.getElementById('btn-dica');
    btnDica.style.display = 'inline-block';
    btnDica.disabled = true;
}


// ==========================================
// MODO DESAFIO (ARENA DIVIDIDA)
// ==========================================
function prepararArenaDesafio(materia) {
    materiaDesafio = materia;
    tempoJ1 = 60;
    tempoJ2 = 60;
    turnoAtual = 0;
    contadorPerguntasRodada = 0;
    nivelRodadaDesafio = null;

    document.getElementById('relogio-j1').innerText = tempoJ1;
    document.getElementById('relogio-j2').innerText = tempoJ2;

    document.getElementById('area-j1').className = 'metade-desafio neutra';
    document.getElementById('area-j2').className = 'metade-desafio neutra';

    const overlayJ1 = document.getElementById('overlay-j1');
    const overlayJ2 = document.getElementById('overlay-j2');
    if (overlayJ1) overlayJ1.style.display = 'flex';
    if (overlayJ2) overlayJ2.style.display = 'flex';

    mudarTela('tela-desafio');
}

let bloqueioClickDesafio = false;

function iniciarDesafio(jogadorAlvo) {
    if (turnoAtual !== 0) return;

    turnoAtual = jogadorAlvo;

    const overlayJ1 = document.getElementById('overlay-j1');
    const overlayJ2 = document.getElementById('overlay-j2');
    if (overlayJ1) overlayJ1.style.display = 'none';
    if (overlayJ2) overlayJ2.style.display = 'none';

    bloqueioClickDesafio = true;
    setTimeout(() => {
        bloqueioClickDesafio = false;
    }, 2000);

    clearInterval(timerDesafio);
    timerDesafio = setInterval(atualizarRelogiosDesafio, 1000);

    atualizarVisualDesafio();
    carregarNovaPerguntaDesafio(jogadorAlvo);
}

function atualizarVisualDesafio() {
    const areaJ1 = document.getElementById('area-j1');
    const areaJ2 = document.getElementById('area-j2');
    
    areaJ1.classList.remove('neutra');
    areaJ2.classList.remove('neutra');
    
    if (turnoAtual === 1) {
        areaJ1.className = 'metade-desafio ativa';
        areaJ2.className = 'metade-desafio inativa';
    } else if (turnoAtual === 2) {
        areaJ1.className = 'metade-desafio inativa';
        areaJ2.className = 'metade-desafio ativa';
    }
}

function atualizarRelogiosDesafio() {
    if (turnoAtual === 1) {
        tempoJ1--;
        document.getElementById('relogio-j1').innerText = tempoJ1;
        if (tempoJ1 <= 10 && tempoJ1 > 0) tocarBipe();
        if (tempoJ1 <= 0) finalizarDesafio(2);
    } else if (turnoAtual === 2) {
        tempoJ2--;
        document.getElementById('relogio-j2').innerText = tempoJ2;
        if (tempoJ2 <= 10 && tempoJ2 > 0) tocarBipe();
        if (tempoJ2 <= 0) finalizarDesafio(1);
    }
}

function carregarNovaPerguntaDesafio(jogador) {
    const p = obterQuestaoSemRepeticao(materiaDesafio, nivelRodadaDesafio);
    if (!p) return;
    
    const sufixo = jogador === 1 ? 'j1' : 'j2';
    document.getElementById(`pergunta-${sufixo}`).innerText = p.p;
    
    const opcoesEmbaralhadas = embaralhar(p.o);
    const container = document.getElementById(`opcoes-${sufixo}`);
    container.innerHTML = '';
    
    opcoesEmbaralhadas.forEach(opcao => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcao';
        btn.innerText = opcao.t;
        
        btn.onclick = (e) => {
            e.stopPropagation();
            if (bloqueioClickDesafio === true) return;
            if (turnoAtual === jogador) {
                responderDesafio(jogador, opcao.c);
            }
        };
        container.appendChild(btn);
    });

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function responderDesafio(jogador, isCorreta) {
    if (isCorreta) {
        contadorPerguntasRodada++;
        
        if (contadorPerguntasRodada % 2 === 0) {
            nivelRodadaDesafio = sortearNivelAleatorio();
        }

        turnoAtual = jogador === 1 ? 2 : 1;
        carregarNovaPerguntaDesafio(turnoAtual);
        atualizarVisualDesafio();
    } else {
        aplicarPenalidade(jogador);
    }
}

function aplicarPenalidade(jogador) {
    tocarBipe();
    
    if (jogador === 1) {
        tempoJ1 -= 5;
        if (tempoJ1 < 0) tempoJ1 = 0;
        document.getElementById('relogio-j1').innerText = tempoJ1;
    } else {
        tempoJ2 -= 5;
        if (tempoJ2 < 0) tempoJ2 = 0;
        document.getElementById('relogio-j2').innerText = tempoJ2;
    }
    
    const relogio = document.getElementById(`relogio-j${jogador}`);
    const alerta = document.getElementById(`alerta-j${jogador}`);
    
    relogio.classList.remove('shake');
    alerta.classList.remove('animar-penalidade');
    
    void relogio.offsetWidth;
    void alerta.offsetWidth;
    
    relogio.classList.add('shake');
    alerta.classList.add('animar-penalidade');
    
    if (jogador === 1 && tempoJ1 <= 0) finalizarDesafio(2);
    else if (jogador === 2 && tempoJ2 <= 0) finalizarDesafio(1);
    else {
        carregarNovaPerguntaDesafio(jogador);
    }
}

function finalizarDesafio(vencedor) {
    clearInterval(timerDesafio);
    turnoAtual = 0;
    
    const telaFeedback = document.getElementById('tela-feedback');
    
    if (vencedor === 2) {
        telaFeedback.style.transform = 'rotate(180deg)';
    } else {
        telaFeedback.style.transform = 'rotate(0deg)';
    }
    
    const titulo = document.getElementById('titulo-feedback');
    const pontos = document.getElementById('pontos-feedback');
    const icone = document.getElementById('icone-feedback');
    const ref = document.getElementById('referencia-pergunta');
    
    icone.innerText = "🏆";
    titulo.innerText = `JOGADOR ${vencedor} VENCEU!`;
    titulo.style.color = "#FFD700";
    pontos.innerText = "O tempo do adversário esgotou!";
    document.getElementById('explicacao-feedback').innerText = "Que duelo! Para jogar novamente, escolha a matéria no menu principal.";
    ref.innerText = "";
    
    mudarTela('tela-feedback');
}
