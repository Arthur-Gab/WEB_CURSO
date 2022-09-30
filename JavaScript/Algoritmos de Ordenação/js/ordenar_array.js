// Ordenação Bubble Sort
export function bubbleSort(array) {
    // Mostrar o array antes da ordenação
    console.log(array);

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

    console.log(array);
}

// Ordenação Insertion Sort
export function insertionSort(array) {
    // Mostrar o array antes da ordenação
    console.log(array);

    // Recebe o valor do numero que vai ser comparado com o "morto"
    let atual;

    for (let i = 1; i < array.length; i++) {

        atual = array[i];

        // Comparar o atual com o anterior e trocá-los 
        // A let j serve para percorrer o array nos casos em q meu atual
        // é o elemento menor comparativamente
        for (let j = i - 1; array[j] > atual && j >= 0; j--) {
            // Trocar a posição dos valores do array
            [array[j + 1], array[j]] = [array[j], atual];
        }

    }

    console.log(array);
}
