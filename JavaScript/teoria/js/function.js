// Void
// Retorno

function calcularAreaTerreno() {

    //Var
    let largura = prompt('Largura do terreno')
    let comprimento = prompt('Comprimento do terreno')

    //Area
    let area = largura * comprimento;

    console.log('O terreno possui ' + area + ' m²')

}

function soma(a, b) {

    b = b === undefined ? 0 : b;
    return a + b;

}

// Funçaõ anonima
var getName = function () {
    return prompt('Qual seu nome: ')
}

var exibirSaudacao = function () {
    console.log('Ola ' + getName() + ', tudo bem? ')
}

