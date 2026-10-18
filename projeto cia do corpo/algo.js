// Animação ao carregar a página
window.addEventListener("load", () => {
    document.body.classList.add("carregado");
});


// Animação ao rolar a página
const elementos = document.querySelectorAll(
    ".sobre, .card-treino, .card-plano, .contato, .botao-container"
);

elementos.forEach((elemento) => {
    elemento.classList.add("animar");
});


const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }

    });

}, {
    threshold: 0.2
});


elementos.forEach((elemento) => {
    observer.observe(elemento);
});


// Efeito no botão de matrícula
const botao = document.querySelector(".botao");

botao.addEventListener("mouseenter", () => {
    botao.innerHTML = "VAMOS COMEÇAR! 💪";
});

botao.addEventListener("mouseleave", () => {
    botao.innerHTML = "QUERO ME MATRICULAR!";
});