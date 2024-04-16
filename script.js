function decodificarMensaje(mensajeCodificado) {
    let stack = [];
    let resultado = '';

    for (let i = 0; i < mensajeCodificado.length; i++) {
        let char = mensajeCodificado[i];

        if (char === '(') {
            stack.push('');
        } else if (char === ')') {
            if (stack.length > 0) {
                let segmento = stack.pop();
                segmento = segmento.split('').reverse().join('');

                if (stack.length > 0) {
                    stack[stack.length - 1] += segmento;
                } else {
                    resultado += segmento;
                }
            }
        } else {
            if (stack.length > 0) {
                stack[stack.length - 1] += char;
            } else {
                resultado += char;
            }
        }
    }

    return resultado;
}

const boton = document.getElementById('boton');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

boton.addEventListener('click', function () {
    const mensajeCodificado = inputText.value.trim();
    const mensajeDecodificado = decodificarMensaje(mensajeCodificado);
    outputText.value = mensajeDecodificado;
});
