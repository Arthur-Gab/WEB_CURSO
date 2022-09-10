// Manipulando txt
function confirmDataType() {

    // Selecionar o valor digitado
    let caracter = document.getElementById('entrada').value;

    // Limpar o campo de digitação
    document.getElementById('entrada').value = '';

    //Trata a var pra valer so o 1° digito
    caracter = caracter.charAt(0)

    if (isNaN(parseInt(caracter))) {
        document.getElementById('apenas_caracter').value = caracter;
    }
    else {
        document.getElementById('apenas_numero').value = caracter;
    }

}

// Manipulando txt
function modificarCor(cor) {
    // Mudando a cor
    document.getElementById('demo-painting').style.backgroundColor = cor;
}

// Manipulando Classes
function modificaClasse() {
    let div = document.querySelector('#mensagem');
    div.classList.toggle('estilo2');
    // Também é uma opção
    // document.getElementById('mensagem').classList = ('estilo2');
}

// Exercicio 1
/*  O input quando recebe o focu muda a cor para amarelo 
    se nd for digitado bg inherit
    Quando perder o foco recuperar valor e:
    caso seja digitado entre 1 a 3 caracter bg red 
    caso seja digitado >3 bg green */

// O input quando recebe o focu muda a cor para amarelo 
function modificaBackground() {
    let element = document.getElementById('demo-input');
    element.classList.add('bg-yellow');
}

/* se nd for digitado bg inherit
    Quando perder o foco recuperar valor e:
    caso seja digitado entre 1 a 3 caracter bg red 
    caso seja digitado >3 bg green */
function modificaBackground2() {
    let element = document.getElementById('demo-input');
    let str = element.value;
    
    // Valor == Empty
    if(str.length == 0) {
        // Modifica o bg do input com o bg do Body
        element.classList.replace('bg-yellow', 'bg-body');
        element.classList.replace('bg-red', 'bg-body');
        element.classList.replace('bg-green', 'bg-body');
    }

    // Valor != Empty & Valor < 3
    if(str.length != 0 && str.length < 3) {
        element.classList.replace('bg-yellow', 'bg-red');
    }
    // Valor != Empty & Valor > 3
    if(str.length != 0 && str.length >= 3) {
        element.classList.replace('bg-yellow', 'bg-green');
    }
}
