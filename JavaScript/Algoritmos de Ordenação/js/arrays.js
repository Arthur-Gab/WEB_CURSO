/*  
    Goals:
    Criar Array, 
    Ordenar o Array
    Ser uma Interface pro usuario ver o que está acontecendo pelo console 
*/

// Imports
import * as arraysSort from './ordenar_array.js'

// Functions
function creatArray() {
    // Cria um array e preenche ele com numeros randomicos de 0 a 99

    // Captar o Tamanho do Array
    const arraySize = prompt('Tamanho do Array: ');
    console.log('Tamanhao: ' + arraySize);

    // Criar um Array do tamanho que foi pedido
    const array = new Array(parseInt(arraySize));

    // Preencher esse array com numero randons
    for (let i = 0; i < parseInt(arraySize); i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    
    array.push(3);
    // Retornar o array para ele ser usado em outras funções
    return array;
}

// Program

// 1° Criar o array (preenchico)
// 2° Ordenar

// Ordenar por Bubble Sort
arraysSort.bubbleSort(creatArray());

// Ordenar por Insetion Sort
arraysSort.insertionSort(creatArray());