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


// CARROSSEL INFINITO COM SWIPE TIPO STORIES

const track = document.querySelector(".carrossel-track");
const carrossel = document.querySelector(".carrossel-exames");
const indicadores = document.querySelectorAll(".indicador");

let slidesOriginais = [];
let totalSlides = 0;
let slideAtual = 1; // começa no primeiro slide real
let intervaloCarrossel = null;

let larguraSlide = 0;
let estaArrastando = false;
let estaAnimando = false;

let startX = 0;
let currentX = 0;
let startTranslate = 0;
let currentTranslate = 0;

function atualizarLarguraSlide() {
    if (!track) return;
    larguraSlide = carrossel.querySelector(".carrossel-viewport").offsetWidth;
}

function atualizarIndicadores() {
    if (!indicadores.length || totalSlides === 0) return;

    let indiceReal = slideAtual - 1;

    if (slideAtual === 0) {
        indiceReal = totalSlides - 1;
    } else if (slideAtual === totalSlides + 1) {
        indiceReal = 0;
    }

    if (indiceReal < 0) indiceReal = totalSlides - 1;
    if (indiceReal >= totalSlides) indiceReal = 0;

    indicadores.forEach((ind) => ind.classList.remove("ativo"));

    if (indicadores[indiceReal]) {
        indicadores[indiceReal].classList.add("ativo");
    }
}

function definirTransform(x, animar = true) {
    if (!track) return;
    track.style.transition = animar ? "transform 0.45s ease" : "none";
    track.style.transform = `translateX(${x}px)`;
}

function obterTranslatePorIndice(indice) {
    return -(indice * larguraSlide);
}

function irParaIndice(indice, animar = true) {
    slideAtual = indice;
    currentTranslate = obterTranslatePorIndice(slideAtual);
    definirTransform(currentTranslate, animar);
    atualizarIndicadores();
}

function criarClones() {
    if (!track) return;

    slidesOriginais = Array.from(track.children);
    totalSlides = slidesOriginais.length;

    if (!totalSlides) return;

    const primeiroClone = slidesOriginais[0].cloneNode(true);
    const ultimoClone = slidesOriginais[totalSlides - 1].cloneNode(true);

    primeiroClone.classList.add("clone");
    ultimoClone.classList.add("clone");

    track.insertBefore(ultimoClone, slidesOriginais[0]);
    track.appendChild(primeiroClone);

    atualizarLarguraSlide();
    irParaIndice(1, false);
}

function mudarSlide(direcao) {
    if (!track || estaAnimando || estaArrastando) return;

    estaAnimando = true;
    irParaIndice(slideAtual + direcao, true);
}

function irParaSlide(index) {
    if (!track || estaAnimando || estaArrastando) return;

    estaAnimando = true;
    irParaIndice(index + 1, true);
}

function corrigirLoopInfinito() {
    if (slideAtual === totalSlides + 1) {
        irParaIndice(1, false);
    } else if (slideAtual === 0) {
        irParaIndice(totalSlides, false);
    } else {
        atualizarIndicadores();
    }

    estaAnimando = false;
}

function iniciarCarrosselAutomatico() {
    pararCarrosselAutomatico();

    intervaloCarrossel = setInterval(() => {
        mudarSlide(1);
    }, 5000);
}

function pararCarrosselAutomatico() {
    if (intervaloCarrossel) {
        clearInterval(intervaloCarrossel);
        intervaloCarrossel = null;
    }
}

// ===== ARRASTO TIPO STORIES =====

function iniciarArrasto(clientX) {
    if (!track || estaAnimando) return;

    estaArrastando = true;
    startX = clientX;
    currentX = clientX;
    startTranslate = obterTranslateAtual();
    currentTranslate = startTranslate;

    track.style.transition = "none";
    pararCarrosselAutomatico();
}

function moverArrasto(clientX) {
    if (!estaArrastando || !track) return;

    currentX = clientX;
    const deslocamento = currentX - startX;
    currentTranslate = startTranslate + deslocamento;

    definirTransform(currentTranslate, false);
}

function finalizarArrasto() {
    if (!estaArrastando || !track) return;

    const deslocamentoFinal = currentX - startX;
    const limiteTroca = larguraSlide * 0.18;

    estaArrastando = false;

    if (deslocamentoFinal < -limiteTroca) {
        estaAnimando = true;
        irParaIndice(slideAtual + 1, true);
    } else if (deslocamentoFinal > limiteTroca) {
        estaAnimando = true;
        irParaIndice(slideAtual - 1, true);
    } else {
        definirTransform(obterTranslatePorIndice(slideAtual), true);
    }

    iniciarCarrosselAutomatico();
}

function obterTranslateAtual() {
    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
}

// ===== EVENTOS =====

if (track) {
    track.addEventListener("transitionend", corrigirLoopInfinito);
}

