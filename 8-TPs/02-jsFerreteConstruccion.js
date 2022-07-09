/*
	Smiriglia, Fausto DIV Z
	TPs - Trabajo practico numero 2
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

    perimetro = 2*(largo + ancho);
    alambreRequerido = perimetro * 3;

    mensaje = `Se requieren: ${alambreRequerido.toFixed(2)} metros de alambre`;
    
    alert(mensaje);
}
function Circulo () 
{
    /*
    Proposito:
        -mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un 
         terreno circular y se debe alambra con tres hilos de alambre.
    */
	let radioIngresado;
    let perimetro;
    let alambreRequerido;
    let mensaje;

    radioIngresado = document.getElementById("txtIdRadio").value;
    radioIngresado = parseFloat(radioIngresado);

    perimetro = 2 * Math.PI * radioIngresado;
    alambreRequerido = perimetro * 3;

    mensaje = `Se requieren: ${alambreRequerido.toFixed(2)} metros de alambre`;
    alert(mensaje)
}
function Materiales () 
{
    
    /*
    Proposito:
        -Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3
         de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las 
         medidas que nos ingresen.
    */
    let largoIngresado;
	let anchoIngresado;
    let area;
    let cementoRequerido;
    let calRequerida;
    let mensaje;

    largoIngresado = document.getElementById("txtIdLargo").value;
    anchoIngresado = document.getElementById("txtIdAncho").value;

    largoIngresado = parseFloat(largoIngresado);
    anchoIngresado = parseFloat(anchoIngresado);

    area = anchoIngresado * largoIngresado;
    
    cementoRequerido = 3 * area;
    calRequerida = 2 * area;

    mensaje = `Se requieren ${cementoRequerido.toFixed(2)} bolsas de cemento`;
    mensaje = mensaje + `y ${calRequerida.toFixed(2)} bolsas de cal`;
    
    alert(mensaje);
}