/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta= "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++;
		respuesta = prompt("Quiere seguir ingresando numeros: (si | no)");
	}


	txtIdSuma.value = acumulador;
	txtIdPromedio.value=acumulador / contador;

}//FIN DE LA FUNCIÓN