if (carrossel) {
    carrossel.addEventListener("mouseenter", pararCarrosselAutomatico);
    carrossel.addEventListener("mouseleave", iniciarCarrosselAutomatico);

    carrossel.addEventListener("touchstart", (e) => {
        iniciarArrasto(e.touches[0].clientX);
    }, { passive: true });

    carrossel.addEventListener("touchmove", (e) => {
        moverArrasto(e.touches[0].clientX);
    }, { passive: true });

    carrossel.addEventListener("touchend", finalizarArrasto);

    carrossel.addEventListener("mousedown", (e) => {
        e.preventDefault();
        iniciarArrasto(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
        if (!estaArrastando) return;
        moverArrasto(e.clientX);
    });

    window.addEventListener("mouseup", () => {
        if (estaArrastando) finalizarArrasto();
    });
}

window.addEventListener("resize", () => {
    atualizarLarguraSlide();
    definirTransform(obterTranslatePorIndice(slideAtual), false);
});

criarClones();
iniciarCarrosselAutomatico();

// TEMA AUTOMÁTICO CONFORME O SISTEMA

const body = document.body;

function temaDoSistema() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro";
}

function aplicarTemaAutomatico() {
    const modoEscuro = temaDoSistema() === "escuro";
    body.classList.toggle("modo-escuro", modoEscuro);
}

aplicarTemaAutomatico();

const mediaTema = window.matchMedia("(prefers-color-scheme: dark)");

if (mediaTema.addEventListener) {
    mediaTema.addEventListener("change", aplicarTemaAutomatico);
} else if (mediaTema.addListener) {
    mediaTema.addListener(aplicarTemaAutomatico);
}

// MENU ATIVO CONFORME A SEÇÃO

const linksMenu = document.querySelectorAll('.menu-navegacao a');
const secoesMenu = document.querySelectorAll('section[id]');

function atualizarMenuAtivo() {
    const header = document.querySelector('.topo-site');
    const alturaHeader = header ? header.offsetHeight : 0;
    const topoRolagem = window.scrollY + alturaHeader + 80;

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

// MENU HAMBÚRGUER

const botaoHamburguer = document.getElementById("menu-hamburguer");
const menuNavegacao = document.getElementById("menu-navegacao");

function fecharMenuMobile() {
    if (!botaoHamburguer || !menuNavegacao) return;

    botaoHamburguer.classList.remove("ativo");
    menuNavegacao.classList.remove("aberto");
    botaoHamburguer.setAttribute("aria-expanded", "false");
}

function alternarMenuMobile() {
    if (!botaoHamburguer || !menuNavegacao) return;

    const aberto = menuNavegacao.classList.contains("aberto");

    if (aberto) {
        fecharMenuMobile();
    } else {
        botaoHamburguer.classList.add("ativo");
        menuNavegacao.classList.add("aberto");
        botaoHamburguer.setAttribute("aria-expanded", "true");
    }
}

if (botaoHamburguer) {
    botaoHamburguer.addEventListener("click", alternarMenuMobile);
}

if (menuNavegacao) {
    menuNavegacao.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                fecharMenuMobile();
            }
        });
    });
}

document.addEventListener("click", (e) => {
    if (
        window.innerWidth <= 768 &&
        menuNavegacao &&
        botaoHamburguer &&
        !menuNavegacao.contains(e.target) &&
        !botaoHamburguer.contains(e.target)
    ) {
        fecharMenuMobile();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        fecharMenuMobile();
    }
});

// fecha ao clicar em um link
if (menuNavegacao) {
    menuNavegacao.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                fecharMenuMobile();
            }
        });
    });
}

// fecha ao clicar fora
document.addEventListener("click", (e) => {
    if (
        window.innerWidth <= 768 &&
        menuNavegacao &&
        botaoHamburguer &&
        !menuNavegacao.contains(e.target) &&
        !botaoHamburguer.contains(e.target)
    ) {
        fecharMenuMobile();
    }
});

// fecha ao redimensionar para desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        fecharMenuMobile();
    }
});

// HEADER INTELIGENTE NO MOBILE

const header = document.querySelector(".topo-site");
let ultimoScroll = window.scrollY;

function controlarHeaderMobile() {
    if (!header) return;
    if (window.innerWidth > 768) return;

    const scrollAtual = window.scrollY;

    if (scrollAtual <= 20) {
        header.classList.remove("header-escondida");
        ultimoScroll = scrollAtual;
        return;
    }

    if (scrollAtual > ultimoScroll && scrollAtual > 80) {
        header.classList.add("header-escondida");
    } else {
        header.classList.remove("header-escondida");
    }

    ultimoScroll = scrollAtual;
}

window.addEventListener("scroll", controlarHeaderMobile);
window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && header) {
        header.classList.remove("header-escondida");
    }
});

// ANO AUTOMÁTICO NO FOOTER

const anoAtual = document.getElementById("ano-atual");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

// SEÇÃO CONVÊNIOS 

const botaoVerConvenios = document.getElementById("botao-ver-convenios");
const listaConveniosCompleta = document.getElementById("lista-convenios-completa");

if (botaoVerConvenios && listaConveniosCompleta) {
    botaoVerConvenios.addEventListener("click", () => {
        const estaOculta = listaConveniosCompleta.hasAttribute("hidden");

        if (estaOculta) {
            listaConveniosCompleta.removeAttribute("hidden");
            botaoVerConvenios.textContent = "Ocultar convênios";
            botaoVerConvenios.setAttribute("aria-expanded", "true");
        } else {
            listaConveniosCompleta.setAttribute("hidden", "");
            botaoVerConvenios.textContent = "Ver todos os convênios";
            botaoVerConvenios.setAttribute("aria-expanded", "false");
        }
    });
}