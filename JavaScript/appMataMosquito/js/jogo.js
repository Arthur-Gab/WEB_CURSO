/* Regras
------------------------------------------------------------*/
// Zerou os corações = derrota
// Derrotou o tempo = vitória
// Matar moscas para não perder coração


/* Variaveis globais
    - Controlar a vida - 0 derrota
    - Controlar o tempo de jogo - 0 vitoria
    - Selecionar a dificuldade
------------------------------------------------------------*/
let lifes = 3;
let tempo = 11;
// Recupera o serach (nivel enviado pela url - ?nivel)
let dificuldade = location.search.replace("?", "");
// Define os ms em que novas moscas surgirão (dentro do setInterval)
let criarMoscaTempo;
// variaveis que tem um setInterval dentro e funções dedicadas
let criaMosca;
let cronometro;

function startGame() {

    // Recuperar o valor da dificuldade
    let dificuldade = document.querySelector("#dificuldade").value;

    // Verificar se foi informado uma dificuldade valida
    if (dificuldade === "") {
        alert("Selecione uma dificuldade para iniciar o jogo");
    } else {
        // Iniciar o jogo
        location.href = "app.html?" + dificuldade;
    }
}

// Níveis de dificuldade do jogo
if (dificuldade === "facil") {
    // 1500 ms
    criarMoscaTempo = 1500;
    criaMosca = setInterval(spawnMosca, criarMoscaTempo)
    cronometro = setInterval(temporizador, 1000);
}

if (dificuldade === "normal") {
    // 1000 ms
    criarMoscaTempo = 1000;
    criaMosca = setInterval(spawnMosca, criarMoscaTempo)
    cronometro = setInterval(temporizador, 1000);
}

if (dificuldade === "dificil") {
    // 750 ms
    criarMoscaTempo = 750;
    criaMosca = setInterval(spawnMosca, criarMoscaTempo)
    cronometro = setInterval(temporizador, 1000);  
}

/* Modulos para deixar a tela do jogo igual a tela do navegador
    - Conseguir resolução do X e Y
    - Randomizar um numero entre essas resoluções min - 0
------------------------------------------------------------*/
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


/* Modulos da mosca
    - Criar
    - Remover
    - Matar
    - Eliminar caso sobreviva
------------------------------------------------------------*/
// Criar a mosca no html
function spawnMosca() {
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


/* Modulos para Definir derrota e vitoria
    - Perder corações 
    - Derrotar o tempo
------------------------------------------------------------*/
// Trocar o coração cheio pelo vazio e subtrair a vida do usuario
// Verificar se perdeu o game
function lossLife() {

    document.querySelector("#heart" + lifes).src = "img/coracao_vazio.png";
    lifes--;

    if (lifes === 0) {

        // Game Over
        // Para a criação de moscas e o cronometro
        clearInterval(criaMosca)
        clearInterval(cronometro)
        location.href = "gameOver.html"

    }

}

// Cronometra o tempo do jogo
// Caso chegue a 0, e exista ao menos 1 heart = win
function temporizador() {

    tempo--;
    document.querySelector("#cronometro").innerHTML = tempo;

    if (tempo === 0 && lifes > 0) {
        // Módulo pra ir pra tela de Vitoria
        // Para a criação de moscas e o cronometro
        clearInterval(criaMosca)
        clearInterval(cronometro)

        location.href = "win.html"
    }

}














