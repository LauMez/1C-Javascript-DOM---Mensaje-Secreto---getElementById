// Función para decodificar el mensaje
function decodeMessage(encodedMessage) {
    let stack = [];
    let result = '';

    // Procesar el mensaje caracter por caracter
    for (let i = 0; i < encodedMessage.length; i++) {
        let char = encodedMessage[i];

        if (char === '(') {
            // Iniciar un nuevo segmento invertido
            stack.push('');
        } else if (char === ')') {
            // Finalizar un segmento invertido y procesarlo
            if (stack.length > 0) {
                let segment = stack.pop();
                // Invertir el segmento y agregarlo al último nivel de la pila
                segment = segment.split('').reverse().join('');

                if (stack.length > 0) {
                    // Añadir el segmento invertido al nivel superior de la pila
                    stack[stack.length - 1] += segment;
                } else {
                    // Si la pila está vacía, añadir el segmento al resultado
                    result += segment;
                }
            }
        } else {
            // Añadir el caracter al último nivel de la pila o al resultado si la pila está vacía
            if (stack.length > 0) {
                stack[stack.length - 1] += char;
            } else {
                result += char;
            }
        }
    }

    return result;
}

// Función para iniciar la decodificación
const decodeButton = document.getElementById('decodeButton');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

decodeButton.addEventListener('click', function () {
    const encodedMessage = inputText.value.trim();
    const decodedMessage = decodeMessage(encodedMessage);
    outputText.value = decodedMessage;
});