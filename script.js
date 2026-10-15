// ==========================================
// BANCO DE QUESTÕES (80 Perguntas)
// ==========================================
const banco = {
    "Matemática": [
        { p: "Quanto é 8 x 7?", o: [{t:"54",c:false}, {t:"56",c:true}, {t:"64",c:false}, {t:"48",c:false}], pts: 3, exp: "A multiplicação de 8 por 7 resulta em 56." },
        { p: "Qual o resultado de 100 ÷ 4?", o: [{t:"20",c:false}, {t:"30",c:false}, {t:"50",c:false}, {t:"25",c:true}], pts: 2, exp: "100 dividido por 4 é igual a 25." },
        { p: "Quanto é 3/4 de 20?", o: [{t:"15",c:true}, {t:"10",c:false}, {t:"12",c:false}, {t:"18",c:false}], pts: 4, exp: "Dividindo 20 por 4 temos 5. Multiplicando por 3, chegamos a 15." },
        { p: "Qual é a raiz quadrada de 81?", o: [{t:"7",c:false}, {t:"8",c:false}, {t:"9",c:true}, {t:"10",c:false}], pts: 3, exp: "9 x 9 = 81, logo a raiz quadrada de 81 é 9." },
        { p: "Quanto é 15% de 200?", o: [{t:"20",c:false}, {t:"30",c:true}, {t:"15",c:false}, {t:"45",c:false}], pts: 4, exp: "10% de 200 é 20, e 5% é 10. Somando os dois, temos 30." },
        { p: "Resolva: 12 + 5 x 3", o: [{t:"27",c:true}, {t:"51",c:false}, {t:"15",c:false}, {t:"20",c:false}], pts: 3, exp: "A multiplicação deve ser feita primeiro (5x3=15), e depois a soma (12+15=27)." },
        { p: "Qual a medida de um ângulo reto?", o: [{t:"45º",c:false}, {t:"90º",c:true}, {t:"180º",c:false}, {t:"360º",c:false}], pts: 2, exp: "Um ângulo reto tem exatamente 90 graus." },
        { p: "Quanto é 5 ao quadrado?", o: [{t:"10",c:false}, {t:"15",c:false}, {t:"20",c:false}, {t:"25",c:true}], pts: 2, exp: "5 elevado ao quadrado é 5 x 5 = 25." },
        { p: "Qual o MMC de 4 e 6?", o: [{t:"10",c:false}, {t:"12",c:true}, {t:"24",c:false}, {t:"6",c:false}], pts: 4, exp: "Os múltiplos de 4 são 4,8,12... e de 6 são 6,12... O menor múltiplo comum é 12." },
        { p: "1 quilograma equivale a quantas gramas?", o: [{t:"100g",c:false}, {t:"500g",c:false}, {t:"1000g",c:true}, {t:"10000g",c:false}], pts: 2, exp: "O prefixo 'quilo' significa mil, portanto 1 kg = 1000 gramas." },
        { p: "Qual o perímetro de um quadrado de lado 5cm?", o: [{t:"10cm",c:false}, {t:"15cm",c:false}, {t:"20cm",c:true}, {t:"25cm",c:false}], pts: 3, exp: "O perímetro é a soma dos 4 lados iguais: 5+5+5+5 = 20cm." },
        { p: "Qual a área de um retângulo de 4cm por 5cm?", o: [{t:"9cm²",c:false}, {t:"16cm²",c:false}, {t:"20cm²",c:true}, {t:"25cm²",c:false}], pts: 3, exp: "A área é base x altura (4 x 5 = 20)." },
        { p: "Resolva: (10 - 2) x 5", o: [{t:"40",c:true}, {t:"50",c:false}, {t:"10",c:false}, {t:"30",c:false}], pts: 3, exp: "Resolve-se primeiro os parênteses (10-2=8), e depois a multiplicação (8x5=40)." },
        { p: "A fração 1/2 equivale a qual número decimal?", o: [{t:"0.2",c:false}, {t:"0.25",c:false}, {t:"0.5",c:true}, {t:"1.2",c:false}], pts: 2, exp: "1 dividido por 2 resulta em 0,5 (a metade)." },
        { p: "Quanto é 10 elevado a 3 (10³)?", o: [{t:"30",c:false}, {t:"100",c:false}, {t:"300",c:false}, {t:"1000",c:true}], pts: 3, exp: "10³ significa 10 x 10 x 10 = 1000." },
        { p: "Qual é o dobro de 45?", o: [{t:"80",c:false}, {t:"90",c:true}, {t:"100",c:false}, {t:"450",c:false}], pts: 2, exp: "O dobro é o número multiplicado por 2 (45 x 2 = 90)." },
        { p: "Qual é a metade de 78?", o: [{t:"34",c:false}, {t:"36",c:false}, {t:"38",c:false}, {t:"39",c:true}], pts: 3, exp: "78 dividido por 2 é igual a 39." },
        { p: "Quantas unidades há em 1 dúzia e meia?", o: [{t:"12",c:false}, {t:"15",c:false}, {t:"18",c:true}, {t:"24",c:false}], pts: 2, exp: "Uma dúzia é 12, meia dúzia é 6. 12 + 6 = 18." },
        { p: "Um triângulo tem quantos lados?", o: [{t:"2",c:false}, {t:"3",c:true}, {t:"4",c:false}, {t:"5",c:false}], pts: 2, exp: "O prefixo 'tri' indica três. O triângulo é o polígono de 3 lados." },
        { p: "Somando 3/5 com 1/5 obtemos:", o: [{t:"2/5",c:false}, {t:"4/5",c:true}, {t:"4/10",c:false}, {t:"3/5",c:false}], pts: 3, exp: "Em frações com denominadores iguais, somamos os numeradores: 3+1 = 4. Resultado: 4/5." }
    ],
    "Português": [
        { p: "Qual o antônimo da palavra 'Bom'?", o: [{t:"Mau",c:true}, {t:"Mal",c:false}, {t:"Ruim",c:false}, {t:"Péssimo",c:false}], pts: 2, exp: "O antônimo de Bom é Mau (com U). Já o antônimo de Bem é Mal (com L)." },
        { p: "Qual o sinônimo mais adequado para 'Rápido'?", o: [{t:"Lento",c:false}, {t:"Devagar",c:false}, {t:"Veloz",c:true}, {t:"Calmo",c:false}], pts: 2, exp: "Sinônimos são palavras com sentido parecido. Rápido e veloz expressam velocidade." },
        { p: "Qual o plural correto de 'Cidadão'?", o: [{t:"Cidadões",c:false}, {t:"Cidadães",c:false}, {t:"Cidadãos",c:true}, {t:"Cidadões e Cidadãos",c:false}], pts: 3, exp: "A única forma correta no plural para 'cidadão' é 'cidadãos'." },
        { p: "Identifique o sujeito na frase: 'O cão latiu alto.'", o: [{t:"latiu",c:false}, {t:"O",c:false}, {t:"cão",c:false}, {t:"O cão",c:true}], pts: 3, exp: "O sujeito é de quem se fala, ou seja, aquele que pratica a ação de latir: 'O cão'." },
        { p: "Qual é o substantivo coletivo de lobos?", o: [{t:"Matilha",c:false}, {t:"Bando",c:false}, {t:"Alcateia",c:true}, {t:"Rebanho",c:false}], pts: 3, exp: "Um grupo de lobos é chamado de alcateia (matilha é para cães)." },
        { p: "Qual destas palavras é oxítona?", o: [{t:"Árvore",c:false}, {t:"Mesa",c:false}, {t:"Café",c:true}, {t:"Lápis",c:false}], pts: 3, exp: "Oxítonas têm a última sílaba tônica. Em ca-FÉ, a força está na última." },
        { p: "Qual destas palavras é proparoxítona?", o: [{t:"Casa",c:false}, {t:"Árvore",c:true}, {t:"Papel",c:false}, {t:"Feliz",c:false}], pts: 4, exp: "Todas as proparoxítonas (antepenúltima sílaba tônica) são acentuadas. Ex: ÁR-vo-re." },
        { p: "Qual a ortografia correta?", o: [{t:"Excessão",c:false}, {t:"Exceção",c:true}, {t:"Exseção",c:false}, {t:"Eceção",c:false}], pts: 3, exp: "A grafia correta da palavra que indica exclusão à regra é exceção, com XC e Ç." },
        { p: "Separe corretamente a palavra 'pássaro':", o: [{t:"pá-ssa-ro",c:false}, {t:"pás-sa-ro",c:true}, {t:"pász-a-ro",c:false}, {t:"pas-sa-ro",c:false}], pts: 2, exp: "Os dígrafos 'ss' e 'rr' devem sempre ficar em sílabas separadas (pás-sa-ro)." },
        { p: "Qual é o feminino de Cavaleiro?", o: [{t:"Cavaleira",c:false}, {t:"Dama",c:false}, {t:"Amazona",c:true}, {t:"Égua",c:false}], pts: 4, exp: "A mulher que monta a cavalo chama-se amazona. Dama é feminino de cavalheiro." },
        { p: "Qual destas palavras é um Pronome Pessoal?", o: [{t:"Meu",c:false}, {t:"Eu",c:true}, {t:"Este",c:false}, {t:"Qual",c:false}], pts: 2, exp: "'Eu' é um pronome pessoal do caso reto (1ª pessoa do singular)." },
        { p: "Qual é o adjetivo em: 'A casa velha caiu'?", o: [{t:"A",c:false}, {t:"casa",c:false}, {t:"velha",c:true}, {t:"caiu",c:false}], pts: 2, exp: "Adjetivo é a palavra que dá característica. 'Velha' caracteriza a 'casa'." },
        { p: "Indique um verbo no infinitivo:", o: [{t:"Corro",c:false}, {t:"Correndo",c:false}, {t:"Correr",c:true}, {t:"Corrido",c:false}], pts: 3, exp: "Verbos no infinitivo representam a ação pura e terminam em AR, ER ou IR." },
        { p: "Em que tempo verbal está a palavra 'fui'?", o: [{t:"Presente",c:false}, {t:"Passado",c:true}, {t:"Futuro",c:false}, {t:"Infinitivo",c:false}], pts: 2, exp: "'Fui' indica uma ação que já aconteceu (Pretérito Perfeito)." },
        { p: "Qual o plural de papel?", o: [{t:"Papels",c:false}, {t:"Papéos",c:false}, {t:"Papéis",c:true}, {t:"Papelles",c:false}], pts: 2, exp: "Palavras terminadas em -EL fazem plural em -ÉIS (papel -> papéis)." },
        { p: "Qual destas palavras é trissílaba?", o: [{t:"Sol",c:false}, {t:"Casa",c:false}, {t:"Caderno",c:true}, {t:"Computador",c:false}], pts: 3, exp: "Ca-der-no tem exatamente três sílabas." },
        { p: "Qual o antônimo de 'claro'?", o: [{t:"Branco",c:false}, {t:"Escuro",c:true}, {t:"Limpo",c:false}, {t:"Opaco",c:false}], pts: 2, exp: "Antônimo é o oposto. O contrário de um ambiente claro é escuro." },
        { p: "Qual o verbo na frase: 'Choveu ontem'?", o: [{t:"Choveu",c:true}, {t:"ontem",c:false}, {t:"Não há verbo",c:false}, {t:"Ambas",c:false}], pts: 3, exp: "'Choveu' é um verbo impessoal que indica fenômeno da natureza." },
        { p: "Qual é o singular de 'luzes'?", o: [{t:"Luse",c:false}, {t:"Luze",c:false}, {t:"Luz",c:true}, {t:"Lus",c:false}], pts: 2, exp: "A palavra 'luz' termina com Z. O plural forma-se acrescentando -ES." },
        { p: "Qual é o aumentativo de casa?", o: [{t:"Casinha",c:false}, {t:"Casona",c:false}, {t:"Casarão",c:true}, {t:"Casebre",c:false}], pts: 2, exp: "O aumentativo clássico e gramaticalmente aceito para casa é casarão." }
    ],
    "História": [
        { p: "Em que ano ocorreu o Descobrimento do Brasil?", o: [{t:"1492",c:false}, {t:"1500",c:true}, {t:"1822",c:false}, {t:"1889",c:false}], pts: 2, exp: "A esquadra de Pedro Álvares Cabral chegou ao Brasil no ano de 1500." },
        { p: "Em que ano o Brasil declarou a Independência?", o: [{t:"1500",c:false}, {t:"1822",c:true}, {t:"1889",c:false}, {t:"1989",c:false}], pts: 3, exp: "D. Pedro I declarou a independência de Portugal às margens do Ipiranga em 1822." },
        { p: "Quando aconteceu a Proclamação da República?", o: [{t:"1822",c:false}, {t:"1888",c:false}, {t:"1889",c:true}, {t:"1930",c:false}], pts: 4, exp: "O Marechal Deodoro da Fonseca proclamou a república em 15 de Novembro de 1889." },
        { p: "Quem comandava a esquadra que 'descobriu' o Brasil?", o: [{t:"Colombo",c:false}, {t:"Vasco da Gama",c:false}, {t:"Pedro A. Cabral",c:true}, {t:"D. Pedro I",c:false}], pts: 2, exp: "Pedro Álvares Cabral foi o capitão-mor da esquadra portuguesa que chegou em 1500." },
        { p: "Quem foi o primeiro imperador do Brasil?", o: [{t:"D. João VI",c:false}, {t:"D. Pedro I",c:true}, {t:"D. Pedro II",c:false}, {t:"Princesa Isabel",c:false}], pts: 3, exp: "D. Pedro I governou como imperador do Brasil após a Independência." },
        { p: "Em que ano ocorreu a abolição da escravatura (Lei Áurea)?", o: [{t:"1822",c:false}, {t:"1888",c:true}, {t:"1889",c:false}, {t:"1500",c:false}], pts: 3, exp: "A Lei Áurea foi assinada no dia 13 de maio de 1888." },
        { p: "Quem assinou a Lei Áurea?", o: [{t:"Leopoldina",c:false}, {t:"Carlota Joaquina",c:false}, {t:"Princesa Isabel",c:true}, {t:"Maria I",c:false}], pts: 2, exp: "A Princesa Isabel assinou a lei na ausência de seu pai, D. Pedro II." },
        { p: "Qual era a capital do Brasil antes de Brasília?", o: [{t:"Salvador",c:false}, {t:"Rio de Janeiro",c:true}, {t:"São Paulo",c:false}, {t:"Ouro Preto",c:false}], pts: 3, exp: "O Rio de Janeiro foi a capital federal até a inauguração de Brasília em 1960." },
        { p: "Tiradentes participou de qual movimento?", o: [{t:"Farroupilha",c:false}, {t:"Sabinada",c:false}, {t:"Inconfidência Mineira",c:true}, {t:"Cabanagem",c:false}], pts: 4, exp: "Joaquim José da Silva Xavier foi figura chave na Inconfidência Mineira (1789)." },
        { p: "Que tratado dividiu as terras descobertas entre Portugal e Espanha?", o: [{t:"Tratado de Madri",c:false}, {t:"Tratado de Tordesilhas",c:true}, {t:"Tratado de Paris",c:false}, {t:"Tratado de Versalhes",c:false}], pts: 4, exp: "Assinado em 1494, traçou uma linha imaginária dividindo o mundo entre as duas coroas." },
        { p: "A Guerra Fria foi um conflito ideológico entre quais nações?", o: [{t:"EUA e China",c:false}, {t:"EUA e Alemanha",c:false}, {t:"EUA e URSS",c:true}, {t:"Inglaterra e França",c:false}], pts: 3, exp: "Ocorreu entre os Estados Unidos (capitalista) e a União Soviética (socialista)." },
        { p: "Qual foi a primeira capital do Brasil?", o: [{t:"Rio de Janeiro",c:false}, {t:"Salvador",c:true}, {t:"São Paulo",c:false}, {t:"Recife",c:false}], pts: 3, exp: "Salvador foi a primeira capital e sede do governo-geral a partir de 1549." },
        { p: "Quem deu o grito de 'Independência ou Morte'?", o: [{t:"Tiradentes",c:false}, {t:"D. Pedro I",c:true}, {t:"Deodoro da Fonseca",c:false}, {t:"Cabral",c:false}], pts: 2, exp: "D. Pedro I gritou às margens do riacho Ipiranga." },
        { p: "Em que ano começou a Segunda Guerra Mundial?", o: [{t:"1914",c:false}, {t:"1939",c:true}, {t:"1945",c:false}, {t:"1929",c:false}], pts: 4, exp: "A guerra começou oficialmente quando a Alemanha invadiu a Polônia em setembro de 1939." },
        { p: "Quem era o presidente do Brasil durante a 2ª Guerra Mundial?", o: [{t:"Juscelino Kubitschek",c:false}, {t:"Jânio Quadros",c:false}, {t:"Getúlio Vargas",c:true}, {t:"Eurico Dutra",c:false}], pts: 4, exp: "Vargas governou o Brasil durante o Estado Novo, na época do conflito global." },
        { p: "Que civilização antiga construiu as pirâmides de Gizé?", o: [{t:"Maias",c:false}, {t:"Astecas",c:false}, {t:"Egípcios",c:true}, {t:"Romanos",c:false}], pts: 2, exp: "As pirâmides serviam como tumbas para os faraós no Egito Antigo." },
        { p: "Em que continente surgiram os primeiros seres humanos?", o: [{t:"Ásia",c:false}, {t:"Europa",c:false}, {t:"América",c:false}, {t:"África",c:true}], pts: 3, exp: "O continente africano é considerado o berço da humanidade." },
        { p: "Qual país europeu colonizou o Brasil?", o: [{t:"Espanha",c:false}, {t:"França",c:false}, {t:"Inglaterra",c:false}, {t:"Portugal",c:true}], pts: 2, exp: "O Brasil foi colônia de Portugal de 1500 até 1822." },
        { p: "Quem foi o líder mais famoso do Quilombo dos Palmares?", o: [{t:"Tiradentes",c:false}, {t:"Zumbi dos Palmares",c:true}, {t:"Lampião",c:false}, {t:"Aleijadinho",c:false}], pts: 3, exp: "Zumbi foi um líder guerreiro que resistiu à escravidão liderando o Quilombo dos Palmares." },
        { p: "Em que ano ocorreu a Revolução Francesa?", o: [{t:"1500",c:false}, {t:"1789",c:true}, {t:"1914",c:false}, {t:"1945",c:false}], pts: 4, exp: "A Revolução Francesa iniciou em 1789 com a Queda da Bastilha." }
    ],
    "Ciências": [
        { p: "Qual é o planeta mais próximo do Sol?", o: [{t:"Vênus",c:false}, {t:"Terra",c:false}, {t:"Mercúrio",c:true}, {t:"Marte",c:false}], pts: 2, exp: "Mercúrio é o primeiro planeta do Sistema Solar, sendo o mais próximo da estrela." },
        { p: "Qual o maior planeta do nosso sistema solar?", o: [{t:"Saturno",c:false}, {t:"Urano",c:false}, {t:"Júpiter",c:true}, {t:"Netuno",c:false}], pts: 2, exp: "Júpiter é um gigante gasoso, muito maior que todos os outros planetas juntos." },
        { p: "Qual é o satélite natural da Terra?", o: [{t:"Sol",c:false}, {t:"Marte",c:false}, {t:"Lua",c:true}, {t:"Europa",c:false}], pts: 2, exp: "A Lua é o único satélite natural a orbitar o planeta Terra." },
        { p: "Qual é o gás essencial que respiramos para sobreviver?", o: [{t:"Gás Carbônico",c:false}, {t:"Nitrogênio",c:false}, {t:"Oxigênio",c:true}, {t:"Hidrogênio",c:false}], pts: 2, exp: "O oxigênio (O2) é vital para a respiração celular humana." },
        { p: "Que gás as plantas absorvem durante a fotossíntese?", o: [{t:"Oxigênio",c:false}, {t:"Gás Carbônico",c:true}, {t:"Metano",c:false}, {t:"Hélio",c:false}], pts: 3, exp: "As plantas absorvem CO2 (Gás Carbônico) e liberam oxigênio." },
        { p: "Que órgão é responsável por bombear sangue no corpo?", o: [{t:"Pulmão",c:false}, {t:"Fígado",c:false}, {t:"Coração",c:true}, {t:"Rim",c:false}], pts: 2, exp: "O coração é um músculo que funciona como bomba impulsionadora do sangue." },
        { p: "Quantos ossos tem um ser humano adulto?", o: [{t:"150",c:false}, {t:"206",c:true}, {t:"300",c:false}, {t:"256",c:false}], pts: 4, exp: "Embora os bebês nasçam com mais ossos (que se fundem depois), um adulto tem 206." },
        { p: "Qual a substância mais abundante no corpo humano?", o: [{t:"Sangue",c:false}, {t:"Água",c:true}, {t:"Osso",c:false}, {t:"Músculo",c:false}], pts: 3, exp: "A água compõe cerca de 60% a 70% do peso corporal humano." },
        { p: "Como se chama o processo da lagarta virar borboleta?", o: [{t:"Evolução",c:false}, {t:"Metamorfose",c:true}, {t:"Mutação",c:false}, {t:"Crescimento",c:false}], pts: 2, exp: "A metamorfose é a transformação física que alguns animais sofrem no desenvolvimento." },
        { p: "A que reino pertencem os cogumelos?", o: [{t:"Plantae (Plantas)",c:false}, {t:"Animalia",c:false}, {t:"Fungi",c:true}, {t:"Monera",c:false}], pts: 3, exp: "Os cogumelos são fungos, pertencendo exclusivamente ao Reino Fungi." },
        { p: "Qual órgão principal é responsável pela respiração?", o: [{t:"Coração",c:false}, {t:"Estômago",c:false}, {t:"Pulmões",c:true}, {t:"Intestino",c:false}], pts: 2, exp: "Os pulmões são onde ocorre a troca gasosa do corpo com o ar." },
        { p: "Em que estado físico está a água em forma de gelo?", o: [{t:"Líquido",c:false}, {t:"Gasoso",c:false}, {t:"Sólido",c:true}, {t:"Plasma",c:false}], pts: 2, exp: "Abaixo de 0ºC, a água congela passando para o estado sólido." },
        { p: "Qual é o único mamífero capaz de voar de verdade?", o: [{t:"Pássaro",c:false}, {t:"Morcego",c:true}, {t:"Pinguim",c:false}, {t:"Esquilo-voador",c:false}], pts: 3, exp: "O morcego é o único mamífero adaptado para o voo contínuo (o esquilo apenas plana)." },
        { p: "A quantos graus a água ferve (ao nível do mar)?", o: [{t:"50 ºC",c:false}, {t:"90 ºC",c:false}, {t:"100 ºC",c:true}, {t:"120 ºC",c:false}], pts: 3, exp: "O ponto de ebulição da água pura ao nível do mar é de 100 graus Celsius." },
        { p: "O que a corrente sanguínea distribui pelo corpo?", o: [{t:"Apenas Água",c:false}, {t:"Apenas Ar",c:false}, {t:"Oxigênio e nutrientes",c:true}, {t:"Eletricidade",c:false}], pts: 3, exp: "O sangue transporta oxigênio dos pulmões e nutrientes da digestão para as células." },
        { p: "Qual o nome da estrela que ilumina nosso planeta?", o: [{t:"Lua",c:false}, {t:"Sol",c:true}, {t:"Sirius",c:false}, {t:"Alpha",c:false}], pts: 2, exp: "O Sol é uma estrela (uma enorme bola de gás quente) no centro do nosso sistema." },
        { p: "Que força nos mantém 'presos' ao chão na Terra?", o: [{t:"Magnetismo",c:false}, {t:"Fricção",c:false}, {t:"Gravidade",c:true}, {t:"Pressão",c:false}], pts: 3, exp: "A gravidade é a força de atração que a massa da Terra exerce sobre os corpos." },
        { p: "Qual destas doenças é causada por um vírus?", o: [{t:"Tuberculose",c:false}, {t:"Gripe",c:true}, {t:"Cólera",c:false}, {t:"Tétano",c:false}], pts: 4, exp: "A gripe é viral (Influenza). Tuberculose, cólera e tétano são causadas por bactérias." },
        { p: "Qual é o maior órgão do corpo humano?", o: [{t:"Fígado",c:false}, {t:"Cérebro",c:false}, {t:"Pele",c:true}, {t:"Intestino",c:false}], pts: 4, exp: "A pele reveste e protege o corpo, sendo classificada como o maior órgão." },
        { p: "Quantas patas tem um inseto (ex: formiga)?", o: [{t:"4",c:false}, {t:"6",c:true}, {t:"8",c:false}, {t:"10",c:false}], pts: 3, exp: "Todos os insetos adultos possuem 6 patas (3 pares). Aranhas não são insetos, têm 8 patas." }
    ]
};

