var a = 0;
var b = 0.21;

var calcularTotal = 0;

a = parseInt(prompt("Digite su primer número"));


calcularTotal= total (a,b);

function total (nA, nB,){
const resultado = (nA*nB);

console.log ("El precio sin iva es "  + nA);
console.log ("El precio con iva es "  + ( resultado + nA));
console.log("Valor de iva", resultado)
}