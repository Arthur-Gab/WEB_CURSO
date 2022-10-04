// Ordenação Bubble Sort
// O(n) O(n²)
export function bubbleSort(array) {

    // Abusar da variavel swap pra definir se o array está ordenado
    let swap;
    // Caso a lista ja esteja ordenada o algoritmo não precisará continuar a verificar se está ordenada 
    // igual a um bubbleSort comum, até o termino de um for, como exemplo
    do {

        swap = false;
        for (let i = 0; i < array.length - 1; i++) {

            if (array[i] > array[i + 1]) {

                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swap = true;
            }
        }
    } while (swap)
}

// Ordenação Insertion Sort
// O(n) O(n²)
export function insertionSort(array) {

    // Recebe o valor do numero que vai ser comparado com o "morto"
    let current_index;

    for (let i = 1; i < array.length; i++) {

        current_index = array[i];

        // Comparar o current_index com o anterior e trocá-los 
        // A let j serve para percorrer o array nos casos em q meu current_index
        // é o elemento menor comparativamente
        for (let j = i - 1; array[j] > current_index && j >= 0; j--) {
            // Trocar a posição dos valores do array
            [array[j + 1], array[j]] = [array[j], current_index];
        }

    }
}

// Ordenação Selection Sort
// O(n²)
export function SelectionSort(array) {

    // A ideía dessa ordenação é analisar todos os elementos do array e definir o menor entre eles
    // E ir colocando-os na ordem correta
    // Para isso eu comparo qual o menor valor e pego seu indice pra conseguir usar essa informação
    // Pra colocar ele no lugar certo
    let lowest_index;


    // Preencher todo o array pra ordenar
    for (let i = 0; i < array.length - 1; i++) {

        // Começa no 0
        lowest_index = i;

        // Percorrer todo o array pra conseguir o lowest
        for (let j = i + 1; j < array.length; j++) {

            // Atribuir o menor numero ao lowest
            if (array[j] < array[lowest_index]) {
                lowest_index = j;
            }
        }

        // Verificar c tem a necessidade de trocar
        if (i != lowest_index) {
            [array[i], array[lowest_index]] = [array[lowest_index], array[i]];
        }

    }
}

// Ordenação por Merge Sort
// O(n * log n)
// Dividir → Conquistar
// A ideia do merge sort é dividir o vetor até o menor valor possivel, 1 unidade e ordenalas comparando
// as outras unidades, até voltar a ter um array ordenado
export function mergeSort(array, inicio, fim) {

    // caso base
    if (inicio < fim) {
        // achar o ponto do meio
        let meio = Math.floor((inicio + fim) / 2);

        // ordenar a primeira metade
        mergeSort(array, inicio, meio);
        // ordenar a segunda metade
        mergeSort(array, meio + 1, fim);

        // ordenar as metades
        merge(array, inicio, meio, fim);
    }
}

// merges two subarrays of array[]
function merge(array, start, middle, end) {
    // create temp arrays
    let leftArrayLength = middle - start + 1;
    let rightArrayLength = end - middle;

    let leftArray = [];
    let rightArray = [];

    // fill in left array
    for (let i = 0; i < leftArrayLength; ++i)
        leftArray[i] = array[start + i];

    // fill in right array
    for (let i = 0; i < rightArrayLength; ++i)
        rightArray[i] = array[middle + 1 + i];

    // merge the temp arrays

    // initial indexes of first and second subarrays
    let leftIndex = 0, rightIndex = 0;

    // the index we will start at when adding the subarrays back into the main array
    let currentIndex = start;

    // compare each index of the subarrays adding the lowest value to the currentIndex
    while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
        if (leftArray[leftIndex] <= rightArray[rightIndex])
            array[currentIndex] = leftArray[leftIndex++];
        else
            array[currentIndex] = rightArray[rightIndex++];
        currentIndex++;
    }

    // copy remaining elements of leftArray[] if any
    while (leftIndex < leftArrayLength) array[currentIndex++] = leftArray[leftIndex++]

    // copy remaining elements of rightArray[] if any
    while (rightIndex < rightArrayLength) array[currentIndex++] = rightArray[rightIndex++]
}
