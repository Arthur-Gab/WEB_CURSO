let objetos = Array('Cadeira', 'Impressora', 'Garfo')

function addObj(obj) {
    // obj recebe o valor do input
    obj = document.querySelector('#obj').value

    // verificar se obj é vazio
    if (obj == '') {
        // obj vazio
        alert("Informe um valor válido")
    } else {
        // obj != vazio

        // Verificar se o obj já existe no array objetos
        if (objetos.indexOf(obj) === -1) {
            // Valor não existe 
            objetos.push(obj)
            console.log(objetos)
            
        } else {
            // Valor já existe
            alert('Objeto já foi adicionado')
        }
    }

    // esvaziar o valor
    document.querySelector('#obj').value = ''
}

function sortObj() {
    // Ordenar o array Objetos
    objetos.sort()
    console.log(objetos)
}