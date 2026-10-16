// ==========================================
// BANCO DE QUESTÕES COMPLETO (Com IDs únicos)
// ==========================================
const banco = {
    "Matemática": [
        // --- NÍVEL FÁCIL ---
        { id: "MAT-F01", p: "No sistema decimal, qual o nome da posição ocupada pelo algarismo 5 no número 1.520?", o: [{t:"Centenas",c:true}, {t:"Dezenas",c:false}, {t:"Unidades",c:false}, {t:"Milhares",c:false}], pts: 2, exp: "No número 1.520, o 0 é unidade, o 2 é dezena e o 5 é centena." },
        { id: "MAT-F02", p: "O que caracteriza um segmento de reta na geometria?", o: [{t:"Uma curva fechada",c:false}, {t:"Parte limitada por dois pontos",c:true}, {t:"Uma linha sem fim",c:false}, {t:"Um ponto isolado",c:false}], pts: 2, exp: "Diferente da reta, o segmento é a parte da reta limitada por dois pontos." },
        { id: "MAT-F03", p: "Como é chamado o número que fica acima do traço em uma fração?", o: [{t:"Denominador",c:false}, {t:"Quociente",c:false}, {t:"Numerador",c:true}, {t:"Resto",c:false}], pts: 2, exp: "O número acima do traço é o numerador, indicando as partes tomadas da fração." },
        { id: "MAT-F04", p: "Como classificamos um ângulo que mede exatamente 90 graus?", o: [{t:"Agudo",c:false}, {t:"Obtuso",c:false}, {t:"Raso",c:false}, {t:"Reto",c:true}], pts: 2, exp: "Um ângulo exato de 90 graus é classificado como ângulo Reto." },
        { id: "MAT-F05", p: "Qual o nome do polígono que possui cinco lados?", o: [{t:"Pentágono",c:true}, {t:"Hexágono",c:false}, {t:"Quadrado",c:false}, {t:"Triângulo",c:false}], pts: 2, exp: "O polígono de 5 lados e 5 ângulos chama-se pentágono." },
        { id: "MAT-F06", p: "Qual a unidade padrão de medida de comprimento no Sistema Internacional?", o: [{t:"Litro",c:false}, {t:"Metro",c:true}, {t:"Grama",c:false}, {t:"Hora",c:false}], pts: 2, exp: "O Metro (m) é a unidade fundamental de comprimento no SI." },
        { id: "MAT-F07", p: "O que representa o símbolo de porcentagem (%) na matemática?", o: [{t:"Soma de 100",c:false}, {t:"Vezes 10",c:false}, {t:"Razão com denominador 100",c:true}, {t:"Raiz de 100",c:false}], pts: 2, exp: "A porcentagem é uma fração cujo denominador é igual a 100." },
        { id: "MAT-F08", p: "Qual linha divide uma figura em duas partes iguais que se sobrepõem?", o: [{t:"Paralela",c:false}, {t:"Diagonal",c:false}, {t:"Perímetro",c:false}, {t:"Eixo de simetria",c:true}], pts: 2, exp: "O eixo de simetria funciona como um espelho perfeito para a figura." },
        { id: "MAT-F09", p: "Como chamamos o atributo que pode ser medido em uma pesquisa (ex: idade)?", o: [{t:"Variável",c:true}, {t:"Gráfico",c:false}, {t:"Tabela",c:false}, {t:"Amostra",c:false}], pts: 2, exp: "A característica investigada numa pesquisa estatística é chamada de variável." },
        { id: "MAT-F10", p: "Qual o resultado da soma: 15,2 + 4,8?", o: [{t:"19,0",c:false}, {t:"20,0",c:true}, {t:"20,2",c:false}, {t:"10,0",c:false}], pts: 2, exp: "Alinhando as vírgulas: 15,2 + 4,8 = 20,0." },
        { id: "MAT-F11", p: "Qual o valor do produto: 12 x 5?", o: [{t:"50",c:false}, {t:"55",c:false}, {t:"60",c:true}, {t:"65",c:false}], pts: 2, exp: "O produto (multiplicação) de 12 por 5 resulta em 60." },
        { id: "MAT-F12", p: "Quanto é 10% de 250?", o: [{t:"10",c:false}, {t:"20",c:false}, {t:"50",c:false}, {t:"25",c:true}], pts: 2, exp: "Para calcular 10% de um número, basta dividi-lo por 10 (250 / 10 = 25)." },
        { id: "MAT-F13", p: "Qual o perímetro de um quadrado com lado de 6 cm?", o: [{t:"24 cm",c:true}, {t:"36 cm",c:false}, {t:"12 cm",c:false}, {t:"18 cm",c:false}], pts: 2, exp: "Perímetro é a soma dos 4 lados: 6 + 6 + 6 + 6 = 24 cm." },
        { id: "MAT-F14", p: "Qual o resultado de 2/5 + 1/5?", o: [{t:"3/10",c:false}, {t:"3/5",c:true}, {t:"2/5",c:false}, {t:"1/5",c:false}], pts: 2, exp: "Com denominadores iguais, somamos os numeradores (2+1 = 3) e mantemos o denominador." },
        { id: "MAT-F15", p: "Qual o resultado de 400 ÷ 8?", o: [{t:"40",c:false}, {t:"45",c:false}, {t:"50",c:true}, {t:"55",c:false}], pts: 2, exp: "Se 40 dividido por 8 é 5, logo 400 dividido por 8 é 50." },
        { id: "MAT-F16", p: "Qual o resultado de 100 - 37?", o: [{t:"73",c:false}, {t:"53",c:false}, {t:"67",c:false}, {t:"63",c:true}], pts: 2, exp: "A diferença entre 100 e 37 é exatamente 63." },
        { id: "MAT-F17", p: "Quanto é 0,5 x 100?", o: [{t:"50",c:true}, {t:"5",c:false}, {t:"500",c:false}, {t:"0,50",c:false}], pts: 2, exp: "Multiplicar por 100 desloca a vírgula duas casas para a direita (0,5 -> 50)." },
        { id: "MAT-F18", p: "Qual a área de um quadrado com lado de 3 cm?", o: [{t:"6 cm²",c:false}, {t:"9 cm²",c:true}, {t:"12 cm²",c:false}, {t:"3 cm²",c:false}], pts: 2, exp: "A área do quadrado é lado vezes lado (3 x 3 = 9 cm²)." },

        // --- NÍVEL MÉDIO ---
        { id: "MAT-M01", p: "O que define um número primo na matemática?", o: [{t:"Ser um número ímpar",c:false}, {t:"Terminar em 1 ou 7",c:false}, {t:"Ter apenas dois divisores (1 e ele mesmo)",c:true}, {t:"Ser divisível por 2",c:false}], pts: 3, exp: "Números primos são divisíveis exclusivamente por 1 e por eles mesmos." },
        { id: "MAT-M02", p: "O conjunto dos Inteiros (Z) é formado por:", o: [{t:"Apenas positivos",c:false}, {t:"Apenas negativos",c:false}, {t:"Números com vírgula",c:false}, {t:"Naturais e seus opostos",c:true}], pts: 3, exp: "O conjunto Z engloba os números naturais (0, 1, 2...), seus opostos negativos e o zero." },
        { id: "MAT-M03", p: "Como se chama o ponto zero onde os eixos X e Y se cruzam?", o: [{t:"Origem",c:true}, {t:"Ordenada",c:false}, {t:"Abscissa",c:false}, {t:"Quadrante",c:false}], pts: 3, exp: "O cruzamento dos eixos X e Y no plano cartesiano forma a Origem (0,0)." },
        { id: "MAT-M04", p: "Em uma equação, o que representa a incógnita (x)?", o: [{t:"O resultado",c:false}, {t:"O valor desconhecido",c:true}, {t:"O sinal de igual",c:false}, {t:"Uma constante",c:false}], pts: 3, exp: "A incógnita é o valor desconhecido que queremos descobrir para resolver a equação." },
        { id: "MAT-M05", p: "O que são ângulos complementares?", o: [{t:"Soma igual a 180°",c:false}, {t:"Ângulos iguais",c:false}, {t:"Soma igual a 90°",c:true}, {t:"Ângulos maiores que 90°",c:false}], pts: 3, exp: "Dois ângulos são complementares quando a soma de suas medidas é exatamente 90°." },
        { id: "MAT-M06", p: "Grandezas que aumentam na mesma razão são chamadas de:", o: [{t:"Inversas",c:false}, {t:"Opostas",c:false}, {t:"Fixas",c:false}, {t:"Diretamente Proporcionais",c:true}], pts: 3, exp: "Se uma grandeza aumenta e a outra aumenta na mesma proporção, são diretamente proporcionais." },
        { id: "MAT-M07", p: "Para calcular a área de um trapézio, precisamos das:", o: [{t:"Bases e altura",c:true}, {t:"Diagonais apenas",c:false}, {t:"Raio e diâmetro",c:false}, {t:"Apenas um lado",c:false}], pts: 3, exp: "A área do trapézio é a soma das bases, multiplicada pela altura e dividida por 2." },
        { id: "MAT-M08", p: "O que é a Média Aritmética simples?", o: [{t:"Valor mais comum",c:false}, {t:"Soma dividida pela quantidade",c:true}, {t:"Valor central",c:false}, {t:"Maior valor menos o menor",c:false}], pts: 3, exp: "A média aritmética é a soma de todos os valores dividida pela quantidade deles." },
        { id: "MAT-M09", p: "Na translação geométrica, a figura:", o: [{t:"Muda de tamanho",c:false}, {t:"Gira 90°",c:false}, {t:"Desliza sem girar",c:true}, {t:"Desaparece",c:false}], pts: 3, exp: "Na translação, a figura desloca-se pelo plano mudando de posição, mantendo tamanho e sem girar." },
        { id: "MAT-M10", p: "Qual o resultado de: -12 + 7?", o: [{t:"-19",c:false}, {t:"5",c:false}, {t:"19",c:false}, {t:"-5",c:true}], pts: 3, exp: "Se você deve 12 e tem 7, ao pagar o que tem, ainda fica devendo 5 (-5)." },
        { id: "MAT-M11", p: "Qual o resultado de: 2/3 x 4/5?", o: [{t:"8/15",c:true}, {t:"6/8",c:false}, {t:"10/12",c:false}, {t:"15/8",c:false}], pts: 3, exp: "Na multiplicação de frações faz-se numerador vezes numerador (2x4=8) e denominador vezes denominador (3x5=15)." },
        { id: "MAT-M12", p: "Qual o valor de x na equação: x + 15 = 40?", o: [{t:"55",c:false}, {t:"25",c:true}, {t:"30",c:false}, {t:"35",c:false}], pts: 3, exp: "Isolando o x, temos: x = 40 - 15, portanto x = 25." },
        { id: "MAT-M13", p: "Se 3 canetas custam 6 reais, quanto custam 10 canetas?", o: [{t:"10 reais",c:false}, {t:"30 reais",c:false}, {t:"20 reais",c:true}, {t:"60 reais",c:false}], pts: 3, exp: "Cada caneta custa 2 reais (6/3). Logo, 10 canetas custarão 20 reais (10x2)." },
        { id: "MAT-M14", p: "Qual a área de um retângulo com base de 8 cm e altura de 5 cm?", o: [{t:"13 cm²",c:false}, {t:"26 cm²",c:false}, {t:"400 cm²",c:false}, {t:"40 cm²",c:true}], pts: 3, exp: "A área do retângulo calcula-se fazendo base vezes altura (8 x 5 = 40 cm²)." },
        { id: "MAT-M15", p: "Qual o valor decimal correspondente à fração 1/2?", o: [{t:"0,5",c:true}, {t:"0,2",c:false}, {t:"0,12",c:false}, {t:"1,2",c:false}], pts: 3, exp: "A fração 1/2 representa a metade, que dividindo 1 por 2 resulta em 0,5." },
        { id: "MAT-M16", p: "Ao lançar um dado (1 a 6), qual a chance de sair um número par?", o: [{t:"1/6",c:false}, {t:"3/6",c:true}, {t:"1/2",c:false}, {t:"2/6",c:false}], pts: 3, exp: "Os números pares no dado são 2, 4 e 6 (3 opções) em um total de 6. Portanto, a probabilidade é 3/6." },
        { id: "MAT-M17", p: "Quanto é 0,15 x 10?", o: [{t:"15",c:false}, {t:"0,150",c:false}, {t:"1,05",c:false}, {t:"1,5",c:true}], pts: 3, exp: "Multiplicar por 10 desloca a vírgula uma casa para a direita (0,15 -> 1,5)." },
        { id: "MAT-M18", p: "Qual o complemento de um ângulo de 35°?", o: [{t:"145°",c:false}, {t:"155°",c:false}, {t:"55°",c:true}, {t:"45°",c:false}], pts: 3, exp: "O complemento é o que falta para chegar aos 90°. Fazendo 90° - 35° obtemos 55°." },

        // --- NÍVEL DIFÍCIL ---
        { id: "MAT-D01", p: "Qual a definição do conjunto dos Números Racionais (Q)?", o: [{t:"Números que podem ser frações",c:true}, {t:"Apenas decimais finitos",c:false}, {t:"Números sem zero",c:false}, {t:"Somente raízes exatas",c:false}], pts: 4, exp: "Os racionais são todos aqueles números que podem ser escritos na forma de fração." },
        { id: "MAT-D02", p: "O que caracteriza uma inequação matemática?", o: [{t:"Uso de sinal de igual (=)",c:false}, {t:"Uso de sinais de desigualdade (>, <)",c:true}, {t:"Ser impossível de resolver",c:false}, {t:"Não possuir letras",c:false}], pts: 4, exp: "Enquanto a equação usa a igualdade, a inequação usa relações de desigualdade (maior, menor)." },
        { id: "MAT-D03", p: "O que é o 'Espaço Amostral' em um experimento?", o: [{t:"O erro do cálculo",c:false}, {t:"O local da pesquisa",c:false}, {t:"Conjunto de todos os resultados possíveis",c:true}, {t:"O gráfico final",c:false}], pts: 4, exp: "Na probabilidade, o espaço amostral engloba todos os cenários ou resultados que podem acontecer." },
        { id: "MAT-D04", p: "O que define um polígono regular na geometria?", o: [{t:"Lados paralelos",c:false}, {t:"Ser desenhado à mão",c:false}, {t:"Ter muitos vértices",c:false}, {t:"Lados e ângulos iguais",c:true}], pts: 4, exp: "Um polígono é regular quando possui todos os seus lados congruentes e ângulos iguais." },
        { id: "MAT-D05", p: "Como calculamos o volume de um prisma reto?", o: [{t:"Área da base x altura",c:true}, {t:"Perímetro + altura",c:false}, {t:"Base x altura",c:false}, {t:"Lado ao quadrado",c:false}], pts: 4, exp: "O volume do prisma é calculado multiplicando-se a área da sua base pela sua altura." },
        { id: "MAT-D06", p: "O Princípio Multiplicativo diz que devemos:", o: [{t:"Somar as opções",c:false}, {t:"Multiplicar as opções de cada etapa",c:true}, {t:"Dividir o total por dois",c:false}, {t:"Subtrair as repetições",c:false}], pts: 4, exp: "Para combinar possibilidades de etapas independentes, multiplicamos o número de opções de cada uma." },
        { id: "MAT-D07", p: "Em um gráfico de pizza, o tamanho da fatia depende da:", o: [{t:"Cor escolhida",c:false}, {t:"Data da pesquisa",c:false}, {t:"Porcentagem ou frequência do dado",c:true}, {t:"Largura da legenda",c:false}], pts: 4, exp: "O tamanho da fatia (ângulo) é diretamente proporcional à frequência ou porcentagem daquele dado." },
        { id: "MAT-D08", p: "A fórmula do comprimento da circunferência é:", o: [{t:"π x r",c:false}, {t:"r²",c:false}, {t:"2 x π",c:false}, {t:"2 x π x r",c:true}], pts: 4, exp: "O comprimento da circunferência (C) é calculado pela fórmula C = 2 * π * r." },
        { id: "MAT-D09", p: "O 'Valor Numérico' de uma expressão é obtido ao:", o: [{t:"Trocar letras por números e resolver",c:true}, {t:"Inverter os sinais",c:false}, {t:"Contar as letras",c:false}, {t:"Desenhar um gráfico",c:false}], pts: 4, exp: "Substituímos as incógnitas/letras da expressão por seus respectivos números para achar o resultado." },
        { id: "MAT-D10", p: "Resolva: 2x - 4 = 12. Qual o valor de x?", o: [{t:"4",c:false}, {t:"8",c:true}, {t:"16",c:false}, {t:"6",c:false}], pts: 4, exp: "Temos 2x = 12 + 4 -> 2x = 16. O x será 16 dividido por 2, que é 8." },
        { id: "MAT-D11", p: "Qual o volume de um bloco com dimensões 5 x 3 x 2 cm?", o: [{t:"10 cm³",c:false}, {t:"15 cm³",c:false}, {t:"30 cm³",c:true}, {t:"25 cm³",c:false}], pts: 4, exp: "O volume de um bloco (paralelepípedo) é o produto das suas dimensões (5 x 3 x 2 = 30 cm³)." },
        { id: "MAT-D12", p: "Quanto é 20% de 50% de 200 reais?", o: [{t:"10 reais",c:false}, {t:"40 reais",c:false}, {t:"50 reais",c:false}, {t:"20 reais",c:true}], pts: 4, exp: "Primeiro, 50% de 200 é 100. Em seguida, calculamos 20% de 100, que resulta em 20 reais." },
        { id: "MAT-D13", p: "Qual o resultado da divisão: 3/5 ÷ 1/2?", o: [{t:"6/5",c:true}, {t:"3/10",c:false}, {t:"5/6",c:false}, {t:"2/5",c:false}], pts: 4, exp: "Na divisão de frações, repete-se a primeira e multiplica-se pelo inverso da segunda (3/5 x 2/1 = 6/5)." },
        { id: "MAT-D14", p: "Qual a área de um triângulo com base de 10 cm e altura de 6 cm?", o: [{t:"60 cm²",c:false}, {t:"30 cm²",c:true}, {t:"15 cm²",c:false}, {t:"100 cm²",c:false}], pts: 4, exp: "A área do triângulo é base vezes altura a dividir por dois. (10 x 6) / 2 = 60 / 2 = 30 cm²." },
        { id: "MAT-D15", p: "Se 2 operários fazem uma obra em 10 dias, 4 operários farão em:", o: [{t:"20 dias",c:false}, {t:"10 dias",c:false}, {t:"5 dias",c:true}, {t:"15 dias",c:false}], pts: 4, exp: "São grandezas inversamente proporcionais. O dobro de operários fará a obra na metade do tempo (5 dias)." },
        { id: "MAT-D16", p: "Em uma escala 1:100, quanto representam 5 cm no tamanho real?", o: [{t:"50 cm",c:false}, {t:"500 cm",c:true}, {t:"1 metro",c:false}, {t:"5 metros",c:false}], pts: 4, exp: "A escala 1:100 significa que 1 cm no desenho equivale a 100 cm no real. Logo, 5 x 100 = 500 cm." },
        { id: "MAT-D17", p: "Qual o Mínimo Múltiplo Comum (MMC) entre 12 e 18?", o: [{t:"36",c:true}, {t:"6",c:false}, {t:"72",c:false}, {t:"12",c:false}], pts: 4, exp: "Os múltiplos de 12 são 12, 24, 36... Os de 18 são 18, 36... O menor em comum é 36." },
        { id: "MAT-D18", p: "Qual o resultado de: (-5) x (-3) + 2?", o: [{t:"-13",c:false}, {t:"17",c:true}, {t:"15",c:false}, {t:"-15",c:false}], pts: 4, exp: "Primeiro resolvemos a multiplicação: (-5) x (-3) = +15. Depois a soma: 15 + 2 = 17." }
    ],


    "Português": [
        // --- NÍVEL FÁCIL ---
        { id: "PORT-F01", p: "Qual é a classe de palavras que dá nome a seres, objetos, lugares e sentimentos?", o: [{t:"Substantivo",c:true}, {t:"Adjetivo",c:false}, {t:"Verbo",c:false}, {t:"Artigo",c:false}], pts: 2, exp: "O substantivo é a classe gramatical responsável por nomear tudo o que existe." },
        { id: "PORT-F02", p: "Qual palavra é usada para atribuir qualidades, estados ou características ao substantivo?", o: [{t:"Advérbio",c:false}, {t:"Adjetivo",c:true}, {t:"Numeral",c:false}, {t:"Preposição",c:false}], pts: 2, exp: "O adjetivo acompanha o substantivo para lhe dar uma característica." },
        { id: "PORT-F03", p: "O que é um verbo na língua portuguesa?", o: [{t:"Palavra que substitui o nome",c:false}, {t:"Palavra que define o gênero",c:false}, {t:"Palavra que indica ação, estado ou fenômeno",c:true}, {t:"Palavra que liga dois substantivos",c:false}], pts: 2, exp: "Verbos são palavras que expressam ações, estados ou fenômenos da natureza." },
        { id: "PORT-F04", p: "Como chamamos as palavras que possuem significados semelhantes entre si?", o: [{t:"Homônimas",c:false}, {t:"Antônimas",c:false}, {t:"Parônimas",c:false}, {t:"Sinônimas",c:true}], pts: 2, exp: "Palavras sinônimas são aquelas que possuem sentidos parecidos ou iguais." },
        { id: "PORT-F05", p: "O que são palavras antônimas?", o: [{t:"Palavras com sentidos opostos",c:true}, {t:"Palavras com a mesma escrita",c:false}, {t:"Palavras com o mesmo som",c:false}, {t:"Palavras sem significado claro",c:false}], pts: 2, exp: "Antônimos são palavras que expressam ideias contrárias." },
        { id: "PORT-F06", p: "Qual é a principal função do ponto final em um texto?", o: [{t:"Indicar uma pergunta",c:false}, {t:"Encerrar uma frase declarativa",c:true}, {t:"Mostrar uma interrupção",c:false}, {t:"Separar elementos de uma lista",c:false}], pts: 2, exp: "O ponto final é usado para terminar uma ideia ou frase declarativa." },
        { id: "PORT-F07", p: "Para que serve o ponto de interrogação?", o: [{t:"Expressar uma ordem",c:false}, {t:"Finalizar uma exclamação",c:false}, {t:"Indicar uma pergunta direta",c:true}, {t:"Substituir o uso da vírgula",c:false}], pts: 2, exp: "Utiliza-se o ponto de interrogação sempre que se faz uma pergunta direta." },
        { id: "PORT-F08", p: "Qual é a função da classe gramatical chamada advérbio?", o: [{t:"Nomear os objetos da frase",c:false}, {t:"Substituir o sujeito principal",c:false}, {t:"Caracterizar apenas substantivos",c:false}, {t:"Modificar o verbo, adjetivo ou advérbio",c:true}], pts: 2, exp: "O advérbio indica a circunstância da ação (tempo, modo, lugar)." },
        { id: "PORT-F09", p: "O que é um artigo na gramática?", o: [{t:"Palavra que antecede o substantivo",c:true}, {t:"Palavra que indica uma ação",c:false}, {t:"Palavra que liga duas orações",c:false}, {t:"Palavra que indica emoção",c:false}], pts: 2, exp: "O artigo antecede o substantivo para determiná-lo ou indeterminá-lo." },
        { id: "PORT-F10", p: "O que caracteriza a classe dos pronomes?", o: [{t:"Palavras que indicam números",c:false}, {t:"Palavras que substituem ou acompanham nomes",c:true}, {t:"Palavras que dão ordens diretas",c:false}, {t:"Palavras que imitam sons reais",c:false}], pts: 2, exp: "Pronomes são usados para evitar a repetição de nomes num texto." },
        { id: "PORT-F11", p: "Qual é a principal característica de uma fábula?", o: [{t:"Uso de dados científicos",c:false}, {t:"Ser um texto longo e jurídico",c:false}, {t:"Presença de animais com moral da história",c:true}, {t:"Relatar fatos reais do jornalismo",c:false}], pts: 2, exp: "Fábulas trazem animais personificados e terminam com um ensinamento (a moral da história)." },
        { id: "PORT-F12", p: "Qual é o objetivo principal do gênero textual notícia?", o: [{t:"Convencer o leitor a comprar algo",c:false}, {t:"Contar uma piada ou história fictícia",c:false}, {t:"Expressar os sentimentos do autor",c:false}, {t:"Informar sobre fatos reais e atuais",c:true}], pts: 2, exp: "A notícia tem caráter informativo e lida com acontecimentos verdadeiros e do momento." },
        { id: "PORT-F13", p: "Como definimos a classe gramatical do numeral?", o: [{t:"Indica quantidade, ordem ou fração",c:true}, {t:"Indica o nome de cidades e países",c:false}, {t:"Indica uma característica física",c:false}, {t:"Substitui o uso dos verbos",c:false}], pts: 2, exp: "O numeral exprime quantidade exata de seres, ordem, múltiplos ou frações." },
        { id: "PORT-F14", p: "O que é a sílaba tônica de uma palavra?", o: [{t:"É a primeira sílaba de toda palavra",c:false}, {t:"É a sílaba pronunciada com mais força",c:true}, {t:"É a sílaba que nunca recebe acento",c:false}, {t:"É a sílaba que tem mais vogais",c:false}], pts: 2, exp: "A sílaba tônica é a que possui a maior intensidade sonora na palavra." },
        { id: "PORT-F15", p: "Quando uma palavra é considerada oxítona?", o: [{t:"Quando a antepenúltima sílaba é tônica",c:false}, {t:"Quando ela possui apenas uma sílaba",c:false}, {t:"Quando a última sílaba é tônica",c:true}, {t:"Quando ela não possui acento gráfico",c:false}], pts: 2, exp: "Oxítonas têm a sua força na última sílaba, como a-MOR ou ca-FÉ." },
        { id: "PORT-F16", p: "O que caracteriza uma palavra paroxítona?", o: [{t:"A sílaba forte é a primeira",c:false}, {t:"A sílaba forte é a última",c:false}, {t:"Todas as sílabas são iguais",c:false}, {t:"A sílaba tônica é a penúltima",c:true}], pts: 2, exp: "As paroxítonas têm a penúltima sílaba como a mais forte (ex: CA-sa, LÁ-pis)." },
        { id: "PORT-F17", p: "Qual é a regra principal das palavras proparoxítonas?", o: [{t:"Todas são obrigatoriamente acentuadas",c:true}, {t:"Nenhuma pode receber acento gráfico",c:false}, {t:"Só recebem acento se terminarem em S",c:false}, {t:"Só recebem acento se forem nomes",c:false}], pts: 2, exp: "Esta é a regra mais simples da acentuação: todas as proparoxítonas levam acento gráfico." },
        { id: "PORT-F18", p: "O que é um encontro vocálico?", o: [{t:"A união de duas consoantes fortes",c:false}, {t:"O encontro de vogais em uma palavra",c:true}, {t:"A separação silábica correta",c:false}, {t:"O início de um novo parágrafo",c:false}], pts: 2, exp: "Acontece quando duas ou mais vogais se encontram na palavra (ex: pEI-xe)." },

        // --- NÍVEL MÉDIO ---
        { id: "PORT-M01", p: "Na análise sintática, qual é a definição de sujeito?", o: [{t:"A palavra que indica o tempo da frase",c:false}, {t:"O conjunto de vírgulas da frase",c:false}, {t:"O ser sobre o qual se faz uma declaração",c:true}, {t:"A pontuação final da oração",c:false}], pts: 3, exp: "O sujeito é o termo da oração a respeito do qual o predicado diz alguma coisa." },
        { id: "PORT-M02", p: "O que é o predicado de uma oração?", o: [{t:"O nome do autor do texto lido",c:false}, {t:"O termo que caracteriza o substantivo",c:false}, {t:"A pessoa com quem se fala diretamente",c:false}, {t:"Tudo o que se informa sobre o sujeito",c:true}], pts: 3, exp: "O predicado contém a ação e todas as informações referentes ao sujeito da frase." },
        { id: "PORT-M03", p: "O que é uma preposição?", o: [{t:"Palavra que liga termos estabelecendo relação",c:true}, {t:"Palavra que indica números ordinais",c:false}, {t:"Palavra usada para gritar ou exclamar",c:false}, {t:"Palavra que substitui o verbo principal",c:false}], pts: 3, exp: "A preposição conecta palavras, fazendo com que o segundo termo complete o primeiro." },
        { id: "PORT-M04", p: "Qual é a função da conjunção?", o: [{t:"Dar nome aos seres inanimados",c:false}, {t:"Ligar orações ou palavras semelhantes",c:true}, {t:"Indicar o plural dos substantivos",c:false}, {t:"Modificar apenas o sentido dos nomes",c:false}], pts: 3, exp: "As conjunções unem orações ou termos de mesma função sintática (como 'e', 'mas', 'ou')." },
        { id: "PORT-M05", p: "O que define um sujeito oculto?", o: [{t:"Quando há dois núcleos na oração",c:false}, {t:"Quando o sujeito é inexistente",c:false}, {t:"Identificado pela desinência do verbo",c:true}, {t:"Quando o sujeito aparece no fim da frase",c:false}], pts: 3, exp: "Oculto (ou elíptico) é o sujeito que não está expresso, mas deduz-se facilmente pelo verbo." },
        { id: "PORT-M06", p: "Como reconhecemos um sujeito composto?", o: [{t:"Possui apenas um verbo de ligação",c:false}, {t:"Não pode ser identificado no texto",c:false}, {t:"É formado por um único núcleo",c:false}, {t:"Apresenta dois ou mais núcleos",c:true}], pts: 3, exp: "Sujeito composto possui mais do que um núcleo principal. (ex: 'Cães e gatos brincam')." },
        { id: "PORT-M07", p: "O que é a metáfora?", o: [{t:"Comparação implícita sem conectivo",c:true}, {t:"Exagero intencional de uma ideia",c:false}, {t:"Repetição de sons consonantais",c:false}, {t:"Imitação de sons da natureza",c:false}], pts: 3, exp: "A metáfora é uma figura de linguagem que compara algo sem usar o termo 'como'." },
        { id: "PORT-M08", p: "Qual a diferença da comparação para a metáfora?", o: [{t:"A comparação não usa palavras",c:false}, {t:"A comparação usa conectivos (ex: como)",c:true}, {t:"A comparação é sempre um exagero",c:false}, {t:"Não existe diferença entre as duas",c:false}], pts: 3, exp: "A comparação é explícita, utilizando elementos conectivos (como, tal qual)." },
        { id: "PORT-M09", p: "O que é um verbo intransitivo?", o: [{t:"Verbo que exige dois objetos",c:false}, {t:"Verbo que não possui sujeito",c:false}, {t:"Verbo com sentido completo",c:true}, {t:"Verbo que liga nome a característica",c:false}], pts: 3, exp: "O verbo intransitivo não precisa de complemento para que a ação faça sentido (ex: A planta morreu)." },
        { id: "PORT-M10", p: "O que define um verbo transitivo?", o: [{t:"Indica fenômeno da natureza",c:false}, {t:"Indica apenas o estado do sujeito",c:false}, {t:"Verbo que ocorre apenas no passado",c:false}, {t:"Necessita de complemento para ter sentido",c:true}], pts: 3, exp: "Sem um complemento (objeto), a ação do verbo transitivo fica incompleta na oração." },
        { id: "PORT-M11", p: "Como classificamos o objeto direto?", o: [{t:"Complemento sem preposição obrigatória",c:true}, {t:"Sujeito que sofre a ação do verbo",c:false}, {t:"Advérbio que indica o lugar da ação",c:false}, {t:"Indica a circunstância de tempo",c:false}], pts: 3, exp: "O objeto direto liga-se ao verbo diretamente, sem a obrigatoriedade de uma preposição." },
        { id: "PORT-M12", p: "O que caracteriza o objeto indireto?", o: [{t:"É ligado ao sujeito por um adjetivo",c:false}, {t:"É o complemento ligado por preposição",c:true}, {t:"É o verbo principal da oração",c:false}, {t:"Indica a circunstância de tempo",c:false}], pts: 3, exp: "O objeto indireto completa o verbo, mas liga-se a ele através de uma preposição válida." },
        { id: "PORT-M13", p: "O que ocorre para existir a crase?", o: [{t:"União de duas consoantes iguais",c:false}, {t:"Separação de vogais na sílaba",c:false}, {t:"Fusão da preposição A com artigo A",c:true}, {t:"Acentuação de todas as paroxítonas",c:false}], pts: 3, exp: "A crase é o fenômeno da fusão da preposição 'A' com o artigo feminino 'A', indicado pelo acento grave (`)." },
        { id: "PORT-M14", p: "Qual é a definição de hiato?", o: [{t:"Encontro consonantal inseparável",c:false}, {t:"Vogais juntas na mesma sílaba",c:false}, {t:"Vogal e consoante na mesma sílaba",c:false}, {t:"Vogais juntas que se separam nas sílabas",c:true}], pts: 3, exp: "No hiato, duas vogais estão lado a lado na palavra, mas separam-se ao dividir as sílabas (ex: sa-Ú-de)." },
        { id: "PORT-M15", p: "O que é um ditongo?", o: [{t:"Vogais juntas na mesma sílaba",c:true}, {t:"Duas consoantes na mesma sílaba",c:false}, {t:"Três vogais na mesma sílaba",c:false}, {t:"Vogais separadas por um hífen",c:false}], pts: 3, exp: "O ditongo é o encontro de uma vogal e uma semivogal juntas na mesma sílaba (ex: cAI-xa)." },
        { id: "PORT-M16", p: "O que é a derivação prefixal?", o: [{t:"Acréscimo de sufixo após o radical",c:false}, {t:"Acréscimo de prefixo antes do radical",c:true}, {t:"Junção de duas palavras completas",c:false}, {t:"Mudança da classe gramatical",c:false}], pts: 3, exp: "Ocorre quando um prefixo é adicionado ao início da palavra para formar uma nova (ex: IN-feliz)." },
        { id: "PORT-M17", p: "Como ocorre a derivação sufixal?", o: [{t:"Redução de uma palavra longa",c:false}, {t:"Repetição da primeira sílaba",c:false}, {t:"Acréscimo de sufixo após o radical",c:true}, {t:"Colocação de um termo no início",c:false}], pts: 3, exp: "Ocorre quando um sufixo é adicionado ao final da palavra original (ex: feliz-MENTE)." },
        { id: "PORT-M18", p: "Qual é a definição de variação linguística?", o: [{t:"Erros que devem ser proibidos",c:false}, {t:"Uso de línguas estrangeiras",c:false}, {t:"Regras exclusivas da gramática",c:false}, {t:"Mudanças da língua por região ou grupo",c:true}], pts: 3, exp: "A língua sofre variações históricas, sociais, geográficas ou situacionais em cada grupo." },

        // --- NÍVEL DIFÍCIL ---
        { id: "PORT-D01", p: "O que define uma oração na gramática?", o: [{t:"Enunciado que se organiza em torno de verbo",c:true}, {t:"Qualquer frase sem sinais de pontuação",c:false}, {t:"Texto longo com vários parágrafos",c:false}, {t:"Unidade que não possui sentido próprio",c:false}], pts: 4, exp: "Para ser uma oração, a frase precisa conter obrigatoriamente um verbo ou locução verbal." },
        { id: "PORT-D02", p: "O que é um período composto?", o: [{t:"Período com apenas uma oração",c:false}, {t:"Período com duas ou mais orações",c:true}, {t:"Período que não possui verbos",c:false}, {t:"Período usado apenas em poesias",c:false}], pts: 4, exp: "Um período composto possui mais de um verbo ou locução verbal." },
        { id: "PORT-D03", p: "Como definimos as orações coordenadas?", o: [{t:"Orações que não possuem verbos",c:false}, {t:"Orações que dependem de outra",c:false}, {t:"Orações independentes sintaticamente",c:true}, {t:"Orações que funcionam como adjetivo",c:false}], pts: 4, exp: "As coordenadas não dependem umas das outras para fazer sentido; são sintaticamente independentes." },
        { id: "PORT-D04", p: "O que são orações subordinadas?", o: [{t:"Orações que encerram o texto",c:false}, {t:"Orações totalmente independentes",c:false}, {t:"Orações que não seguem regras",c:false}, {t:"Orações que exercem função em outra",c:true}], pts: 4, exp: "A oração subordinada depende sintaticamente da oração principal para ter sentido completo." },
        { id: "PORT-D05", p: "O que é o predicativo do sujeito?", o: [{t:"Termo que dá característica ao sujeito",c:true}, {t:"Verbo que indica uma ação brusca",c:false}, {t:"Nome do sujeito quando ele é oculto",c:false}, {t:"Pontuação que separa o sujeito do verbo",c:false}], pts: 4, exp: "Atribui uma qualidade ou estado ao sujeito, normalmente intermediado por um verbo de ligação." },
        { id: "PORT-D06", p: "Qual a função do verbo de ligação?", o: [{t:"Indicar uma ação do sujeito",c:false}, {t:"Ligar o sujeito a uma característica",c:true}, {t:"Ligar duas frases sem usar vírgulas",c:false}, {t:"Substituir o uso de preposições",c:false}], pts: 4, exp: "O verbo de ligação (ser, estar, ficar...) não indica ação, mas apenas liga o sujeito ao seu estado." },
        { id: "PORT-D07", p: "O que é um adjunto adnominal?", o: [{t:"Termo que indica o tempo do verbo",c:false}, {t:"Dar nome a seres vivos na frase",c:false}, {t:"Termo que acompanha e modifica substantivo",c:true}, {t:"Preposição que inicia a oração",c:false}], pts: 4, exp: "Determina, modifica ou especifica um substantivo na oração (ex: O MEU carro NOVO)." },
        { id: "PORT-D08", p: "Qual é a função do adjunto adverbial?", o: [{t:"Verbo que liga o nome ao predicado",c:false}, {t:"Caracterizar apenas o substantivo",c:false}, {t:"Ligar o sujeito ao seu predicativo",c:false}, {t:"Indicar circunstância (tempo, lugar, modo)",c:true}], pts: 4, exp: "O adjunto adverbial expressa uma circunstância e modifica um verbo, adjetivo ou advérbio." },
        { id: "PORT-D09", p: "O que caracteriza a hipérbole?", o: [{t:"Uso de expressões com exagero intencional",c:true}, {t:"Comparação entre dois seres diferentes",c:false}, {t:"Repetição de sons no início das palavras",c:false}, {t:"Suavização de uma notícia ruim",c:false}], pts: 4, exp: "Hipérbole é a figura de linguagem usada para expressar uma ideia com exagero (ex: 'Estou a morrer de rir')." },
        { id: "PORT-D10", p: "O que é personificação ou prosopopeia?", o: [{t:"Imitar o jeito de falar de outra pessoa",c:false}, {t:"Dar características humanas a seres inanimados",c:true}, {t:"Exagerar qualidades de um objeto",c:false}, {t:"Comparar pessoas com animais selvagens",c:false}], pts: 4, exp: "Atribui sentimentos e ações humanas a seres não-humanos ou inanimados." },
        { id: "PORT-D11", p: "Qual é a definição de eufemismo?", o: [{t:"Exagero dramático de uma situação",c:false}, {t:"Comparação direta usando conectivos",c:false}, {t:"Suavizar uma expressão desagradável",c:true}, {t:"Repetir a mesma palavra várias vezes",c:false}], pts: 4, exp: "Substitui um termo forte ou chocante por outro mais agradável (ex: 'Partiu desta para melhor')." },
        { id: "PORT-D12", p: "O que define a ironia como figura?", o: [{t:"Dizer algo querendo reforçar o sentido real",c:false}, {t:"Usar palavras difíceis para confundir",c:false}, {t:"Repetir sons de vogais na mesma frase",c:false}, {t:"Dizer o contrário do que se pretende",c:true}], pts: 4, exp: "Usa-se a ironia para expressar uma ideia dizendo exatamente o seu oposto de forma sarcástica." },
        { id: "PORT-D13", p: "O que são palavras homônimas?", o: [{t:"Mesma grafia ou som, mas sentidos diferentes",c:true}, {t:"Palavras que possuem apenas uma sílaba",c:false}, {t:"Palavras com significados idênticos",c:false}, {t:"Palavras que não possuem consoantes",c:false}], pts: 4, exp: "São palavras iguais na pronúncia ou na escrita, mas com sentidos diferentes (ex: manga da blusa / manga fruta)." },
        { id: "PORT-D14", p: "Como definimos as palavras parônimas?", o: [{t:"Palavras lidas igual de trás para frente",c:false}, {t:"Parecidas na grafia ou som, mas sentidos diferentes",c:true}, {t:"Palavras que rimam perfeitamente no final",c:false}, {t:"Nomes próprios usados como substantivos",c:false}], pts: 4, exp: "São muito semelhantes na escrita e no som, mas não são idênticas (ex: cavaleiro e cavalheiro)." },
        { id: "PORT-D15", p: "O que é a ambiguidade em um texto?", o: [{t:"Erro de concordância entre sujeito e verbo",c:false}, {t:"Texto escrito em duas línguas diferentes",c:false}, {t:"Duplicidade de sentido que gera confusão",c:true}, {t:"Uso de letras maiúsculas em excesso",c:false}], pts: 4, exp: "Ocorre quando um texto permite mais de uma interpretação, o que pode prejudicar a clareza." },
        { id: "PORT-D16", p: "Qual é a definição de coesão textual?", o: [{t:"A margem correta das folhas de um livro",c:false}, {t:"O uso de rimas em textos não poéticos",c:false}, {t:"A contagem de palavras em cada parágrafo",c:false}, {t:"Ligação entre partes do texto por conectivos",c:true}], pts: 4, exp: "A coesão é a conexão harmoniosa entre as frases e parágrafos através de palavras de ligação." },
        { id: "PORT-D17", p: "O que caracteriza a coerência textual?", o: [{t:"Relação lógica que dá sentido ao texto",c:true}, {t:"Escrita sem erros de ortografia ou acento",c:false}, {t:"Uso de vocabulário muito difícil e raro",c:false}, {t:"Formatação visual atraente da página",c:false}], pts: 4, exp: "O texto coerente tem sentido contínuo, sem contradições lógicas nas suas ideias." },
        { id: "PORT-D18", p: "Qual é a definição de vocativo?", o: [{t:"Verbo que indica o chamamento de alguém",c:false}, {t:"Termo usado para chamar ou interpelar",c:true}, {t:"Sujeito que aparece apenas no fim da frase",c:false}, {t:"Complemento que vem sempre sem preposição",c:false}], pts: 4, exp: "É usado para evocar o ouvinte real ou imaginário na oração e é sempre isolado por vírgulas." }
    ],



    "História": [
        // --- NÍVEL FÁCIL ---
        { id: "HIST-F01", p: "No sistema de datação ocidental, qual evento marca o ano zero?", o: [{t:"Invenção da Escrita",c:false}, {t:"Fundação de Roma",c:false}, {t:"Nascimento de Jesus",c:true}, {t:"Queda de Constantinopla",c:false}], pts: 2, exp: "O calendário cristão (gregoriano) adota o nascimento de Cristo como o ano 1, marcando a divisão entre a.C. e d.C." },
        { id: "HIST-F02", p: "Os grupos humanos no Paleolítico eram caçadores e coletores. Qual era sua principal forma de deslocamento?", o: [{t:"Nomadismo",c:true}, {t:"Sedentarismo",c:false}, {t:"Urbanização",c:false}, {t:"Migração Forçada",c:false}], pts: 2, exp: "Como não produziam o próprio alimento, mudavam-se constantemente (nomadismo) quando os recursos locais acabavam." },
        { id: "HIST-F03", p: "Qual grande transformação humana ocorreu no período Neolítico com o desenvolvimento da agricultura?", o: [{t:"Transporte",c:false}, {t:"Fim da Agricultura",c:false}, {t:"Sedentarização",c:true}, {t:"Urbanização Imediata",c:false}], pts: 2, exp: "A agricultura permitiu que os grupos humanos se fixassem num único lugar, tornando-se sedentários." },
        { id: "HIST-F04", p: "Quais civilizações pré-colombianas construíram grandes pirâmides na região do México e Guatemala?", o: [{t:"Incas e Tupis",c:false}, {t:"Astecas e Maias",c:true}, {t:"Iroqueses e Sioux",c:false}, {t:"Romanos e Egípcios",c:false}], pts: 2, exp: "Maias e Astecas destacaram-se pela arquitetura monumental (pirâmides em degraus) na região da Mesoamérica." },
        { id: "HIST-F05", p: "Qual era o principal objetivo de Portugal ao colonizar o Brasil inicialmente?", o: [{t:"Exploração de Recursos (Pau-Brasil) e Ouro",c:true}, {t:"Criação da Mochila",c:false}, {t:"Conversão de Animais",c:false}, {t:"Urbanização Imediata",c:false}], pts: 2, exp: "O foco inicial era o extrativismo (Pau-Brasil) para gerar lucros mercantilistas para a Coroa." },
        { id: "HIST-F06", p: "Quem foi o monge alemão que iniciou a Reforma Protestante ao publicar as 95 Teses?", o: [{t:"Martinho Lutero",c:true}, {t:"Leonardo da Vinci",c:false}, {t:"Júlio César",c:false}, {t:"Nicolau Copérnico",c:false}], pts: 2, exp: "Em 1517, Lutero fixou as 95 Teses criticando práticas da Igreja Católica, como a venda de indulgências." },
        { id: "HIST-F07", p: "Qual era a principal atividade econômica no Feudalismo europeu?", o: [{t:"Comércio Imediato",c:false}, {t:"Mochila",c:false}, {t:"Agricultura de Subsistência",c:true}, {t:"Conversão de Animais",c:false}], pts: 2, exp: "A economia baseava-se na terra (feudo) e a produção agrícola era destinada ao consumo próprio, não ao comércio." },
        { id: "HIST-F08", p: "No sistema a.C. e d.C., qual o significado de d.C.?", o: [{t:"Antes de Cristo",c:false}, {t:"Depois de Cristo",c:true}, {t:"Desenvolvimento do Comércio",c:false}, {t:"Fim da Urbanização",c:false}], pts: 2, exp: "A sigla d.C. significa 'Depois de Cristo', referindo-se aos anos após o ano 1." },
        { id: "HIST-F09", p: "A influência africana na cultura brasileira é visível na:", o: [{t:"Culinária, Música e Religião",c:true}, {t:"Criação da Mochila",c:false}, {t:"Invenção da Escrita",c:false}, {t:"Urbanização Imediata",c:false}], pts: 2, exp: "Pratos (feijoada, acarajé), ritmos (samba, capoeira) e religiões (candomblé) são fortes matrizes africanas no Brasil." },
        { id: "HIST-F10", p: "A teoria do Heliocentrismo, defendida por Copérnico, afirmava que:", o: [{t:"O Sol girava em torno da Terra",c:false}, {t:"O Sol era o centro do sistema solar",c:true}, {t:"A Geração de itens",c:false}, {t:"A Mochila é finita",c:false}], pts: 2, exp: "Hélio significa Sol; logo, Heliocentrismo coloca o Sol (e não a Terra) no centro do nosso sistema." },
        { id: "HIST-F11", p: "Os reinos muçulmanos medievais avançaram muito no conhecimento de:", o: [{t:"Astronomia, Medicina e Matemática",c:true}, {t:"Geração de Mochilas",c:false}, {t:"Fim da Agricultura",c:false}, {t:"Conversão de Animais",c:false}], pts: 2, exp: "Os estudiosos islâmicos preservaram e expandiram o conhecimento científico clássico durante a Idade Média." },
        { id: "HIST-F12", p: "A principal característica do nomadismo Paleolítico era a dependência humana da:", o: [{t:"Caça, Pesca e Coleta",c:true}, {t:"Agricultura e Sedentarismo",c:false}, {t:"Geração de itens",c:false}, {t:"Mochila",c:false}], pts: 2, exp: "Como não plantavam nem criavam animais, dependiam do que a natureza oferecia diretamente." },
        { id: "HIST-F13", p: "Qual evento é considerado o marco inicial da Idade Moderna ocidental?", o: [{t:"Queda de Constantinopla (1453)",c:true}, {t:"Queda de Roma",c:false}, {t:"Invenção da Escrita",c:false}, {t:"Invenção da Mochila",c:false}], pts: 2, exp: "A tomada de Constantinopla pelos turcos otomanos em 1453 marca o fim da Idade Média." },
        { id: "HIST-F14", p: "A invenção da prensa por Gutenberg facilitou a disseminação de ideias, incluindo:", o: [{t:"A Geração de itens",c:false}, {t:"A Bíblia traduzida para línguas nacionais",c:true}, {t:"A Conversão",c:false}, {t:"O Fim da Agricultura",c:false}], pts: 2, exp: "A prensa permitiu imprimir Bíblias nas línguas do povo, impulsionando a Reforma Protestante." },
        { id: "HIST-F15", p: "A principal causa do nomadismo Paleolítico era a dependência humana da:", o: [{t:"Agricultura e Sedentarismo",c:false}, {t:"Geração de itens",c:false}, {t:"Mochila finita",c:false}, {t:"Caça, Pesca e Coleta",c:true}], pts: 2, exp: "A sobrevivência dependia estritamente da recolha de alimentos disponíveis na natureza." },
        { id: "HIST-F16", p: "Qual evento é considerado o marco do início da Pré-História?", o: [{t:"Invenção da Escrita",c:true}, {t:"Queda de Roma",c:false}, {t:"Invenção da Mochila",c:false}, {t:"Queda de Constantinopla",c:false}], pts: 2, exp: "A História (período documentado) inicia-se com a invenção da escrita pelos Sumérios." },
        { id: "HIST-F17", p: "O Engenho Colonial no Brasil baseava-se na monocultura de exportação, focado na:", o: [{t:"Conversão de animais",c:false}, {t:"Geração de itens",c:false}, {t:"Produção de Açúcar",c:true}, {t:"Urbanização Imediata",c:false}], pts: 2, exp: "A cana-de-açúcar foi a base da economia colonial brasileira durante os séculos XVI e XVII." },
        { id: "HIST-F18", p: "A Arte Rupestre é considerada como evidência de:", o: [{t:"Invenção da Escrita",c:false}, {t:"Fim da Agricultura",c:false}, {t:"Geração de Itens",c:false}, {t:"Rituais e Crenças",c:true}], pts: 2, exp: "As pinturas nas cavernas eram formas de expressão mágica, religiosa e de comunicação dos primeiros humanos." },

        // --- NÍVEL MÉDIO ---
        { id: "HIST-M01", p: "O Código de Hammurabi, na Mesopotamia Antiga, é um dos exemplos mais famosos de:", o: [{t:"Lei Escrita baseada no Retaliamento",c:true}, {t:"Livro Sagrado Egípcio",c:false}, {t:"Filosofia Grega",c:false}, {t:"Poema Romano",c:false}], pts: 3, exp: "Ficou conhecido pelo princípio do talião: 'Olho por olho, dente por dente'." },
        { id: "HIST-M02", p: "Em Roma Antiga, a República era governada por:", o: [{t:"Imperadores Divinos",c:false}, {t:"Faraós Estrangeiros",c:false}, {t:"Senadores e Magistrados",c:true}, {t:"Reis Monarcas Absolutos",c:false}], pts: 3, exp: "O Senado, composto principalmente por patrícios, era a principal instituição política." },
        { id: "HIST-M03", p: "Qual era a principal função do rio Nilo para a civilização do Egito Antigo?", o: [{t:"Um Deus Vivo",c:false}, {t:"Fornecimento de Água para Agricultura e Comércio",c:true}, {t:"Barreira contra Invasões",c:false}, {t:"Criação de Peixes Ornamentais",c:false}], pts: 3, exp: "As cheias regulares do Nilo fertilizavam as margens, permitindo a sobrevivência no meio do deserto." },
        { id: "HIST-M04", p: "O Reino do Mali, na África Ocidental, ficou famoso por Mansa Musa devido:", o: [{t:"À Conquista do Egito",c:false}, {t:"À Geração de Itens Mágicos",c:false}, {t:"Ao Vasto Comércio de Ouro e Peregrinação",c:true}, {t:"À Invenção da Escrita",c:false}], pts: 3, exp: "A sua peregrinação a Meca distribuiu tanto ouro que desvalorizou a moeda em várias regiões." },
        { id: "HIST-M05", p: "Os navios que transportavam escravizados africanos para as Américas eram chamados de:", o: [{t:"Caravelas",c:false}, {t:"Navios Negreiros / Tumbeiros",c:true}, {t:"Galés Acadêmicas",c:false}, {t:"Mochilas",c:false}], pts: 3, exp: "Chamados de tumbeiros (tumbas) pelas terríveis condições e alta taxa de mortalidade na travessia." },
        { id: "HIST-M06", p: "A principal característica da agricultura dos povos Tupi-Guarani no Brasil pré-colonial era o:", o: [{t:"Sedentarismo",c:false}, {t:"Irrigação de Longa Distância",c:false}, {t:"Mochila de Itens",c:false}, {t:"Cultivo em Roças (Semi-nomadismo)",c:true}], pts: 3, exp: "Usavam a técnica da coivara (queimada) e mudavam-se quando o solo perdia fertilidade." },
        { id: "HIST-M07", p: "O princípio político do Absolutismo, 'O Direito Divino dos Reis', justificava o:", o: [{t:"Poder Absoluto do Rei Como Vontade de Deus",c:true}, {t:"A Democracia Acadêmica",c:false}, {t:"A Criação de Mochilas",c:false}, {t:"A Geração de Itens",c:false}], pts: 3, exp: "Acreditava-se que o monarca era escolhido por Deus, logo, o seu poder era inquestionável." },
        { id: "HIST-M08", p: "Uma das principais conquistas da civilização Maia foi seu conhecimento em:", o: [{t:"Conversão",c:false}, {t:"Criação da Mochila",c:false}, {t:"Calendários e Matemática (Astronomia)",c:true}, {t:"Geração de Itens",c:false}], pts: 3, exp: "Os Maias criaram calendários precisos e o conceito do zero antes dos europeus." },
        { id: "HIST-M09", p: "Pedro Álvares Cabral chegou ao Brasil em 1500 com o objetivo de:", o: [{t:"Fim da Urbanização",c:false}, {t:"Tomar Posse da Terra no Caminho das Índias",c:true}, {t:"Criar a Mochila",c:false}, {t:"Conversão de Animais",c:false}], pts: 3, exp: "O principal destino da esquadra era a Índia (especiarias), mas passou pelo Brasil para oficializar a posse." },
        { id: "HIST-M10", p: "Qual o nome do sistema de escrita desenvolvido pelos Sumérios na Mesopotamia Antiga?", o: [{t:"Hieróglifos",c:false}, {t:"Escrita Cuneiforme",c:true}, {t:"Alfabeto Grego",c:false}, {t:"Escrita Acadêmica",c:false}], pts: 3, exp: "Era feita marcando tabuleiros de argila com uma haste em forma de cunha." },
        { id: "HIST-M11", p: "No Feudalismo europeu, a principal atividade econômica era a:", o: [{t:"Indústria",c:false}, {t:"Agricultura de Subsistência",c:true}, {t:"Mochila finita",c:false}, {t:"Comércio Imediato",c:false}], pts: 3, exp: "A terra era a maior riqueza e a produção focava apenas no sustento local do feudo." },
        { id: "HIST-M12", p: "O absolutismo político na monarquia francesa atingiu seu auge com a frase:", o: [{t:"A mochila é finita",c:false}, {t:"O Estado sou eu",c:true}, {t:"Conversão de itens",c:false}, {t:"Fim da Educação",c:false}], pts: 3, exp: "Frase atribuída a Luís XIV (o Rei Sol), simbolizando o controlo total do rei sobre a nação." },
        { id: "HIST-M13", p: "Nos Reinos Africanos medievais do Sahel, Mansa Musa ficou famoso por sua riqueza em:", o: [{t:"Especiarias",c:false}, {t:"Ouro, durante sua peregrinação",c:true}, {t:"Geração de Mochilas",c:false}, {t:"Fim da Agricultura",c:false}], pts: 3, exp: "O Império do Mali controlava importantes rotas comerciais de ouro e sal." },
        { id: "HIST-M14", p: "Qual evento da Idade Média marcou a reabertura das rotas comerciais entre Europa e Oriente?", o: [{t:"Queda de Roma",c:false}, {t:"Invenção da Mochila",c:false}, {t:"As Cruzadas",c:true}, {t:"Queda de Constantinopla",c:false}], pts: 3, exp: "As expedições militares cristãs ao Oriente Médio reataram o contato e o comércio pelo Mediterrâneo." },
        { id: "HIST-M15", p: "Qual foi o primeiro sistema implementado por Portugal para dividir e administrar o Brasil Colonial em 1534?", o: [{t:"Governos Gerais",c:false}, {t:"Mochilas",c:false}, {t:"Capitanias Hereditárias",c:true}, {t:"Vice-reinos",c:false}], pts: 3, exp: "O território foi dividido em grandes faixas de terra entregues a capitães-donatários privados." },
        { id: "HIST-M16", p: "O Feudalismo caracterizou-se pela descentralização do poder político, que ficou nas mãos dos:", o: [{t:"Mochilas",c:false}, {t:"Senhores Feudais (Nobres)",c:true}, {t:"Camponeses servos",c:false}, {t:"Urbanização imediata",c:false}], pts: 3, exp: "O rei tinha poder enfraquecido; quem governava e ditava as leis localmente era o Senhor Feudal." },
        { id: "HIST-M17", p: "A invenção da prensa por Gutenberg facilitou a rápida disseminação de ideias, incluindo:", o: [{t:"A Geração",c:false}, {t:"A Bíblia traduzida para línguas nacionais (Protestantismo)",c:true}, {t:"A Conversão",c:false}, {t:"O Fim da Agricultura",c:false}], pts: 3, exp: "Isso permitiu que a população interpretasse os textos religiosos sem depender unicamente da Igreja." },
        { id: "HIST-M18", p: "Qual era a principal atitude de Martinho Lutero nas suas Teses?", o: [{t:"Opor-se aos dogmas católicos",c:true}, {t:"Criar a mochila",c:false}, {t:"Converter animais",c:false}, {t:"Finalizar as cruzadas",c:false}], pts: 3, exp: "Ele discordava profundamente de várias regras e corrupções praticadas pelo alto clero." },

        // --- NÍVEL DIFÍCIL ---
        { id: "HIST-D01", p: "Na estrutura feudal, o contrato de lealdade entre um suserano e um vassalo chamava-se:", o: [{t:"Pacto da Mochila",c:false}, {t:"Tratado de Verdum",c:false}, {t:"Concordata Acadêmica",c:false}, {t:"Vassalagem / Homenagem",c:true}], pts: 4, exp: "Era uma cerimónia onde um nobre (vassalo) jurava apoio militar em troca de terras do suserano." },
        { id: "HIST-D02", p: "O Renascimento introduziu o conceito de Humanismo. Qual o foco dessa corrente?", o: [{t:"O Divino e o Teocentrismo",c:false}, {t:"O Estudo dos Animais",c:false}, {t:"O Valor Humano e o Antropocentrismo",c:true}, {t:"A Geração de Itens",c:false}], pts: 4, exp: "O antropocentrismo valorizava a razão e a capacidade humana, em oposição ao foco exclusivo em Deus." },
        { id: "HIST-D03", p: "Qual era o papel do Faraó na sociedade egípcia, além de ser o chefe do governo?", o: [{t:"Um Deus Vivo",c:true}, {t:"Um Arquiteto Chefe",c:false}, {t:"Um Filósofo Eleito",c:false}, {t:"Um Sacerdote da Mochila",c:false}], pts: 4, exp: "O Egito era uma teocracia, e o Faraó era adorado como encarnação de deuses como Hórus." },
        { id: "HIST-D04", p: "O Mercantilismo, sistema adotado pelas monarquias absolutistas, visava:", o: [{t:"Livre Mercado",c:false}, {t:"Uma Balança Comercial Favorável e Acúmulo de Metais",c:true}, {t:"Urbanização Imediata",c:false}, {t:"Criação de Mochilas",c:false}], pts: 4, exp: "Acreditava-se que a riqueza de uma nação era medida pela quantidade de ouro e prata nos seus cofres." },
        { id: "HIST-D05", p: "O impacto das Cruzadas nas rotas comerciais europeias foi a:", o: [{t:"Fim da Agricultura",c:false}, {t:"Criação de Mochilas",c:false}, {t:"Reabertura das Rotas para o Oriente (Seda e Especiarias)",c:true}, {t:"Urbanização Imediata",c:false}], pts: 4, exp: "Os europeus redescobriram produtos orientais, o que impulsionou o renascimento comercial." },
        { id: "HIST-D06", p: "Uma das bases do Islã são os 'Cinco Pilares'. O que eles representam?", o: [{t:"Mandamentos de Fé, Oração, Jejum, Caridade e Peregrinação",c:true}, {t:"Estratégia de Combate",c:false}, {t:"Geração de Mochilas",c:false}, {t:"Urbanização Imediata",c:false}], pts: 4, exp: "São as cinco obrigações fundamentais de todo o muçulmano praticante." },
        { id: "HIST-D07", p: "O impacto da Pax Romana, estabelecida por Augusto, foi um período de:", o: [{t:"Fim da Urbanização",c:false}, {t:"Conversão de Animais",c:false}, {t:"Criação de Mochilas",c:false}, {t:"Estabilidade, Paz e Desenvolvimento",c:true}], pts: 4, exp: "Foi um longo período de relativa paz e segurança dentro das fronteiras do Império Romano." },
        { id: "HIST-D08", p: "No Engenho Colonial, as habitações dos Senhores e dos Escravizados eram a:", o: [{t:"Casa Grande e Senzala",c:true}, {t:"Criação da Mochila",c:false}, {t:"Urbanização Imediata",c:false}, {t:"Geração de Itens",c:false}], pts: 4, exp: "O senhor de engenho vivia na Casa Grande, enquanto os escravizados eram aglomerados nas senzalas." },
        { id: "HIST-D09", p: "O que eram os 'Griots' nos Reinos Africanos?", o: [{t:"Reis Monarcas Absolutos",c:false}, {t:"Faraós da Mochila",c:false}, {t:"Poetas, cantores e guardiões da história",c:true}, {t:"Senadores Acadêmicos",c:false}], pts: 4, exp: "Numa sociedade de tradição oral, os griots eram fundamentais para passar a cultura às novas gerações." },
        { id: "HIST-D10", p: "A Queda do Império Asteca ocorreu devido à aliança espanhola com:", o: [{t:"Incas",c:false}, {t:"Tupi-Guarani",c:false}, {t:"Povos inimigos dos Astecas",c:true}, {t:"Mochila",c:false}], pts: 4, exp: "Cortés utilizou povos locais que eram oprimidos pelos Astecas para conseguir dominar a capital Tenochtitlán." },
        { id: "HIST-D11", p: "No Al-Andalus, a convivência entre muçulmanos, cristãos e judeus fomentou um grande período de:", o: [{t:"Geração de itens",c:false}, {t:"Conversão de animais",c:false}, {t:"Fim da Urbanização",c:false}, {t:"Florescimento Intelectual e Científico",c:true}], pts: 4, exp: "A Península Ibérica sob domínio islâmico tornou-se um grande centro de traduções e estudos." },
        { id: "HIST-D12", p: "O impacto demográfico indígena mais devastador após a colonização foi causado por:", o: [{t:"Doenças (varíola, gripe) e Escravidão",c:true}, {t:"Fome e Seca Colonial",c:false}, {t:"Geração de itens",c:false}, {t:"Falta de Mochila",c:false}], pts: 4, exp: "Os nativos não possuíam imunidade contra as doenças trazidas pelos europeus." },
        { id: "HIST-D13", p: "A Contra-Reforma da Igreja Católica (Concílio de Trento) reafirmou dogmas e criou a:", o: [{t:"Ordem dos Jesuítas (Companhia de Jesus)",c:true}, {t:"Invenção da mochila finita",c:false}, {t:"Fim da Educação",c:false}, {t:"Conversão de animais",c:false}], pts: 4, exp: "Os Jesuítas foram a 'tropa de choque' encarregada de expandir a fé católica, especialmente no Novo Mundo." },
        { id: "HIST-D14", p: "A burguesia europeia financiou as Grandes Navegações visando lucro através do comércio direto de:", o: [{t:"Especiarias do Oriente e Metais Preciosos",c:true}, {t:"Mochilas de itens",c:false}, {t:"Fim da Urbanização",c:false}, {t:"Conversão de animais",c:false}], pts: 4, exp: "Eles queriam quebrar o monopólio das cidades italianas no comércio de produtos de luxo do Oriente." },
        { id: "HIST-D15", p: "O que eram os 'Griots' nos Reinos Africanos?", o: [{t:"Mochilas finitas de itens",c:false}, {t:"Poetas e cantores, guardiões da tradição oral e história",c:true}, {t:"Geração de itens",c:false}, {t:"Conversão de animais",c:false}], pts: 4, exp: "A memória coletiva africana era transmitida de forma oral pelos mestres griots." },
        { id: "HIST-D16", p: "Quais civilizações pré-colombianas foram conquistadas pelos espanhóis no início da colonização?", o: [{t:"Incas e Tupis",c:false}, {t:"Astecas e Incas",c:true}, {t:"Maias e Romanos",c:false}, {t:"Egípcios e Vikings",c:false}], pts: 4, exp: "Os Astecas (por Hernán Cortés) e os Incas (por Francisco Pizarro) foram os grandes impérios derrubados pelos espanhóis." },
        { id: "HIST-D17", p: "O impacto da Pax Romana no desenvolvimento do Império Romano foi de:", o: [{t:"Paz, Estabilidade e Desenvolvimento",c:true}, {t:"Fim da Urbanização",c:false}, {t:"Geração de Itens",c:false}, {t:"Conversão de Animais",c:false}], pts: 4, exp: "Essa estabilidade permitiu a expansão de estradas, comércio e monumentos públicos." },
        { id: "HIST-D18", p: "O que eram os 'Griots' nos Reinos Africanos?", o: [{t:"Reis Monarcas Absolutos",c:false}, {t:"Faraós da Mochila",c:false}, {t:"Poetas, cantores e guardiões da história",c:true}, {t:"Senadores Acadêmicos",c:false}], pts: 4, exp: "Os griots eram essenciais em sociedades africanas que não utilizavam a escrita para registar os factos." }
    ],




    "Ciências": [
        // --- NÍVEL FÁCIL ---
        { id: "CIEN-F01", p: "O que é a célula na biologia?", o: [{t:"O centro líquido da Terra",c:false}, {t:"A camada de ar do planeta",c:false}, {t:"A unidade básica da vida",c:true}, {t:"Um mineral das rochas",c:false}], pts: 2, exp: "A célula é considerada a unidade básica da vida." },
        { id: "CIEN-F02", p: "O que define um ecossistema?", o: [{t:"Apenas os animais de um lugar",c:false}, {t:"Relação entre seres vivos e ambiente",c:true}, {t:"Um tipo de planta da Amazônia",c:false}, {t:"O estudo dos astros no céu",c:false}], pts: 2, exp: "Um ecossistema define-se pela relação entre os seres vivos e o ambiente." },
        { id: "CIEN-F03", p: "O que é a crosta terrestre?", o: [{t:"A camada sólida externa da Terra",c:true}, {t:"Um tipo de osso do corpo",c:false}, {t:"Uma camada da atmosfera",c:false}, {t:"O fundo dos oceanos profundos",c:false}], pts: 2, exp: "A crosta terrestre é a camada sólida externa da Terra." },
        { id: "CIEN-F04", p: "Qual é a definição de uma estrela?", o: [{t:"Um planeta que não tem vida",c:false}, {t:"Uma rocha que orbita o Sol",c:false}, {t:"Um satélite natural da Terra",c:false}, {t:"Um astro que emite luz própria",c:true}], pts: 2, exp: "Uma estrela é um astro que emite luz própria." },
        { id: "CIEN-F05", p: "O que é a fotossíntese?", o: [{t:"Processo da planta para obter energia",c:true}, {t:"A queda das folhas no outono",c:false}, {t:"A respiração dos animais à noite",c:false}, {t:"O movimento das águas do mar",c:false}], pts: 2, exp: "A fotossíntese é o processo da planta para obter energia." },
        { id: "CIEN-F06", p: "O que define um animal vertebrado?", o: [{t:"Animal que vive apenas na água",c:false}, {t:"Animal que possui coluna vertebral",c:true}, {t:"Animal que produz mel",c:false}, {t:"Animal que não possui ossos",c:false}], pts: 2, exp: "Um animal vertebrado é aquele que possui coluna vertebral." },
        { id: "CIEN-F07", p: "Qual é a função do sistema respiratório?", o: [{t:"Levar sangue para as pernas",c:false}, {t:"Quebrar os alimentos em partes",c:false}, {t:"Realizar as trocas gasosas",c:true}, {t:"Defender o corpo de bactérias",c:false}], pts: 2, exp: "A função do sistema respiratório é realizar as trocas gasosas." },
        { id: "CIEN-F08", p: "O que é a massa de um objeto?", o: [{t:"O espaço que ele ocupa",c:false}, {t:"O brilho que ele emite",c:false}, {t:"A cor que ele apresenta",c:false}, {t:"A quantidade de matéria que possui",c:true}], pts: 2, exp: "A massa é a quantidade de matéria que o objeto possui." },
        { id: "CIEN-F09", p: "O que é a atmosfera terrestre?", o: [{t:"A camada de gases que envolve a Terra",c:true}, {t:"A água salgada dos oceanos",c:false}, {t:"A floresta que produz oxigênio",c:false}, {t:"O solo onde plantamos alimentos",c:false}], pts: 2, exp: "A atmosfera terrestre é a camada de gases que envolve a Terra." },
        { id: "CIEN-F10", p: "O que é a água potável?", o: [{t:"Água com muito sal",c:false}, {t:"Água própria para o consumo humano",c:true}, {t:"Água fervente dos vulcões",c:false}, {t:"Água congelada nos polos",c:false}], pts: 2, exp: "A água potável é aquela própria para o consumo humano." },
        { id: "CIEN-F11", p: "O que são microrganismos?", o: [{t:"Animais grandes da selva",c:false}, {t:"Plantas que vivem no deserto",c:false}, {t:"Seres vivos visíveis apenas ao microscópio",c:true}, {t:"Pedras pequenas encontradas no rio",c:false}], pts: 2, exp: "Microrganismos são seres vivos visíveis apenas ao microscópio." },
        { id: "CIEN-F12", p: "O que é um animal carnívoro?", o: [{t:"Come apenas frutas",c:false}, {t:"Come apenas sementes",c:false}, {t:"Come apenas plantas",c:false}, {t:"Alimenta-se de outros animais",c:true}], pts: 2, exp: "Um animal carnívoro alimenta-se de outros animais." },
        { id: "CIEN-F13", p: "O que define o movimento de rotação da Terra?", o: [{t:"Giro da Terra em torno de si mesma",c:true}, {t:"Giro da Terra em torno do Sol",c:false}, {t:"Giro da Lua em torno da Terra",c:false}, {t:"O afastamento da Terra e de Marte",c:false}], pts: 2, exp: "O movimento de rotação é o giro da Terra em torno de si mesma." },
        { id: "CIEN-F14", p: "Qual a função da raiz na maioria das plantas?", o: [{t:"Realizar a polinização",c:false}, {t:"Absorver água e nutrientes do solo",c:true}, {t:"Produzir sementes e frutos",c:false}, {t:"Captar a luz do Sol nas folhas",c:false}], pts: 2, exp: "A raiz tem a função de absorver água e nutrientes do solo." },
        { id: "CIEN-F15", p: "O que são recursos renováveis?", o: [{t:"Aqueles que poluem o mar",c:false}, {t:"Aqueles que acabam rápido",c:false}, {t:"Aqueles que se recuperam na natureza",c:true}, {t:"Aqueles que não servem para energia",c:false}], pts: 2, exp: "Recursos renováveis são aqueles que se recuperam na natureza." },
        { id: "CIEN-F16", p: "Onde ocorre a digestão dos alimentos no corpo?", o: [{t:"No pulmão",c:false}, {t:"No coração",c:false}, {t:"No sistema digestório",c:true}, {t:"No sistema nervoso",c:false}], pts: 2, exp: "A digestão dos alimentos ocorre no sistema digestório." },
        { id: "CIEN-F17", p: "Quais são os três estados físicos da matéria?", o: [{t:"Sólido, líquido e gasoso",c:true}, {t:"Frio, quente e morno",c:false}, {t:"Duro, mole e flexível",c:false}, {t:"Transparente, opaco e fosco",c:false}], pts: 2, exp: "Os três estados físicos da matéria são: sólido, líquido e gasoso." },
        { id: "CIEN-F18", p: "O que é um animal herbívoro?", o: [{t:"Alimenta-se de carne e ossos",c:false}, {t:"Alimenta-se apenas de plantas",c:true}, {t:"Alimenta-se de restos de lixo",c:false}, {t:"Alimenta-se de luz solar",c:false}], pts: 2, exp: "Um animal herbívoro alimenta-se apenas de plantas." },

        // --- NÍVEL MÉDIO ---
        { id: "CIEN-M01", p: "O que define um organismo autótrofo?", o: [{t:"Precisa caçar para comer",c:false}, {t:"Vive apenas como parasita",c:false}, {t:"Produz o próprio alimento",c:true}, {t:"Decompõe matéria orgânica",c:false}], pts: 3, exp: "Um organismo autótrofo produz o próprio alimento." },
        { id: "CIEN-M02", p: "Qual é a função dos decompositores na natureza?", o: [{t:"Produzir oxigênio puro",c:false}, {t:"Caçar animais doentes",c:false}, {t:"Proteger as nascentes",c:false}, {t:"Reciclar a matéria orgânica",c:true}], pts: 3, exp: "Os decompositores têm a função de reciclar a matéria orgânica na natureza." },
        { id: "CIEN-M03", p: "O que é a energia térmica?", o: [{t:"Energia associada ao calor",c:true}, {t:"Energia produzida pelo som",c:false}, {t:"Energia gerada pelo vento",c:false}, {t:"Energia contida nos ímãs",c:false}], pts: 3, exp: "A energia térmica é a energia associada ao calor." },
        { id: "CIEN-M04", p: "O que são rochas sedimentares?", o: [{t:"Rochas que vem do magma",c:false}, {t:"Rochas formadas por restos de outras",c:true}, {t:"Rochas que não quebram nunca",c:false}, {t:"Rochas encontradas no núcleo",c:false}], pts: 3, exp: "Rochas sedimentares são formadas por restos de outras rochas." },
        { id: "CIEN-M05", p: "Qual a principal diferença entre planeta e satélite natural?", o: [{t:"O tamanho do astro",c:false}, {t:"A cor refletida no céu",c:false}, {t:"O astro que eles orbitam",c:true}, {t:"A presença de oxigênio",c:false}], pts: 3, exp: "A principal diferença é o astro que eles orbitam." },
        { id: "CIEN-M06", p: "O que caracteriza os seres pluricelulares?", o: [{t:"Possuem apenas uma célula",c:false}, {t:"Não possuem células vivas",c:false}, {t:"Vivem apenas em laboratórios",c:false}, {t:"São formados por várias células",c:true}], pts: 3, exp: "Seres pluricelulares são formados por várias células." },
        { id: "CIEN-M07", p: "Qual a função das plaquetas no sangue?", o: [{t:"Realizar a coagulação sanguínea",c:true}, {t:"Transportar o gás oxigênio",c:false}, {t:"Combater os vírus invasores",c:false}, {t:"Produzir a cor vermelha",c:false}], pts: 3, exp: "A função das plaquetas é realizar a coagulação sanguínea." },
        { id: "CIEN-M08", p: "O que é uma mistura homogênea?", o: [{t:"Mistura com cores diferentes",c:false}, {t:"Mistura que apresenta uma só fase",c:true}, {t:"Mistura de óleo e água pura",c:false}, {t:"Mistura que explode no calor",c:false}], pts: 3, exp: "Uma mistura homogênea é aquela que apresenta uma só fase." },
        { id: "CIEN-M09", p: "Como agem as vacinas no corpo humano?", o: [{t:"Curam doenças instantaneamente",c:false}, {t:"Matam as bactérias do estômago",c:false}, {t:"Estimulam a produção de anticorpos",c:true}, {t:"Substituem o sistema nervoso",c:false}], pts: 3, exp: "As vacinas agem estimulando a produção de anticorpos no corpo." },
        { id: "CIEN-M10", p: "O que define os animais invertebrados?", o: [{t:"Animais que voam alto",c:false}, {t:"Animais que vivem na terra",c:false}, {t:"Animais que possuem pelos",c:false}, {t:"Animais que não têm coluna",c:true}], pts: 3, exp: "Os animais invertebrados são aqueles que não têm coluna vertebral." },
        { id: "CIEN-M11", p: "Qual a função dos estômatos nas folhas?", o: [{t:"Realizar trocas gasosas",c:true}, {t:"Proteção contra insetos",c:false}, {t:"Absorver água da chuva",c:false}, {t:"Dar a cor verde à planta",c:false}], pts: 3, exp: "Os estômatos têm a função de realizar trocas gasosas." },
        { id: "CIEN-M12", p: "O que é o efeito estufa natural?", o: [{t:"Um buraco na camada de ozônio",c:false}, {t:"Processo que mantém a Terra aquecida",c:true}, {t:"A poluição causada pelas fábricas",c:false}, {t:"O derretimento total das geleiras",c:false}], pts: 3, exp: "O efeito estufa natural é o processo que mantém a Terra aquecida." },
        { id: "CIEN-M13", p: "O que é a pressão atmosférica?", o: [{t:"O calor que o Sol emite",c:false}, {t:"A força do vento nos mares",c:false}, {t:"O peso do ar sobre a superfície",c:true}, {t:"A falta de ar nas montanhas",c:false}], pts: 3, exp: "A pressão atmosférica é o peso do ar sobre a superfície." },
        { id: "CIEN-M14", p: "O que são seres procariontes?", o: [{t:"Células com núcleo definido",c:false}, {t:"Seres que não têm células",c:false}, {t:"Seres que vivem no vácuo",c:false}, {t:"Células sem núcleo definido",c:true}], pts: 3, exp: "Os seres procariontes são formados por células sem núcleo definido." },
        { id: "CIEN-M15", p: "Qual a função dos rins no corpo?", o: [{t:"Filtrar o sangue e produzir urina",c:true}, {t:"Bombear o sangue para o cérebro",c:false}, {t:"Digerir as gorduras pesadas",c:false}, {t:"Controlar os batimentos cardíacos",c:false}], pts: 3, exp: "A função dos rins é filtrar o sangue e produzir urina." },
        { id: "CIEN-M16", p: "O que é a densidade de um corpo?", o: [{t:"A temperatura interna dele",c:false}, {t:"Relação entre massa e volume",c:true}, {t:"A força que ele faz no chão",c:false}, {t:"O tempo que ele leva para sumir",c:false}], pts: 3, exp: "A densidade é a relação entre a massa e o volume de um corpo." },
        { id: "CIEN-M17", p: "O que é uma cadeia alimentar?", o: [{t:"Uma plantação de sementes",c:false}, {t:"Um conjunto de seres extintos",c:false}, {t:"Sequência de transferência de energia",c:true}, {t:"A proteção dos animais da caça",c:false}], pts: 3, exp: "Uma cadeia alimentar é uma sequência de transferência de energia ecológica." },
        { id: "CIEN-M18", p: "O que são rochas metamórficas?", o: [{t:"Rochas que vem do espaço",c:false}, {t:"Rochas feitas de areia fina",c:false}, {t:"Rochas líquidas dos vulcões",c:false}, {t:"Rochas que sofreram pressão e calor",c:true}], pts: 3, exp: "Rochas metamórficas são aquelas que sofreram alterações por pressão e calor." },

        // --- NÍVEL DIFÍCIL ---
        { id: "CIEN-D01", p: "O que é a organela Mitocôndria?", o: [{t:"Responsável pela respiração celular",c:true}, {t:"Responsável por guardar água",c:false}, {t:"Responsável pela cor da pele",c:false}, {t:"Responsável por criar os ossos",c:false}], pts: 4, exp: "A mitocôndria é a organela responsável pela respiração celular." },
        { id: "CIEN-D02", p: "O que é o DNA para um ser vivo?", o: [{t:"Um tipo de açúcar do sangue",c:false}, {t:"Molécula com informação genética",c:true}, {t:"Uma camada protetora da pele",c:false}, {t:"O gás que respiramos no ar",c:false}], pts: 4, exp: "O DNA é a molécula que contém a informação genética." },
        { id: "CIEN-D03", p: "O que define o nicho ecológico?", o: [{t:"O lugar físico onde o animal mora",c:false}, {t:"A temperatura máxima do bioma",c:false}, {t:"O papel e as atividades de uma espécie",c:true}, {t:"A quantidade de filhotes gerados",c:false}], pts: 4, exp: "O nicho ecológico define o papel e as atividades de uma espécie no ambiente." },
        { id: "CIEN-D04", p: "O que é o intemperismo?", o: [{t:"O calor excessivo do deserto",c:false}, {t:"O brilho intenso das pedras",c:false}, {t:"A formação de novas estrelas",c:false}, {t:"Decomposição de rochas por agentes",c:true}], pts: 4, exp: "O intemperismo é o processo de decomposição de rochas por ação de agentes naturais." },
        { id: "CIEN-D05", p: "O que caracteriza as Gimnospermas?", o: [{t:"Plantas com sementes nuas, sem fruto",c:true}, {t:"Plantas que não possuem raízes",c:false}, {t:"Plantas que vivem só no mar",c:false}, {t:"Plantas que produzem frutos doces",c:false}], pts: 4, exp: "As gimnospermas são plantas que possuem sementes nuas, sem o desenvolvimento de fruto." },
        { id: "CIEN-D06", p: "O que é o calor específico?", o: [{t:"A temperatura média do corpo",c:false}, {t:"Calor necessário para mudar a temperatura",c:true}, {t:"O calor que vem do centro da Terra",c:false}, {t:"O ponto onde a água vira gelo",c:false}], pts: 4, exp: "O calor específico é a quantidade de calor necessário para mudar a temperatura de um material." },
        { id: "CIEN-D07", p: "O que caracteriza os animais equinodermos?", o: [{t:"Possuem asas e bicos curtos",c:false}, {t:"Possuem pelos e amamentam",c:false}, {t:"Possuem esqueleto interno e espinhos",c:true}, {t:"Possuem corpo mole e concha",c:false}], pts: 4, exp: "Os equinodermos possuem esqueleto interno e espinhos." },
        { id: "CIEN-D08", p: "O que é uma Unidade Astronômica (UA)?", o: [{t:"O tamanho médio de uma estrela",c:false}, {t:"O tempo de vida de um planeta",c:false}, {t:"A velocidade da luz no vácuo",c:false}, {t:"Distância média entre a Terra e o Sol",c:true}], pts: 4, exp: "A Unidade Astronômica (UA) corresponde à distância média entre a Terra e o Sol." },
        { id: "CIEN-D09", p: "Qual a função dos alvéolos pulmonares?", o: [{t:"Onde ocorre a hematose (troca gasosa)",c:true}, {t:"Produzir o muco que limpa o nariz",c:false}, {t:"Proteger os pulmões contra batidas",c:false}, {t:"Bombear o ar para fora do corpo",c:false}], pts: 4, exp: "É nos alvéolos pulmonares que ocorre a hematose (troca gasosa)." },
        { id: "CIEN-D10", p: "O que define uma pandemia?", o: [{t:"Doença que atinge poucas pessoas",c:false}, {t:"Doença espalhada por vários continentes",c:true}, {t:"Doença que só afeta animais",c:false}, {t:"Doença que tem cura rápida",c:false}], pts: 4, exp: "Uma pandemia é uma doença espalhada por vários continentes." },
        { id: "CIEN-D11", p: "Qual o reino dos fungos?", o: [{t:"Reino Animalia",c:false}, {t:"Reino Plantae",c:false}, {t:"Reino Fungi",c:true}, {t:"Reino Monera",c:false}], pts: 4, exp: "Os fungos pertencem ao Reino Fungi." },
        { id: "CIEN-D12", p: "O que é um fenômeno químico?", o: [{t:"Muda apenas a forma do objeto",c:false}, {t:"Muda a cor temporariamente",c:false}, {t:"O objeto quebra em partes",c:false}, {t:"Altera a composição da matéria",c:true}], pts: 4, exp: "Um fenômeno químico altera de facto a composição íntima da matéria." },
        { id: "CIEN-D13", p: "O que caracteriza as Angiospermas?", o: [{t:"Possuem flores e frutos",c:true}, {t:"Não possuem vasos condutores",c:false}, {t:"São as menores plantas da Terra",c:false}, {t:"Vivem apenas em lugares secos",c:false}], pts: 4, exp: "As angiospermas caracterizam-se por possuírem flores e frutos na sua estrutura." },
        { id: "CIEN-D14", p: "O que são animais hermafroditas?", o: [{t:"Não possuem sexo definido",c:false}, {t:"Possuem os dois órgãos sexuais",c:true}, {t:"Não conseguem ter filhotes",c:false}, {t:"Mudam de cor conforme o clima",c:false}], pts: 4, exp: "Animais hermafroditas são aqueles que possuem os dois órgãos sexuais em simultâneo." },
        { id: "CIEN-D15", p: "O que é a camada de ozônio?", o: [{t:"Camada que produz as chuvas",c:false}, {t:"Camada que protege dos raios UV",c:true}, {t:"Camada de poluição das cidades",c:false}, {t:"Camada onde os aviões voam",c:false}], pts: 4, exp: "A camada de ozônio (ozono) atua como uma barreira que protege dos raios ultravioleta (UV)." },
        { id: "CIEN-D16", p: "Qual a função do Ribossomo?", o: [{t:"Produzir açúcar para a célula",c:false}, {t:"Destruir as células mortas",c:false}, {t:"Proteger a célula contra o frio",c:false}, {t:"Realizar a síntese de proteínas",c:true}], pts: 4, exp: "A função fundamental do ribossomo na célula é realizar a síntese de proteínas." },
        { id: "CIEN-D17", p: "O que é o vácuo?", o: [{t:"Espaço totalmente vazio de matéria",c:true}, {t:"Um tipo de gás muito pesado",c:false}, {t:"O fundo de uma caverna escura",c:false}, {t:"O ar que respiramos no topo do monte",c:false}], pts: 4, exp: "O vácuo é definido como um espaço que se encontra totalmente vazio de matéria." },
        { id: "CIEN-D18", p: "O que são fatores abióticos?", o: [{t:"Os animais de um lugar",c:false}, {t:"Partes sem vida do ambiente (luz, água)",c:true}, {t:"As bactérias que causam doenças",c:false}, {t:"As plantas que fazem sombra",c:false}], pts: 4, exp: "Fatores abióticos são as partes e elementos sem vida do ambiente, como a luz ou a água." }
    ]
};

