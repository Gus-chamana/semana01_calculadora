let pantalla = document.getElementById('pantalla');
let operadorActual = '';
let primerNumero = '';

function agregarNumero(numero) {
    pantalla.value += numero;
}

function agregarOperador(operador) {
    if (pantalla.value === '') return; // Evitar operadores sin número
    primerNumero = pantalla.value;
    operadorActual = operador;
    pantalla.value = '';
}

function calcular() {
    if (pantalla.value === '' || primerNumero === '') return; // Evitar cálculos sin valores
    let segundoNumero = pantalla.value;
    let resultado;

    switch (operadorActual) {
        case '+':
            resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
            break;
        case '-':
            resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
            break;
        case '*':
            resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
            break;
        case '/':
            if (segundoNumero === '0') {
                pantalla.value = 'Error';
                return;
            }
            resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
            break;
        default:
            return;
    }
    
    pantalla.value = resultado;
    primerNumero = '';
    operadorActual = '';
}

function limpiarPantalla() {
    pantalla.value = '';
    primerNumero = '';
    operadorActual = '';
}
