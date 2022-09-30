// Faz o controle de vidas do usuario
let lifes = 3;


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
    let posX = Math.floor(Math.random() * getScreenX() - 117);

    return posX < 0 ? 0 : posX;
}

let positionY = function () {
    let posY = Math.floor(Math.random() * getScreenY() - 122.5);

    return posY < 0 ? 0 : posY;
}


// Aleatórizar a classe que a mosca recebe
function randomClassMosca() {
    let moscaClass = Array("mosca-min-size", "mosca-med-size", "mosca-max-size");
    let indice = Math.floor(Math.random() * 3);
    return moscaClass[indice];
}

// Aleatórizar o lado para que o mosquito olha - Direita ou Esquerda
function randomSide() {
    let moscaSide = Array("side-a", "side-b");
    let indice = Math.floor(Math.random() * 2);
    return moscaSide[indice];
}


// Criar a mosca no html
function creatMosca() {
    // Remover o elementos mosca, caso exista
    // E retirar 1 de vida
    if (document.querySelector("#mosca")) {
        // remover a mosca
        flySuicide();

        //perder 1 de vida
        lossLife();
    }

    // Criar a img da mosca, setar o src, seu tamanho e lado que olha
    let mosca = document.createElement("img");
    mosca.src = "img/mosca.png";

    // Atribuindo as classes de tamanho e lado que olha
    mosca.classList.add(randomClassMosca(), randomSide());

    // Posicionar a mosca
    mosca.style.position = "absolute"
    mosca.style.left = positionX() + "px";
    mosca.style.top = positionY() + "px";
    mosca.id = "mosca";
    // Matar a mosca com clique
    mosca.onclick = killMosca;

    // Inserir a mosca no body
    document.body.appendChild(mosca);
}

function killMosca() {
    if (document.querySelector("#mosca"))
        document.querySelector("#mosca").remove();
}

function flySuicide() {
    // Remover o elemento mosca
    document.querySelector("#mosca").remove();
}

function lossLife() {
    // Trocar o coração cheio pelo vazio e subtrair a vida do usuario
    // Verificar se perdeu o game
    if (lifes > 0) {

        document.querySelector("#heart" + lifes).src = "img/coracao_vazio.png";
        lifes--;

    } else {

        // Game Over
        location.href = "game_over.html"

    }

}

// Spawnar a mosca 
// Temporizar o spawn da mosca
let gameModel = setInterval(creatMosca, 2000);

// Parar o spawn com o button
function stopInterval() {
    clearInterval(gameModel);
}










