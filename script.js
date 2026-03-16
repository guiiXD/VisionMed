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
const carrossel = document.querySelector(".carrossel-exames");

let slideAtual = 0;
let intervaloCarrossel;

function atualizarCarrossel() {
    if (!track || slides.length === 0 || indicadores.length === 0) return;

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

function iniciarCarrosselAutomatico() {
    pararCarrosselAutomatico();

    intervaloCarrossel = setInterval(() => {
        mudarSlide(1);
    }, 5000);
}

function pararCarrosselAutomatico() {
    clearInterval(intervaloCarrossel);
}

if (carrossel) {
    carrossel.addEventListener("mouseenter", pararCarrosselAutomatico);
    carrossel.addEventListener("mouseleave", iniciarCarrosselAutomatico);
}

atualizarCarrossel();
iniciarCarrosselAutomatico();


// DESLIZAR O CARROSSEL COM O DEDO NO MOBILE

let toqueInicialX = 0;
let toqueFinalX = 0;
let arrastando = false;

function iniciarToque(e) {
    toqueInicialX = e.touches[0].clientX;
    toqueFinalX = toqueInicialX;
    arrastando = true;
    pararCarrosselAutomatico();
}

function moverToque(e) {
    if (!arrastando) return;
    toqueFinalX = e.touches[0].clientX;
}

function finalizarToque() {
    if (!arrastando) return;

    const distancia = toqueFinalX - toqueInicialX;
    const limiteMinimo = 50;

    if (Math.abs(distancia) > limiteMinimo) {
        if (distancia < 0) {
            mudarSlide(1);
        } else {
            mudarSlide(-1);
        }
    }

    arrastando = false;
    toqueInicialX = 0;
    toqueFinalX = 0;

    iniciarCarrosselAutomatico();
}

if (carrossel) {
    const viewport = document.querySelector(".carrossel-viewport");

    if (viewport) {
        viewport.addEventListener("touchstart", iniciarToque, { passive: true });
        viewport.addEventListener("touchmove", moverToque, { passive: true });
        viewport.addEventListener("touchend", finalizarToque);
    }
}

// MODO ESCURO DE ACORDO COM O TEMA DO WINDOWS

const body = document.body;
const botaoTema = document.getElementById("theme-toggle");
const iconeTema = document.getElementById("icone-tema");

const iconeClaro = "imagens/sol.png";
const iconeEscuro = "imagens/lua-crescente.png";

function definirTema(tema, salvar = true) {
    const modoEscuro = tema === "escuro";

    body.classList.toggle("modo-escuro", modoEscuro);

    if (iconeTema) {
        iconeTema.src = modoEscuro ? iconeClaro : iconeEscuro;
        iconeTema.alt = modoEscuro ? "Modo claro" : "Modo escuro";

        if (modoEscuro) {
            iconeTema.classList.remove("icone-lua");
        } else {
            iconeTema.classList.add("icone-lua");
        }
    }

    if (salvar) {
        localStorage.setItem("tema", tema);
    }
}

function temaDoSistema() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro";
}

function iniciarTema() {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro" || temaSalvo === "claro") {
        definirTema(temaSalvo, false);
    } else {
        definirTema(temaDoSistema(), false);
    }
}

iniciarTema();

if (botaoTema) {
    botaoTema.addEventListener("click", () => {
        const temaAtual = body.classList.contains("modo-escuro") ? "escuro" : "claro";
        const novoTema = temaAtual === "escuro" ? "claro" : "escuro";
        definirTema(novoTema, true);
    });
}

// MENU ATIVO CONFORME A SEÇÃO

const linksMenu = document.querySelectorAll('.menu-navegacao a');
const secoesMenu = document.querySelectorAll('section[id]');

function atualizarMenuAtivo() {
    const header = document.querySelector('.topo-site');
    const alturaHeader = header ? header.offsetHeight : 0;
    const topoRolagem = window.scrollY + alturaHeader + 120;

    secoesMenu.forEach(secao => {
        const id = secao.getAttribute('id');
        const inicio = secao.offsetTop;
        const altura = secao.offsetHeight;

        const link = document.querySelector(`.menu-navegacao a[href="#${id}"]`);

        if (topoRolagem >= inicio && topoRolagem < inicio + altura) {
            linksMenu.forEach(item => item.classList.remove('ativo-menu'));
            if (link) {
                link.classList.add('ativo-menu');
            }
        }
    });
}

window.addEventListener('scroll', atualizarMenuAtivo);
window.addEventListener('load', atualizarMenuAtivo);

// BOTÃO VOLTAR AO TOPO

const botaoTopo = document.getElementById("voltar-topo");

function controlarBotaoTopo() {
    if (!botaoTopo) return;

    if (window.scrollY > 300) {
        botaoTopo.classList.add("mostrar");
    } else {
        botaoTopo.classList.remove("mostrar");
    }
}

window.addEventListener("scroll", controlarBotaoTopo);
window.addEventListener("load", controlarBotaoTopo);