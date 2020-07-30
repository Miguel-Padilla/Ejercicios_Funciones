var a =0;
var b =0;
var c =0;
var d =0;
var calcularPromedio =0;

a=parseInt(prompt("Digite un numero"));
b=parseInt(prompt("Digite un numero"));
c=parseInt(prompt("Digite un numero"));
d=parseInt(prompt("Digite un numero"));

calcularPromedio = promedio (a,b,c,d);

function promedio(nA,nB,nC,nD){
    const rersultado = (nA+nB+nC+nD)/4
    console.log("El resultado del promedio es:", rersultado);
}