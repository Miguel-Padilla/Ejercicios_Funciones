var tipoBox=0;
var tipoCaja=1;
const padding = 10;
const width = 300;
const border=10;

var calcularCaja=0;
tipo=perseInt(prompt("Ingrese el tipo de caja a dibujar // 0 = Borde 1 = content"));
calcularCaja= caja(tipo, padding, width, border);

function caja (tipoCaja,p, w, b){
    if (tipoCaja === 0){
        console.log("el ancho del contenido es: ${w} pixeles");
    }else if (tipoCaja === 1){
        console.log("el ancho del contenido es ${p+w+b} pixeles");

    }else{
        console.log("error")
    }
}