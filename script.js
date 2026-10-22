// ==========================================
// BANCO DE QUESTÕES OFICIAL (ESTRUTURADO POR SÉRIE)
// ==========================================
const banco = {
    // ------------------------------------------
    // 6º ANO
    // ------------------------------------------
    "6": {
        "Matemática": [
            { id: "6ANO-MAT-F01", p: "No sistema decimal, qual o nome da posição ocupada pelo algarismo 5 no número 1.520?", o: [{t:"Centenas",c:true}, {t:"Dezenas",c:false}, {t:"Unidades",c:false}, {t:"Milhares",c:false}], pts: 2, exp: "No número 1.520, o 0 é unidade, o 2 é dezena e o 5 é centena." },
            { id: "6ANO-MAT-M01", p: "O que define um número primo na matemática?", o: [{t:"Ser um número ímpar",c:false}, {t:"Terminar em 1 ou 7",c:false}, {t:"Ter apenas dois divisores (1 e ele mesmo)",c:true}, {t:"Ser divisível por 2",c:false}], pts: 3, exp: "Números primos são divisíveis exclusivamente por 1 e por eles mesmos." },
            { id: "6ANO-MAT-D01", p: "Qual a definição do conjunto dos Números Racionais (Q)?", o: [{t:"Números que podem ser frações",c:true}, {t:"Apenas decimais finitos",c:false}, {t:"Números sem zero",c:false}, {t:"Somente raízes exatas",c:false}], pts: 4, exp: "Os racionais são todos aqueles números que podem ser escritos na forma de fração." }
            // COLE AQUI MAIS QUESTÕES DE MATEMÁTICA DO 6º ANO
        ],
        "Português": [
            { id: "6ANO-PORT-F01", p: "Qual é a classe de palavras que dá nome a seres, objetos, lugares e sentimentos?", o: [{t:"Substantivo",c:true}, {t:"Adjetivo",c:false}, {t:"Verbo",c:false}, {t:"Artigo",c:false}], pts: 2, exp: "O substantivo nomeia tudo o que existe." },
            { id: "6ANO-PORT-M01", p: "Na análise sintática, qual é a definição de sujeito?", o: [{t:"O ser sobre o qual se faz uma declaração",c:true}, {t:"O conjunto de vírgulas",c:false}, {t:"A pontuação final",c:false}, {t:"O tempo do verbo",c:false}], pts: 3, exp: "O sujeito é o termo sobre o qual o predicado declara algo." }
            // COLE AQUI MAIS QUESTÕES DE PORTUGUÊS DO 6º ANO
        ],
        "História": [
            { id: "6ANO-HIST-F01", p: "No sistema de datação ocidental, qual evento marca o ano zero?", o: [{t:"Nascimento de Jesus",c:true}, {t:"Invenção da Escrita",c:false}, {t:"Fundação de Roma",c:false}, {t:"Queda de Constantinopla",c:false}], pts: 2, exp: "O calendário cristão adota o nascimento de Cristo como ano 1." }
            // COLE AQUI MAIS QUESTÕES DE HISTÓRIA DO 6º ANO
        ],
        "Ciências": [
            { id: "6ANO-CIEN-F01", p: "O que é a célula na biologia?", o: [{t:"A unidade básica da vida",c:true}, {t:"A camada de ar do planeta",c:false}, {t:"Um mineral das rochas",c:false}, {t:"Um fluido corporal",c:false}], pts: 2, exp: "A célula é a unidade funcional e estrutural básica de todos os seres vivos." }
            // COLE AQUI MAIS QUESTÕES DE CIÊNCIAS DO 6º ANO
        ]
    },

    // ------------------------------------------
    // 7º ANO
    // ------------------------------------------
    "7": {
        "Matemática": [
            { id: "7ANO-MAT-F01", p: "Qual o resultado de 2/5 + 1/5?", o: [{t:"3/10",c:false}, {t:"3/5",c:true}, {t:"2/5",c:false}, {t:"1/5",c:false}], pts: 2, exp: "Com denominadores iguais, somamos os numeradores (2+1 = 3) e mantemos o denominador." },
            { id: "7ANO-MAT-M01", p: "O conjunto dos Inteiros (Z) é formado por:", o: [{t:"Apenas positivos",c:false}, {t:"Apenas negativos",c:false}, {t:"Números com vírgula",c:false}, {t:"Naturais e seus opostos",c:true}], pts: 3, exp: "O conjunto Z engloba os números naturais, seus opostos negativos e o zero." }
            // COLE AQUI MAIS QUESTÕES DE MATEMÁTICA DO 7º ANO
        ],
        "Português": [
            { id: "7ANO-PORT-F01", p: "O que são palavras antônimas?", o: [{t:"Palavras com sentidos opostos",c:true}, {t:"Palavras com a mesma escrita",c:false}, {t:"Palavras com o mesmo som",c:false}, {t:"Palavras sem sentido",c:false}], pts: 2, exp: "Antônimos são palavras que expressam ideias contrárias." }
            // COLE AQUI MAIS QUESTÕES DE PORTUGUÊS DO 7º ANO
        ],
        "História": [
            { id: "7ANO-HIST-F01", p: "Qual era a principal atividade econômica no Feudalismo europeu?", o: [{t:"Comércio Imediato",c:false}, {t:"Agricultura de Subsistência",c:true}, {t:"Indústria",c:false}, {t:"Mineração",c:false}], pts: 2, exp: "A economia feudal baseava-se no cultivo da terra do feudo para sustento." }
            // COLE AQUI MAIS QUESTÕES DE HISTÓRIA DO 7º ANO
        ],
        "Ciências": [
            { id: "7ANO-CIEN-F01", p: "O que define um organismo autótrofo?", o: [{t:"Produz o próprio alimento",c:true}, {t:"Precisa caçar para comer",c:false}, {t:"Vive como parasita",c:false}, {t:"Decompõe matéria",c:false}], pts: 3, exp: "Organismos autótrofos (como as plantas) sintetizam seu próprio alimento." }
            // COLE AQUI MAIS QUESTÕES DE CIÊNCIAS DO 7º ANO
        ]
    },

    // ------------------------------------------
    // 8º ANO
    // ------------------------------------------
    "8": {
        "Matemática": [
            { id: "8ANO-MAT-M01", p: "Em uma equação, o que representa a incógnita (x)?", o: [{t:"O resultado",c:false}, {t:"O valor desconhecido",c:true}, {t:"O sinal de igual",c:false}, {t:"Uma constante",c:false}], pts: 3, exp: "A incógnita é o valor desconhecido que queremos descobrir." },
            { id: "8ANO-MAT-D01", p: "O que caracteriza uma inequação matemática?", o: [{t:"Uso de sinal de igual (=)",c:false}, {t:"Uso de sinais de desigualdade (>, <)",c:true}, {t:"Não ter solução",c:false}, {t:"Sem letras",c:false}], pts: 4, exp: "Inequações utilizam sinais de desigualdade." }
            // COLE AQUI MAIS QUESTÕES DE MATEMÁTICA DO 8º ANO
        ],
        "Português": [
            { id: "8ANO-PORT-M01", p: "O que é o predicado de uma oração?", o: [{t:"O autor do texto",c:false}, {t:"Tudo o que se informa sobre o sujeito",c:true}, {t:"A pontuação final",c:false}, {t:"Um tipo de adjetivo",c:false}], pts: 3, exp: "O predicado traz a informação sobre o sujeito." }
            // COLE AQUI MAIS QUESTÕES DE PORTUGUÊS DO 8º ANO
        ],
        "História": [
            { id: "8ANO-HIST-M01", p: "O princípio do 'Direito Divino dos Reis' no Absolutismo justificava:", o: [{t:"O poder absoluto do rei concedido por Deus",c:true}, {t:"A democracia direta",c:false}, {t:"A eleição do monarca",c:false}, {t:"O fim da monarquia",c:false}], pts: 3, exp: "Acreditava-se que o poder do rei vinha diretamente da vontade divina." }
            // COLE AQUI MAIS QUESTÕES DE HISTÓRIA DO 8º ANO
        ],
        "Ciências": [
            { id: "8ANO-CIEN-D01", p: "Qual a função da organela Mitocôndria?", o: [{t:"Respiração celular e geração de energia",c:true}, {t:"Armazenar água",c:false}, {t:"Digestão",c:false}, {t:"Fotossíntese",c:false}], pts: 4, exp: "A mitocôndria é a usina de energia da célula." }
            // COLE AQUI MAIS QUESTÕES DE CIÊNCIAS DO 8º ANO
        ]
    },

    // ------------------------------------------
    // 9º ANO
    // ------------------------------------------
    "9": {
        "Matemática": [
            { id: "9ANO-MAT-D01", p: "O que é o 'Espaço Amostral' na probabilidade?", o: [{t:"Conjunto de todos os resultados possíveis",c:true}, {t:"O erro da pesquisa",c:false}, {t:"A média final",c:false}, {t:"O valor mais comum",c:false}], pts: 4, exp: "Espaço amostral abrange todos os cenários possíveis de um experimento." }
            // COLE AQUI MAIS QUESTÕES DE MATEMÁTICA DO 9º ANO
        ],
        "Português": [
            { id: "9ANO-PORT-D01", p: "O que define uma oração na gramática?", o: [{t:"Enunciado estruturado em torno de um verbo",c:true}, {t:"Frase sem pontuação",c:false}, {t:"Texto de vários parágrafos",c:false}, {t:"Palavra isolada",c:false}], pts: 4, exp: "A oração exige a presença de verbo ou locução verbal." }
            // COLE AQUI MAIS QUESTÕES DE PORTUGUÊS DO 9º ANO
        ],
        "História": [
            { id: "9ANO-HIST-D01", p: "O Mercantilismo visava principalmente:", o: [{t:"Balança comercial favorável e acúmulo de metais",c:true}, {t:"Livre comércio global",c:false}, {t:"Fim dos impostos",c:false}, {t:"Industrialização do campo",c:false}], pts: 4, exp: "Monarquias absolutistas buscavam acumular ouro e prata no Tesouro." }
            // COLE AQUI MAIS QUESTÕES DE HISTÓRIA DO 9º ANO
        ],
        "Ciências": [
            { id: "9ANO-CIEN-D01", p: "O que é o DNA?", o: [{t:"Molécula que contém a informação genética",c:true}, {t:"Açúcar no sangue",c:false}, {t:"Proteína muscular",c:false}, {t:"Gás celular",c:false}], pts: 4, exp: "O DNA armazena o código genético dos seres vivos." }
            // COLE AQUI MAIS QUESTÕES DE CIÊNCIAS DO 9º ANO
        ]
    }
};

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