// ==========================================
// LÓGICA DO APLICATIVO E VARIÁVEIS GLOBAIS
// ==========================================
let perguntaAtual = null;
let timerInterval; 
let tempoRestante; 

// Variáveis do Modo Desafio
let modoAtual = 'normal'; // Pode ser 'normal' ou 'desafio'
let timerDesafio;
let tempoJ1 = 40;
let tempoJ2 = 40;
let turnoAtual = 0; // 0 = Preparo, 1 = J1 ativo, 2 = J2 ativo
let materiaDesafio = "";

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
// MENU PRINCIPAL (TRANSIÇÃO DE MODOS)
// ==========================================
function abrirMenuDesafio() {
    const btn = document.querySelector('#tela-menu .btn-acao');
    
    // Transforma o botão num "Liga/Desliga" para o Modo Desafio
    if (modoAtual === 'normal') {
        modoAtual = 'desafio';
        document.querySelector('#tela-menu h1').innerText = "ESCOLHA A MATÉRIA";
        document.querySelector('#tela-menu .subtitulo').innerText = "Modo Desafio (2 Jogadores)";
        btn.innerText = "❌ CANCELAR DESAFIO";
        btn.style.backgroundColor = "#607D8B";
    } else {
        modoAtual = 'normal';
        document.querySelector('#tela-menu h1').innerText = "THE GRADE ESCAPE";
        document.querySelector('#tela-menu .subtitulo').innerText = "Banco Oficial de Questões";
        btn.innerText = "⚔️ MODO DESAFIO (2 JOGADORES)";
        btn.style.backgroundColor = "#D32F2F";
    }
}

