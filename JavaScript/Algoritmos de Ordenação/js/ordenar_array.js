// Ordenação Bubble Sort
export function bubbleSort(array) {

    // Mostrar o array antes da ordenação
    console.log(array);

    let swap;
    // Caso a lista ja esteja ordenada o algoritmo não precisará continuar a verificar se está ordenada 
    // igual a um bubbleSort comum, até o termino de um for, como exemplo
    do {

        swap = false;
        for (let i = 0; i < array.length - 1; i++) {

            if (array[i] > array[i+1]) {

                [array[i], array[i+1]] = [array[i+1], array[i]];
                swap = true;
            }

            console.log(array);
        }
    } while (swap)
}

// Ordenação
