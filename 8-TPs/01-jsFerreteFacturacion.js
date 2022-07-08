/*
	Smiriglia, Fausto DIV Z
	TPs - Trabajo practico numero 1
*/
function Sumar () 
{
    /*
    Proposito:
        -Ingresar tres precios de productos y mostrar la suma de los mismos.
    */
    //Declara las variables
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    //Le asigna a las variables el valor ingresado en las textbox y lo convierte en float.
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //Inicializa la variable sumando los valores tomados anteriormente
    resultado = precio1 + precio2 + precio3;

    //Limita los decimales que tendra el resultado
    resultado = resultado.toFixed(2);

    //Imprime el resultado en pantalla
    alert("La suma de los precios dados es de: $" + resultado);

}
function Promedio () 
{
    /*
    Proposito:
        -Ingresar tres precios de productos y mostrar el promedio de los mismos.
    */
    //Declara las variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let resultado;

    //Le asigna a las variables el valor ingresado en las textbox y lo convierte en float.
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //Se asigna la variable sumando los valores tomados anteriormente
    suma = precio1 + precio2 + precio3;

    //Se asigna la variable con el resultado de un promedio entre los valores dados.
    resultado = suma / 3;

    //Limita los decimales que tendra el resultado
    resultado = resultado.toFixed(2);

    //Imprime el resultado en pantalla
    alert("El promedio de los precios dados es de: $" + resultado);
	
}
function PrecioFinal () 
{
    /*
    Proposito:
        ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
    */
    //Declara las variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let resultado;

    //Le asigna a las variables el valor ingresado en las textbox y lo convierte en float.
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //Se Asigna la variable sumando los valores tomados anteriormente
    suma = precio1 + precio2 + precio3;

    //Se asigna la variable tomando como valor el 21% del valor de la suma dada
    aumento = suma * 0.21;

    //Se asigna la variable sacando un promedio de los valores dados.
    resultado = suma + aumento;

    //Limita los decimales que tendra el resultado
    resultado = resultado.toFixed(2);
    
    //Imprime el resultado en pantalla
    alert("El precio final es: $" + resultado);
	
}