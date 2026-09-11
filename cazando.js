let canvas=document.getElementById ("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX=canvas.width
let gatoY=canvas.height
let comidaX=500-50
let comidaY=500-50

const ALTO_GATO=60
const ANCHO_GATO=40
const ALTO_COMIDA=50
const ANCHO_COMIDA=50

function graficarGato(){
    ctx.fillStyle="purple";
    ctx.fillRect((gatoX-ANCHO_GATO)/2,(gatoY-ALTO_GATO)/2,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}