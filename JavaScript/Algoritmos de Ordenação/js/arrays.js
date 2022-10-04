/*  
    Goals:
    Criar Array, 
    Ordenar o Array
    Ser uma Interface pro usuario ver o que está acontecendo pelo console 
*/

// Imports
import * as sort from './ordenar_array.js'

// Functions
function creatArray() {
    // Cria um array e preenche ele com numeros randomicos de 0 a 99

    // Captar o Tamanho do Array
    const arraySize = prompt('Tamanho do Array: ');

    // Criar um Array do tamanho que foi pedido
    const array = new Array(parseInt(arraySize));

    // Preencher esse array com numero randons
    for (let i = 0; i < parseInt(arraySize); i++) {
        array[i] = Math.floor(Math.random() * 100000001);
    }
    
    // Retornar o array para ele ser usado em outras funções
    return array;
}

// Criar array
const array = creatArray();

// Ordenar

// Ordenar por Bubble Sort
// sort.bubbleSort(array);
// console.log(array);

// Ordenar por Insetion Sort
// sort.insertionSort(array);
// console.log(array);

// Ordenar por Selection Sort
// sort.SelectionSort(array);
// console.log(array);

// Ordenar por  Merge Sort
// sort.mergeSort(array, 0, array.length - 1);
// console.log(array);

// Ordenação por Quick Sort
// sort.quickSort(array, 0, array.length - 1);
// console.log(array);

// Ordenação por Shell Sort
// sort.quickSort(array);
// console.log(array);