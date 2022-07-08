/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    /*
    Proposito:
        -mostrar la cantidad de alambre a comprar  si se ingresara el largo
         y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
    */
    let ancho;
    let largo;
    let perimetro;
    let alambreRequerido;
    let mensaje;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value)

    //perimetro = largo * 2 + ancho * 2;

    //perimetro = largo + largo + ancho + ancho;

    perimetro = 2*(largo + ancho);

    alambreRequerido = perimetro * 3;

    mensaje = "La cantidad de alambre requerido es de " + alambreRequerido.toFixed(2) + " Mts";
    
    alert(mensaje);
}
/*
    Entrada:
        -Largo
        -Ancho

    Proceso:
        -Calcular perimetro de un rectangulo
        -Multiplicar el alambre x3
    
    Salida:
        -Alert de el alambre requerido
*/
function Circulo () 
{
	
}
function Materiales () 
{
	
}