function voltarMenu() {
    clearInterval(timerInterval); 
    clearInterval(timerDesafio); 
    
    // Se voltar, garante que o menu volta ao estado Normal
    modoAtual = 'normal';
    document.querySelector('#tela-menu h1').innerText = "THE GRADE ESCAPE";
    document.querySelector('#tela-menu .subtitulo').innerText = "Banco Oficial de Questões";
    const btnDesafio = document.querySelector('#tela-menu .btn-acao');
    if(btnDesafio) {
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

    // INTERCEPTADOR: Se o modo for desafio, desvia para a nova Arena!
    if (modoAtual === 'desafio') {
        prepararArenaDesafio(materia);
        return;
    }

    const questoesMateria = banco[materia];
    const randomIndex = Math.floor(Math.random() * questoesMateria.length);
    perguntaAtual = JSON.parse(JSON.stringify(questoesMateria[randomIndex]));
    
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
// MODO DESAFIO (LÓGICA E RELÓGIOS DE XADREZ)
// ==========================================

function prepararArenaDesafio(materia) {
    materiaDesafio = materia;
    tempoJ1 = 40;
    tempoJ2 = 40;
    turnoAtual = 0; // Fase de preparo (50/50)

    document.getElementById('relogio-j1').innerText = tempoJ1;
    document.getElementById('relogio-j2').innerText = tempoJ2;
    
    // Reseta as metades para 50%
    document.getElementById('area-j1').className = 'metade-desafio neutra';
    document.getElementById('area-j2').className = 'metade-desafio neutra';
    
    mudarTela('tela-desafio');
}

// Disparado ao tocar num dos blocos de "Aguarde" (Overlays)
function iniciarDesafio(jogadorAlvo) {
    // Trava de segurança: só funciona no primeiro clique da partida
    if (turnoAtual !== 0) return; 
    
    turnoAtual = jogadorAlvo;
    
    clearInterval(timerDesafio);
    timerDesafio = setInterval(atualizarRelogiosDesafio, 1000);
    
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
        if (tempoJ1 <= 0) finalizarDesafio(2); // Tempo do J1 acabou, J2 vence
    } else if (turnoAtual === 2) {
        tempoJ2--;
        document.getElementById('relogio-j2').innerText = tempoJ2;
        if (tempoJ2 <= 10 && tempoJ2 > 0) tocarBipe();
        if (tempoJ2 <= 0) finalizarDesafio(1); // Tempo do J2 acabou, J1 vence
    }
}

function carregarNovaPerguntaDesafio(jogador) {
    const questoesMateria = banco[materiaDesafio];
    const randomIndex = Math.floor(Math.random() * questoesMateria.length);
    const p = JSON.parse(JSON.stringify(questoesMateria[randomIndex]));
    
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
            e.stopPropagation(); // Evita que o clique atravesse o botão e ative o fundo
            if (turnoAtual === jogador) {
                responderDesafio(jogador, opcao.c);
            }
        };
        container.appendChild(btn);
    });
}

