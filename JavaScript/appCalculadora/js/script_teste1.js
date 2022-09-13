function calcular(tipo, valor) {
    // acao (c, /, *, -, +, =)
    // numero (0 a 9)
    if (tipo === 'acao') {
        // Action
        if (valor === 'c') {
            // Clear
            document.querySelector('#resultado').value = ''
        }
        else if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
            // Divide, Multplication, Subtraction, Addition, Dot
            document.querySelector('#resultado').value += valor
            console.log(document.querySelector('#resultado').value)
        }
        else if (valor === '=') {
            // Result
            document.querySelector('#resultado').value = eval(document.querySelector('#resultado').value)
            console.log(document.querySelector('#resultado').value)
        }
    }
    else if (tipo === 'numero') {
        // Number  
        document.querySelector('#resultado').value += valor
        console.log(document.querySelector('#resultado').value)
    }

} 