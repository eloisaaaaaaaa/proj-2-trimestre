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
                texto: "energia solar",
                afirmacao: "correto "
            },
            {
                texto: "energia de carvão",
                afirmacao: "incorreto"
            }
        ]
    },
    {
        enunciado: "Qual é o impacto do desmatamento na biodiversidade?",
        alternativas: [
            {
                texto: "Redução da biodiversidade",
                afirmacao: "correto"
            },
            {
                texto: "aumento da biodiversidade",
                afirmacao: "incorreto"
            }
        ]
    },
    {
        enunciado: "O que é reciclagem?",
        alternativas: [
            {
                texto: "processo de transformar resíduos em novos materiais",
                afirmacao: "correto"
            },
            {
                texto: "Processo de queimar resíduos para gerar energia",
                afirmacao: "incorreto"
            }
        ]
    },
    {
        enunciado: "Qual é a principal causa das mudanças climáticas?",
        alternativas: [
            {
                afirmacao: "Emissão de gases de efeito estufa",
                afirmacao: "correto"
            },
            {
                texto: "Uso de energia eólica",
                afirmacao: "incorreto"
            }
        ]
    },
    {
        enunciado: "Como a conservação de água pode ser promovida?",
        alternativas: [
            {
                texto: "Instalando torneiras e chuveiros economizadores",
                afirmacao: "correto"
            },
            {
                texto: "Aumentando o uso de água em áreas agrícolas",
                afirmacao: "incorreto"
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
    caixaPerguntas.textContent = 
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();