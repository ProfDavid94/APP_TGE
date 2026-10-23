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
let tempoJ1 = 40;
let tempoJ2 = 40;
let turnoAtual = 0; // 0 = Preparo, 1 = J1 ativo, 2 = J2 ativo
let materiaDesafio = "";

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
// NAVEGAÇÃO DE SÉRIES
// ==========================================
function selecionarSerie(serie) {
    serieAtual = serie;
    
    document.getElementById('badge-serie-menu').innerText = `${serie}º ANO`;
    document.getElementById('badge-serie-pergunta').innerText = `${serie}º ANO`;
    
    mudarTela('tela-menu');
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

    // 1. Filtra questões que ainda não foram exibidas na partida
    let disponiveis = listaMateria.filter(q => !idsUsados.has(q.id));

    // 2. Filtro por nível no Modo Desafio
    if (nivelDesejado !== null) {
        let disponiveisNivel = disponiveis.filter(q => q.pts === nivelDesejado);
        
        // Se acabarem as questões do nível, recicla esse nível específico da série
        if (disponiveisNivel.length === 0) {
            listaMateria.filter(q => q.pts === nivelDesejado).forEach(q => idsUsados.delete(q.id));
            disponiveisNivel = listaMateria.filter(q => q.pts === nivelDesejado);
        }
        disponiveis = disponiveisNivel;
    } else {
        // Modo Normal: Se acabar a matéria toda da série, recicla a matéria
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
    document.getElementById('subtitulo-menu').innerText = "Escolha a disciplina para jogar";
    
    const btnDesafio = document.getElementById('btn-toggle-desafio');
    if (btnDesafio) {
        btnDesafio.innerText = "⚔️ MODO DESAFIO (2 JOGADORES)";
        btnDesafio.style.backgroundColor = "#D32F2F";
    }

    mudarTela('tela-menu');
}

// ==========================================
// MODO NORMAL (CAMPANHA)
// ==========================================
function sortearPergunta(materia) {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    if (modoAtual === 'desafio') {
        prepararArenaDesafio(materia);
        return;
    }

    perguntaAtual = obterQuestaoSemRepeticao(materia, null);
    if (!perguntaAtual) return;
    
    const btnDica = document.getElementById('btn-dica');
    if(btnDica) btnDica.disabled = false;

    document.getElementById('nome-materia').innerText = materia;
    document.getElementById('pontos-materia').innerText = perguntaAtual.pts + " PTS";
    
    const headerMateria = document.getElementById('nome-materia');
    if(materia === "Matemática") headerMateria.style.color = "var(--cor-mat)";
    if(materia === "Português") headerMateria.style.color = "var(--cor-port)";
    if(materia === "História") headerMateria.style.color = "var(--cor-hist)";
    if(materia === "Ciências") headerMateria.style.color = "var(--cor-cien)";

    document.getElementById('texto-pergunta').innerText = perguntaAtual.p;
    
    const opcoesEmbaralhadas = embaralhar(perguntaAtual.o);
    const containerOpcoes = document.getElementById('opcoes');
    containerOpcoes.innerHTML = ''; 
    
    opcoesEmbaralhadas.forEach(opcao => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcao';
        btn.innerText = opcao.t;
        btn.dataset.correta = opcao.c; 
        btn.onclick = () => verificarResposta(opcao.c, perguntaAtual, false);
        containerOpcoes.appendChild(btn);
    });

    mudarTela('tela-pergunta');
    iniciarTimer(perguntaAtual);

    // Reprocessa o LaTeX na tela de pergunta
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

    if (tempoEsgotado) {
        icone.innerText = "⏰";
        titulo.innerText = "TEMPO ESGOTADO!";
        titulo.style.color = "#F44336"; 
        pontos.innerText = "O sinal tocou antes de você responder.";
    } else if (isCorreta) {
        icone.innerText = "✅";
        titulo.innerText = "RESPOSTA CORRETA!";
        titulo.style.color = "#4CAF50"; 
        pontos.innerText = `Você ganhou +${objPergunta.pts} Pontos!`;
    } else {
        icone.innerText = "❌";
        titulo.innerText = "RESPOSTA INCORRETA!";
        titulo.style.color = "#F44336"; 
        pontos.innerText = "Nenhum ponto recebido.";
    }

    document.getElementById('explicacao-feedback').innerText = objPergunta.exp;
    ref.innerText = "Ref: " + objPergunta.id;
    mudarTela('tela-feedback');

    // Reprocessa o LaTeX na tela de feedback
    if (window.MathJax) {
        MathJax.typesetPromise();
    }

}

function usarDica() {
    const btnDica = document.getElementById('btn-dica');
    if (btnDica.disabled) return;
    
    const botoesOpcoes = document.querySelectorAll('#opcoes .btn-opcao');
    const erradas = Array.from(botoesOpcoes).filter(btn => 
        btn.dataset.correta === "false" && !btn.classList.contains('opcao-eliminada')
    );
    
    if (erradas.length > 0) {
        const indexAleatorio = Math.floor(Math.random() * erradas.length);
        erradas[indexAleatorio].classList.add('opcao-eliminada');
        btnDica.disabled = true;
        tocarBipe();
    }
}

// ==========================================
// MODO DESAFIO (ARENA DIVIDIDA)
// ==========================================
function prepararArenaDesafio(materia) {
    materiaDesafio = materia;
    tempoJ1 = 40;
    tempoJ2 = 40;
    turnoAtual = 0; 
    contadorPerguntasRodada = 0;
    nivelRodadaDesafio = null;

    document.getElementById('relogio-j1').innerText = tempoJ1;
    document.getElementById('relogio-j2').innerText = tempoJ2;
    
    document.getElementById('area-j1').className = 'metade-desafio neutra';
    document.getElementById('area-j2').className = 'metade-desafio neutra';
    
    mudarTela('tela-desafio');
}

function iniciarDesafio(jogadorAlvo) {
    if (turnoAtual !== 0) return; 
    
    turnoAtual = jogadorAlvo;
    
    clearInterval(timerDesafio);
    timerDesafio = setInterval(atualizarRelogiosDesafio, 1000);
    
    nivelRodadaDesafio = sortearNivelAleatorio();
    
    carregarNovaPerguntaDesafio(turnoAtual);
    atualizarVisualDesafio();
}

function atualizarVisualDesafio() {
    const areaJ1 = document.getElementById('area-j1');
    const areaJ2 = document.getElementById('area-j2');
    
    if (turnoAtual === 1) {
        areaJ1.className = 'metade-desafio ativa';
        areaJ2.className = 'metade-desafio inativa';
    } else if (turnoAtual === 2) {
        areaJ2.className = 'metade-desafio ativa';
        areaJ1.className = 'metade-desafio inativa';
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
            if (turnoAtual === jogador) {
                responderDesafio(jogador, opcao.c);
            }
        };
        container.appendChild(btn);
    });

    // Reprocessa o LaTeX no Modo Desafio
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