// Criar 2 metodos pra me retornar o valor do tamanho da tela do browse
function getScreenX() {
    // Conseguir retornar o tamanho dinamicamente da largura do browse
    // return number
    let eixoX = window.innerWidth;
    return eixoX;
}

function getScreenY() {
    // Conseguir retornar o tamanho dinamicamente da altura do browse
    // return number
    let eixoY = window.innerHeight;
    return eixoY;
}

// Crair posições pra mosca de forma randomicas baseada nos valores do tamanho da tela
let positionX = function () {
    let posX = Math.floor(Math.random() * getScreenX() - 117)

    return posX < 0 ? 0 : posX;
}

let positionY = function () {
    let posY = Math.floor(Math.random() * getScreenY() - 122.5);

    return posY < 0 ? 0 : posY
}

// Criar a mosca no html
function creatMosca() {
    // crair a mosca
    let mosca = document.createElement("img");
    mosca.src = "img/mosca.png";
    mosca.classList.add(randomClassMosca())

    // posicionar a mosca
    mosca.style.position = "absolute"
    mosca.style.left = positionX() + "px";
    mosca.style.top = positionY() + "px";

    // inserir a mosca no body
    document.body.appendChild(mosca);
}

// Aleatórizar a classe que a mosca recebe
function randomClassMosca() {
    let moscaClass = Array("mosca-min-size", "mosca-med-size", "mosca-max-size");
    let indice = Math.floor(Math.random() * 3);
    return moscaClass[indice];
}

// Spawnar a mosca 
function spawnMosca() {
    // usando pra debuggar
    console.log("Resolução:", getScreenX(), getScreenY());
    creatMosca();
}

// Temporizar o spawn da mosca
let moscaControl = setInterval(spawnMosca, 1000);

// Parar o spawn com o button
function stopInterval() {
    clearInterval(moscaControl);
}










