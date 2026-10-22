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
            // COLE AQUI SUAS NOVAS QUESTÕES DE MATEMÁTICA DO 6º ANO
        ],
        "Português": [
            { id: "6ANO-PORT-F01", p: "Qual é a classe de palavras que dá nome a seres, objetos, lugares e sentimentos?", o: [{t:"Substantivo",c:true}, {t:"Adjetivo",c:false}, {t:"Verbo",c:false}, {t:"Artigo",c:false}], pts: 2, exp: "O substantivo nomeia tudo o que existe." },
            { id: "6ANO-PORT-M01", p: "Na análise sintática, qual é a definição de sujeito?", o: [{t:"O ser sobre o qual se faz uma declaração",c:true}, {t:"O conjunto de vírgulas",c:false}, {t:"A pontuação final",c:false}, {t:"O tempo do verbo",c:false}], pts: 3, exp: "O sujeito é o termo sobre o qual o predicado declara algo." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE PORTUGUÊS DO 6º ANO
        ],
        "História": [
            { id: "6ANO-HIST-F01", p: "No sistema de datação ocidental, qual evento marca o ano zero?", o: [{t:"Nascimento de Jesus",c:true}, {t:"Invenção da Escrita",c:false}, {t:"Fundação de Roma",c:false}, {t:"Queda de Constantinopla",c:false}], pts: 2, exp: "O calendário cristão adota o nascimento de Cristo como ano 1." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE HISTÓRIA DO 6º ANO
        ],
        "Ciências": [
            { id: "6ANO-CIEN-F01", p: "O que é a célula na biologia?", o: [{t:"A unidade básica da vida",c:true}, {t:"A camada de ar do planeta",c:false}, {t:"Um mineral das rochas",c:false}, {t:"Um fluido corporal",c:false}], pts: 2, exp: "A célula é a unidade funcional e estrutural básica de todos os seres vivos." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE CIÊNCIAS DO 6º ANO
        ]
    },

    // ------------------------------------------
    // 7º ANO
    // ------------------------------------------
    "7": {
        "Matemática": [
            { id: "7ANO-MAT-F01", p: "Qual o resultado de 2/5 + 1/5?", o: [{t:"3/10",c:false}, {t:"3/5",c:true}, {t:"2/5",c:false}, {t:"1/5",c:false}], pts: 2, exp: "Com denominadores iguais, somamos os numeradores (2+1 = 3) e mantemos o denominador." },
            { id: "7ANO-MAT-M01", p: "O conjunto dos Inteiros (Z) é formado por:", o: [{t:"Apenas positivos",c:false}, {t:"Apenas negativos",c:false}, {t:"Números com vírgula",c:false}, {t:"Naturais e seus opostos",c:true}], pts: 3, exp: "O conjunto Z engloba os números naturais, seus opostos negativos e o zero." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE MATEMÁTICA DO 7º ANO
        ],
        "Português": [
            { id: "7ANO-PORT-F01", p: "O que são palavras antônimas?", o: [{t:"Palavras com sentidos opostos",c:true}, {t:"Palavras com a mesma escrita",c:false}, {t:"Palavras com o mesmo som",c:false}, {t:"Palavras sem sentido",c:false}], pts: 2, exp: "Antônimos são palavras que expressam ideias contrárias." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE PORTUGUÊS DO 7º ANO
        ],
        "História": [
            { id: "7ANO-HIST-F01", p: "Qual era a principal atividade econômica no Feudalismo europeu?", o: [{t:"Comércio Imediato",c:false}, {t:"Agricultura de Subsistência",c:true}, {t:"Indústria",c:false}, {t:"Mineração",c:false}], pts: 2, exp: "A economia feudal baseava-se no cultivo da terra do feudo para sustento." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE HISTÓRIA DO 7º ANO
        ],
        "Ciências": [
            { id: "7ANO-CIEN-F01", p: "O que define um organismo autótrofo?", o: [{t:"Produz o próprio alimento",c:true}, {t:"Precisa caçar para comer",c:false}, {t:"Vive como parasita",c:false}, {t:"Decompõe matéria",c:false}], pts: 3, exp: "Organismos autótrofos (como as plantas) sintetizam seu próprio alimento." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE CIÊNCIAS DO 7º ANO
        ]
    },

    // ------------------------------------------
    // 8º ANO
    // ------------------------------------------
    "8": {
        "Matemática": [
            { id: "8ANO-MAT-M01", p: "Em uma equação, o que representa a incógnita (x)?", o: [{t:"O resultado",c:false}, {t:"O valor desconhecido",c:true}, {t:"O sinal de igual",c:false}, {t:"Uma constante",c:false}], pts: 3, exp: "A incógnita é o valor desconhecido que queremos descobrir." },
            { id: "8ANO-MAT-D01", p: "O que caracteriza uma inequação matemática?", o: [{t:"Uso de sinal de igual (=)",c:false}, {t:"Uso de sinais de desigualdade (>, <)",c:true}, {t:"Não ter solução",c:false}, {t:"Sem letras",c:false}], pts: 4, exp: "Inequações utilizam sinais de desigualdade." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE MATEMÁTICA DO 8º ANO
        ],
        "Português": [
            { id: "8ANO-PORT-M01", p: "O que é o predicado de uma oração?", o: [{t:"O autor do texto",c:false}, {t:"Tudo o que se informa sobre o sujeito",c:true}, {t:"A pontuação final",c:false}, {t:"Um tipo de adjetivo",c:false}], pts: 3, exp: "O predicado traz a informação sobre o sujeito." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE PORTUGUÊS DO 8º ANO
        ],
        "História": [
            { id: "8ANO-HIST-M01", p: "O princípio do 'Direito Divino dos Reis' no Absolutismo justificava:", o: [{t:"O poder absoluto do rei concedido por Deus",c:true}, {t:"A democracia direta",c:false}, {t:"A eleição do monarca",c:false}, {t:"O fim da monarquia",c:false}], pts: 3, exp: "Acreditava-se que o poder do rei vinha diretamente da vontade divina." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE HISTÓRIA DO 8º ANO
        ],
        "Ciências": [
            { id: "8ANO-CIEN-D01", p: "Qual a função da organela Mitocôndria?", o: [{t:"Respiração celular e geração de energia",c:true}, {t:"Armazenar água",c:false}, {t:"Digestão",c:false}, {t:"Fotossíntese",c:false}], pts: 4, exp: "A mitocôndria é a usina de energia da célula." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE CIÊNCIAS DO 8º ANO
        ]
    },

    // ------------------------------------------
    // 9º ANO
    // ------------------------------------------
    "9": {
        "Matemática": [
            { id: "9ANO-MAT-D01", p: "O que é o 'Espaço Amostral' na probabilidade?", o: [{t:"Conjunto de todos os resultados possíveis",c:true}, {t:"O erro da pesquisa",c:false}, {t:"A média final",c:false}, {t:"O valor mais comum",c:false}], pts: 4, exp: "Espaço amostral abrange todos os cenários possíveis de um experimento." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE MATEMÁTICA DO 9º ANO
        ],
        "Português": [
            { id: "9ANO-PORT-D01", p: "O que define uma oração na gramática?", o: [{t:"Enunciado estruturado em torno de um verbo",c:true}, {t:"Frase sem pontuação",c:false}, {t:"Texto de vários parágrafos",c:false}, {t:"Palavra isolada",c:false}], pts: 4, exp: "A oração exige a presença de verbo ou locução verbal." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE PORTUGUÊS DO 9º ANO
        ],
        "História": [
            { id: "9ANO-HIST-D01", p: "O Mercantilismo visava principalmente:", o: [{t:"Balança comercial favorável e acúmulo de metais",c:true}, {t:"Livre comércio global",c:false}, {t:"Fim dos impostos",c:false}, {t:"Industrialização do campo",c:false}], pts: 4, exp: "Monarquias absolutistas buscavam acumular ouro e prata no Tesouro." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE HISTÓRIA DO 9º ANO
        ],
        "Ciências": [
            { id: "9ANO-CIEN-D01", p: "O que é o DNA?", o: [{t:"Molécula que contém a informação genética",c:true}, {t:"Açúcar no sangue",c:false}, {t:"Proteína muscular",c:false}, {t:"Gás celular",c:false}], pts: 4, exp: "O DNA armazena o código genético dos seres vivos." }
            // COLE AQUI SUAS NOVAS QUESTÕES DE CIÊNCIAS DO 9º ANO
        ]
    }
};