function responderDesafio(jogador, isCorreta) {
    if (isCorreta) {
        // Acertou! Passa o turno para o adversário
        turnoAtual = jogador === 1 ? 2 : 1;
        carregarNovaPerguntaDesafio(turnoAtual);
        atualizarVisualDesafio();
    } else {
        // Errou! Aplica a penalidade e troca a pergunta do próprio jogador
        aplicarPenalidade(jogador);
    }
}

function aplicarPenalidade(jogador) {
    tocarBipe(); // Bipe rápido de erro
    
    if (jogador === 1) {
        tempoJ1 -= 5;
        if (tempoJ1 < 0) tempoJ1 = 0;
        document.getElementById('relogio-j1').innerText = tempoJ1;
    } else {
        tempoJ2 -= 5;
        if (tempoJ2 < 0) tempoJ2 = 0;
        document.getElementById('relogio-j2').innerText = tempoJ2;
    }
    
    // Captura os elementos para a animação
    const relogio = document.getElementById(`relogio-j${jogador}`);
    const alerta = document.getElementById(`alerta-j${jogador}`);
    
    // Reseta as animações para permitir que ocorram várias vezes seguidas
    relogio.classList.remove('shake');
    alerta.classList.remove('animar-penalidade');
    
    // Reflow: truque mágico do JavaScript para forçar o navegador a reiniciar a animação
    void relogio.offsetWidth;
    void alerta.offsetWidth;
    
    // Dispara a animação
    relogio.classList.add('shake');
    alerta.classList.add('animar-penalidade');
    
    // Verifica morte súbita por penalidade
    if (jogador === 1 && tempoJ1 <= 0) finalizarDesafio(2);
    else if (jogador === 2 && tempoJ2 <= 0) finalizarDesafio(1);
    else {
        // Se ainda tiver tempo, recebe logo outra pergunta para continuar a tentar
        carregarNovaPerguntaDesafio(jogador);
    }
}

function finalizarDesafio(vencedor) {
    clearInterval(timerDesafio);
    turnoAtual = 0;
    
    // Aproveitamos a Tela de Feedback Normal para exibir o Campeão
    const titulo = document.getElementById('titulo-feedback');
    const pontos = document.getElementById('pontos-feedback');
    const icone = document.getElementById('icone-feedback');
    const ref = document.getElementById('referencia-pergunta');
    
    icone.innerText = "🏆";
    titulo.innerText = `JOGADOR ${vencedor} VENCEU!`;
    titulo.style.color = "#FFD700";
    pontos.innerText = "O tempo do adversário esgotou!";
    document.getElementById('explicacao-feedback').innerText = "Que duelo! Para uma revanche, basta escolher a matéria novamente no menu principal.";
    ref.innerText = "";
    
    mudarTela('tela-feedback');
}