// ==========================================
// LÓGICA DO APLICATIVO
// ==========================================
let perguntaAtual = null;
let timerInterval; // Guarda o ID do cronômetro
let tempoRestante; // Guarda os segundos

// --- SISTEMA DE ÁUDIO (Gerador de Bipe) ---
// Usamos a Web Audio API para criar o som sem precisar de arquivos .mp3
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function tocarBipe() {
    // Retoma o áudio caso o navegador tenha bloqueado antes do usuário clicar
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.type = 'sine'; // Som suave e contínuo
    oscillator.frequency.value = 800; // Tom do bipe (agudo, tipo relógio)
    
    // Configura o volume e faz o som ser curto (0.1 segundos)
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); // Volume 50%
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.1);
}

// Função que embaralha um array (Fisher-Yates)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para esconder todas as telas e mostrar a desejada
function mudarTela(idTela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(idTela).classList.add('ativa');
}

// Iniciar o Cronômetro de 60s
function iniciarTimer(objPergunta) {
    clearInterval(timerInterval); // Limpa qualquer timer anterior
    tempoRestante = 60;
    
    const displayTempo = document.getElementById('tempo-restante');
    displayTempo.innerText = `⏱️ ${tempoRestante}s`;
    displayTempo.classList.remove('tempo-esgotando'); // Remove o alerta vermelho inicial

    timerInterval = setInterval(() => {
        tempoRestante--;
        displayTempo.innerText = `⏱️ ${tempoRestante}s`;

        // Alerta nos últimos 10 segundos: Fica vermelho e apita!
        if (tempoRestante <= 10 && tempoRestante > 0) {
            displayTempo.classList.add('tempo-esgotando');
            tocarBipe(); // Toca o bipe gerado pelo navegador
        }

        // Tempo acabou
        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            verificarResposta(false, objPergunta, true); // true indica que esgotou o tempo
        }
    }, 1000); // Roda a cada 1000ms (1 segundo)
}

function sortearPergunta(materia) {
    // Garante que o contexto de áudio inicie na primeira interação do usuário
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const questoesMateria = banco[materia];
    
    // Escolhe uma pergunta aleatória do banco
    const randomIndex = Math.floor(Math.random() * questoesMateria.length);
    perguntaAtual = JSON.parse(JSON.stringify(questoesMateria[randomIndex]));
    
    // Configura o cabeçalho
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
        btn.onclick = () => verificarResposta(opcao.c, perguntaAtual, false);
        containerOpcoes.appendChild(btn);
    });

    mudarTela('tela-pergunta');
    iniciarTimer(perguntaAtual);
}

function verificarResposta(isCorreta, objPergunta, tempoEsgotado = false) {
    clearInterval(timerInterval); // Para o relógio e os bipes imediatamente

    const titulo = document.getElementById('titulo-feedback');
    const pontos = document.getElementById('pontos-feedback');
    const icone = document.getElementById('icone-feedback');

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
    mudarTela('tela-feedback');
}

function voltarMenu() {
    clearInterval(timerInterval); 
    mudarTela('tela-menu');
}
