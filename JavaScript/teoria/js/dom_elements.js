// Manipulando txt

function confirmDataType() {

    // Selecionar o valor digitado
    let caracter = document.getElementById('entrada').value

    // Limpar o campo de digitação
    document.getElementById('entrada').value = ''

    //Trata a var pra valer so o 1° digito
    caracter = caracter.charAt(0)

    if (isNaN(parseInt(caracter))) {
        document.getElementById('apenas_caracter').value = caracter
    }
    else {
        document.getElementById('apenas_numero').value = caracter
    }

}

function modificarCor(cor) {
    // Mudando a cor
    document.getElementById('demo-painting').style.backgroundColor = cor;
}