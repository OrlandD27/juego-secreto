
let numeroAleatorio = 0;

let intentos = 0;

let veces = 'vez'

numeroRandom();
console.log(numeroAleatorio);

function cambiarTexto(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function numeroRandom() {
    return Math.floor(Math.random()*10)+1;
}

cambiarTexto('h1', 'Juega el juego moderno');
cambiarTexto('p', 'Elije un numero del 1 al 10');

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroAleatorio) {
        cambiarTexto('p', `FELICITACIONES GANASTES EN ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario >= numeroAleatorio) {
            cambiarTexto('p', 'El numero es menor');
        } else {
            cambiarTexto('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {

    limpiarCaja();
    elementosIniciales();
    console.log(numeroAleatorio);
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

function elementosIniciales() {
    
    cambiarTexto('h1', 'Juega el juego moderno');
    cambiarTexto('p', 'Elije un numero del 1 al 10');

    numeroAleatorio = numeroRandom();
    intentos = 1;
    
}

elementosIniciales();
console.log(numeroAleatorio);






