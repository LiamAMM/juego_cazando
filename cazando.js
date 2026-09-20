let canvas=document.getElementById ("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX=canvas.width;
let gatoY=canvas.height;
let comidaX=500-50;
let comidaY=500-50;
let puntaje=0;
let tiempo=10;
let idInterval;

const ALTO_GATO=60;
const ANCHO_GATO=40;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    graficarRectangulo((gatoX - ANCHO_GATO) / 2, (gatoY - ALTO_GATO) / 2, ANCHO_GATO, ALTO_GATO, "purple");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
    alazarComida();
    idInterval = setInterval(restarTiempo, 1000);
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    if (tiempo > 0) {
        if (puntaje < 6) {
            gatoX = gatoX - 10;
            limpiarCanva();
            graficarGato();
            graficarComida();
            detectarColision();
        }
    }
}

function moverDerecha() {
    if (tiempo > 0) {
        if (puntaje < 6) {
            gatoX = gatoX + 10;
            limpiarCanva();
            graficarGato();
            graficarComida();
            detectarColision();
        }
    }
}

function moverArriba() {
    if (tiempo > 0) {
        if (puntaje < 6) {
            gatoY = gatoY - 10;
            limpiarCanva();
            graficarGato();
            graficarComida();
            detectarColision();
        }
    }
}

function moverAbajo() {
    if (tiempo > 0) {
        if (puntaje < 6) {
            gatoY = gatoY + 10;
            limpiarCanva();
            graficarGato();
            graficarComida();
            detectarColision();
        }
    }
}

function detectarColision() {
    let posicionGatoX = (gatoX - ANCHO_GATO) / 2;
    let posicionGatoY = (gatoY - ALTO_GATO) / 2;
    if (posicionGatoX < comidaX + ANCHO_COMIDA &&
        posicionGatoX + ANCHO_GATO > comidaX &&
        posicionGatoY < comidaY + ALTO_COMIDA &&
        posicionGatoY + ALTO_GATO > comidaY) {   
        alert("¡Atrapaste la comida!");
        alazarComida();
        puntaje = puntaje + 1;
        mostrarEnSpan("puntos", puntaje);
        if (puntaje == 6) {
            alert("¡Ganaste!");
            clearInterval(idInterval);
        }   
    }
}

function alazarComida() {
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);
    if (tiempo == 0) {
        alert("Game Over");
        clearInterval(idInterval);
    }
}

function reiniciarJuego() {
    clearInterval(idInterval);
    tiempo = 10;
    puntaje = 0;
    gatoX = canvas.width;
    gatoY = canvas.height;
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("puntos", puntaje);
    limpiarCanva();
    iniciarJuego();

}