// SCRIPT DARK MODE 
const botao = document.getElementById("theme-toggle");
const icone = document.getElementById("icone-tema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    if (document.body.classList.contains("modo-escuro")) { icone.src = "imagens/sol.png"; }
    else { icone.src = "imagens/lua-crescente.png"; }
});


// ANIMAÇÃO DAS SEÇÕES

const secoes = document.querySelectorAll(".secao-site");

window.addEventListener("scroll", () => {

    secoes.forEach(secao => {

        const posicao = secao.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            secao.classList.add("secao-visivel");
        }

    });

});


// CARROSSEL
    
const track = document.querySelector(".carrossel-track");
const slides = document.querySelectorAll(".slide-exame");
const indicadores = document.querySelectorAll(".indicador");

let slideAtual = 0;

function atualizarCarrossel() {

    track.style.transform = `translateX(-${slideAtual * 100}%)`;

    indicadores.forEach(ind => ind.classList.remove("ativo"));
    indicadores[slideAtual].classList.add("ativo");

}

function mudarSlide(direcao) {

    slideAtual += direcao;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();

}

function irParaSlide(index) {

    slideAtual = index;

    atualizarCarrossel();

}
