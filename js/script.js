// script.js
let index = 0;  // Índice do slide atual
const slides = document.querySelectorAll('.slide');  // Seleciona todos os slides
const totalSlides = slides.length;  // Conta o total de slides

// Função para mover o slide de scordo com o parâmetro step
function moveSlide(step) {
    index += step;  // Atualiza o índice com o valor de "step" (1 para avançar, -1 para voltar)

    if (index >= totalSlides) // Se o indice for maior ou igual ao numero total de slides
    {
        index = 0;  // Avança para o primeiro slide
    } else if (index < 0) // Se o indice for menor q 0, ou seja, se estiver no primeiro slide
    {
        index = totalSlides - 1;  // Volta para o último slide
    }

    // Move a posição da .slider para mostrar o slide correto
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
}

// Função para avançar automaticamente
function autoMove() {
    moveSlide(1);  // Avança um slide
}

// Configurar o intervalo automático para mudar de slide a cada 3 segundos
setInterval(autoMove, 3000);

// Garantir que o primeiro slide seja exibido ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    moveSlide(0);  // Exibe o primeiro slide
});


function abrirModal(tipo)  //Modal abre dependendo do tipo de doce(parâmetro)
{
    var conteudo = "";

    if (tipo == "bolos") {
        conteudo = `
            <ul>
                <li>Bolo de chocolate com cobertura cremosa – <strong>R$ 49,90 (1kg)</strong></li>
                <li>Bolo de morango com chantilly – <strong>R$ 54,90 (1kg)</strong></li>
                <li>Bolo de cenoura com calda de chocolate – <strong>R$ 44,90 (1kg)</strong></li>
                <li>Bolo Red Velvet com cream cheese – <strong>R$ 64,90 (1kg)</strong></li>
                <li>Cheesecake de frutas vermelhas – <strong>R$ 69,90 (1kg)</strong></li>
                <li>Torta holandesa – <strong>R$ 59,90 (1kg)</strong></li>
                <li>Torta de limão com merengue – <strong>R$ 49,90 (1kg)</strong></li>
                <li>Torta de maçã caramelizada – <strong>R$ 55,90 (1kg)</strong></li>
            </ul>
        `;
    } else if (tipo == "doces") {
        conteudo = `
            <ul>
                <li>Brigadeiro gourmet (tradicional, branco, pistache, etc) – <strong>R$ 3,50 (unidade)</strong></li>
                <li>Beijinho de coco – <strong>R$ 3,00 (unidade)</strong></li>
                <li>Cajuzinho – <strong>R$ 3,00 (unidade)</strong></li>
                <li>Bicho de pé – <strong>R$ 3,50 (unidade)</strong></li>
                <li>Palha italiana – <strong>R$ 5,00 (unidade)</strong></li>
                <li>Quindim <strong>– R$ 6,50 (unidade)</strong></li>
                <li>Cocada (branca, queimada, com leite condensado)  <strong> – R$ 4,50 (unidade)</strong></li>
                <li>Canjica doce <strong>– R$ 9,90 (250g)</strong></li>
            </ul>
        `;
    } else if (tipo == "colddesserts") {
        conteudo = `
         <ul>
            <li> Pavê de chocolate – <strong>  R$ 49,90 (1kg) </strong></li>
            <li>Mousse de maracujá – <strong> R$ 7,90 (taça)</strong></li>
            <li>Mousse de chocolate com raspas – <strong> R$ 8,90 (taça)</strong></li>
            <li>Torta gelada de morango – <strong>R$ 54,90 (1kg)</strong></li>
            <li>Sorvete artesanal de diferentes sabores – <strong>R$ 12,90 (pote 500ml)</strong></li>
            <li>Geladinho gourmet (morango com ninho, ninho com chocolate, abacaxi com coco, etc)  – <strong>R$ 5,00 (unidade)</strong></li>    
         </ul>

        `
    } else if (tipo == "chocoandbrownie") {
        conteudo = ` 
         <ul>
            <li> Brownie de chocolate – <strong>  R$ 7,90 (unidade) </strong></li>
            <li> Brownie recheado (Nutella, doce de leite, Oreo) – <strong> R$ 9,90 (unidade)</strong></li>
            <li> Cookie recheado com chocolate – <strong> R$ 6,50 (unidade)</strong></li>
            <li> Trufas de chocolate (tradicional, ninho, nutella, sensação, etc) – <strong>R$ 4,90 (unidade)</strong></li>
            <li> Barrinha de chocolate caseira – <strong>R$ 7,50 (unidade)</strong></li>  
         </ul>


       `
    } else {
        conteudo = `
         <ul>
            <li> Macarons coloridos – <strong> R$ 5,50 (unidade) </strong></li>
            <li> Churros – <strong> R$ 7,90 (unidade) </strong> e com coberturas e acompanhamentos como: nuttela ou doce de leite e ninho, nuttela ou doce de leite e morango, nutella ou doce de leite e paçoca, etc  <strong> (R$ 0,50) </strong></li>
            <li> Rabanada açucarada – <strong> R$ 6,50 (unidade) </strong></li>
            <li> Waffle com calda e frutas – <strong> R$ 14,90 (prato)</strong> com calda de chocolate ou mel e frutas frescas como: morangos, bananas, uvas e kiwis.</li>
            <li> Donuts  – <strong>  R$ 8,90 (unidade) </strong> com cobertura de glacê de açúcar e opções de recheio, como doce de leite, nutella ou creme de baunilha.</li>
        </ul>
        `
    }

    document.getElementById("modalcardapio-Conteudo").innerHTML = conteudo; // Exibe a lista do cardápio ul li pelo innerhtml (que vai para o index.html)
    document.getElementById("modalcardapio").style.display = "flex"; // Exibe o conteúdo do modal cardápio

}

function fecharModal() {
    document.getElementById("modalcardapio").style.display = "none"; // Fecha o modal através do estilo display: none; (esse estilo faz o modal sumir)
}