// // var array = []
// // var array = Array('Maça', 'Banana', 'Uva', 'Morango')
// // var array = ['Maça', 'Banana', 'Uva', 'Morango']

// let array = Array()
// array[0] = 'Maça'
// array[1] = 'Banana'
// array[2] = 'Uva'
// array[3] = 'Morango'
// // array.length fica errado no caso acima

// // add o ultimo elemento
// console.log('Adicionando em Ultimo')
// array.push('Laranja')
// console.log(array)


// // remove o ultimo elemento
// console.log('Removendo o Ultimo')
// array.pop()
// console.log(array)


// // add o primeiro elemento 
// console.log('Adicionando em Primeiro')
// array.unshift('Abacaxi')
// console.log(array)
// // Caso eu nao tivesse usado shift abaixo, o array teria desde o 
// // primeiro log do array ter colocado o Abacaxi como elemento 0


// // remove o primeiro elemento
// console.log('Removendo em Primeiro')
// array.shift()
// console.log(array)


// // procurar o indice
// console.log('Procurando indice de UVA: ' + array.indexOf('Uva'))


// // remover um item pela posição do índice
// console.log('Remover um item a partir da posição do índice "pos" e qtd "n"')
// // array.splice(pos, qtd)
// array.splice(1, 1)
// console.log(array)


// // Procurar elemento
// console.log(array)
// console.log('IndexOf Uva: ' + array.indexOf('Uva'))
// // o indexOf é case sensitive


// // Copiar um array, pode ser especificado onde começar e onde terminar a copia
// // ex slice(2,4)
// console.log('Copiar Array')
// let copiaArray = array.slice(1, 3);
// console.log(copiaArray)

// // Ordenar um array em js é mt simples, basta utilizar o metódo sort
// // Mas esse metódo é especifico pra Alpha Numerico
// console.log('Ordenar Array')
// array.sort()
// console.log(array)

/* Array Multidimensionals
------------------------------------------------------------*/
// let arrayM = Array()
// arrayM ['cavaleiros'] = Array()
// arrayM ['cavalos'] = Array()

// arrayM['cavaleiros'][0] = 'Pedro'
// arrayM['cavaleiros'][1] = 'Arthur'
// arrayM['cavaleiros'][2] = 'Augusto'

// arrayM['cavalos'][0] = 'Hidra'
// arrayM['cavalos'][1] = 'Agameno'
// arrayM['cavalos'][2] = 'Tranquila'

// console.log('Array Multidimensional')
// console.log(arrayM)

// console.log('ArrayM Ordenado')
// arrayM.sort()
// console.log(arrayM)

// console.log('Array cavaleiros ordenado')
// arrayM['cavaleiros'].sort()
// console.log(arrayM)

// console.log('Array cavalo ordenado')
// arrayM['cavalos'].sort()
// console.log(arrayM)

/* Ordenando um array do tipo numerico
------------------------------------------------*/
// criando o array
let lista_numerica = new Array(20)
console.log('Array desordenado')
console.log(lista_numerica)

// Adicionar numeros
for (let i = 0; i < lista_numerica.length; i++)
    lista_numerica[i] = Math.floor(Math.random() * 101)

// Mostrar o array
console.log('Array Ordenado')
lista_numerica.sort(function (a, b) {
    return a - b
})
console.log(lista_numerica)

// Ensina o metodo sort a comparar numeros
function auxSortNumber (a, b) {
    return a - b
}