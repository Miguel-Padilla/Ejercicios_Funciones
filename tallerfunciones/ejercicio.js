var a = 0;
var b = 0;
var calcularMultiplicacion = 0;

a =parseInt(prompt("Digita un numero a"));
b =parseInt(prompt("Digita un numero b"));

calcularMultiplicacion = multiplicacion(a,b);

function multiplicacion(nA, nB){
    const resultado = nA + nB;
    console.log ("El resultado de la multiplicacion es:" + resultado)

}