/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables

	numeroIngresado = prompt("Ingrese un numero:");
	numeroIngresado = parseInt(numeroIngresado);

	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;

	respuesta = prompt("Quiere seguir ingresando numeros: (si | no)");

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}

		if (numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("Quiere seguir ingresando numeros: (si | no)");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}