// Testar as funções
function getScrenSize() {
    console.log(getScreenX(), getScreenY());
    console.log('Posições randomicas - ' + 'X: ' + positionX() + '| Y: ' + positionY());
    creatMosca();
}

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
function positionX() {
    let positionX = Math.floor(Math.random() * getScreenX());
    return positionX;
}

function positionY() {
    let positionY = Math.floor(Math.random() * getScreenY());
    return positionY;
}

// Criar a mosca no html
function creatMosca() {
    // crair a mosca
    let mosca = document.createElement("img");
    mosca.src = "img/mosca.png";
    mosca.classList.add(randomClassMosca())

    // posicionar a mosca
    mosca.style.position = "relative"
    mosca.style.left = positionX() + "px";
    mosca.style.top = positionY() + "px";

    console.log("Left: " + mosca.style.left)
    console.log("Top: " + mosca.style.top)

    // inserir a mosca no body
    document.body.appendChild(mosca);
}

// Aleatórizar a classe que a mosca recebe
function randomClassMosca() {
    let moscaClass = Array("mosca-min-size", "mosca-med-size", "mosca-max-size");
    let indice = Math.floor(Math.random() * 3);
    return moscaClass[indice];
}

let moscaControl = setInterval(getScrenSize, 2000);

function stopInterval() {
    clearInterval(moscaControl);
}








