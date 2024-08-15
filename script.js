const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal fonte de energia renovável?",
        alternativas: [
            {
                texto: "correto",
                afirmacao: "energia solar. "
            },
            {
                texto: "incorreto",
                afirmacao: "energia de carvão."
            }
        ]
    },
    {
        enunciado: "Qual é o impacto do desmatamento na biodiversidade?",
        alternativas: [
            {
                texto: "correto",
                afirmacao: "Redução da biodiversidade"
            },
            {
                texto: "incorreto",
                afirmacao: "aumento da biodiversidade"
            }
        ]
    },
    {
        enunciado: "O que é reciclagem?",
        alternativas: [
            {
                texto: "correto",
                afirmacao: "Processo de transformar resíduos em novos materiais."
            },
            {
                texto: "incorreto",
                afirmacao: "Processo de queimar resíduos para gerar energia"
            }
        ]
    },
    {
        enunciado: "Qual é a principal causa das mudanças climáticas?",
        alternativas: [
            {
                texto: "correto",
                afirmacao: "Emissão de gases de efeito estufa"
            },
            {
                texto: "incorreto",
                afirmacao: "Uso de energia eólica"
            }
        ]
    },
    {
        enunciado: "Como a conservação de água pode ser promovida?",
        alternativas: [
            {
                texto: "correto",
                afirmacao: "Instalando torneiras e chuveiros economizadores"
            },
            {
                texto: "incorreto",
                afirmacao: "Aumentando o uso de água em áreas agrícolas"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
