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
let positionX = function() {
    return Math.floor(Math.random() * getScreenX());
}

let positionY = function() {
    return Math.floor(Math.random() * getScreenY());
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

    // Por algum motivo que ainda n descrobri os valores tao dentro do limite
    // Mas ainda assim tem vezes que a mosca escapa pra fora da tela
    console.log("left:", mosca.style.left)
    console.log("top:", mosca.style.top)

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
    console.log("Resolução:", getScreenX(), getScreenY());
    creatMosca();
}

// Temporizar o spawn da mosca
let moscaControl = setInterval(spawnMosca, 1000);

function stopInterval() {
    clearInterval(moscaControl);
}








