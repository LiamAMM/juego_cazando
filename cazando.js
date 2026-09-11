let canvas=document.getElementById ("areaJuego");
let ctx=canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle="purple";
    ctx.fillRect(0,(canvas.height-50)/2,canvas.width,50);
}