function Sumar () 
{
    /*
    Proposito:
        -Ingresar tres precios de productos y mostrar la suma de los mismos.

    Precondicion:
        -Los valores ingresados en las textbox deben ser de tipo numero.
    */
    //Inicializa las variables tomando el valor ingresado en las textbox y lo convierte en float.
    let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //Inicializa la variable sumando los valores tomados anteriormente
    let resultado = precio1 + precio2 + precio3;

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

    Precondicion:
        -Los valores ingresados en las textbox deben ser de tipo numero.
    */
    //Inicializa las variables tomando el valor ingresado en las textbox y lo convierte en float.
    let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //Inicializa la variable sumando los valores tomados anteriormente
    let suma = precio1 + precio2 + precio3;

    //Inicializa la variable sacando un promedio de los valores dados.
    let resultado = suma / 3;

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
        
    Precondicion:
        -Los valores ingresados en las textbox deben ser de tipo numero.
    */
    //Inicializa las variables tomando el valor ingresado en las textbox y lo convierte en float.
    let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //Inicializa la variable sumando los valores tomados anteriormente
    let suma = precio1 + precio2 + precio3;

    //Inicializa la variable tomando como valor el 21% del valor de la suma dada
    let aumento = suma * 0.21;

    //Inicializa la variable sacando un promedio de los valores dados.
    let resultado = suma + aumento;

    //Limita los decimales que tendra el resultado
    resultado = resultado.toFixed(2);
    
    //Imprime el resultado en pantalla
    alert("El precio final es: $" + resultado);
	
}