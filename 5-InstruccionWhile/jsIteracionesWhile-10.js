/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadNegativos;
	let cantidadPositivos;
	let cantidadCeros;
	let cantidadPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;

		}
		else
		{
			if(numeroIngresado == 0)
			{
				cantidadCeros++;
			}
			else
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos++; 
			}
		}
		if(numeroIngresado % 2 == 0)
		{
			cantidadPares++;
		}
		respuesta = prompt("Quiere seguir ingresando numeros: (si | no)");
	}//fin del while
	if(cantidadPositivos != 0)
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}
	else
	{
		promedioPositivos = 0;//No hay
	}
	if(cantidadNegativos != 0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}
	else
	{
		promedioNegativos = 0;//No hay
	}

	diferencia = sumaPositivos - sumaNegativos;

	console.log("1 - Suma de los negativos: " + sumaNegativos);
	console.log("2 - Suma de los positivos: " + sumaPositivos);
	console.log("3 - Cantidad de positivos: " + cantidadPositivos);
	console.log("4 - Cantidad de negativos: " + cantidadNegativos);
	console.log("5 - Cantidad de ceros: " + cantidadCeros);
	console.log("6 - Cantidad de numeros pares: " + cantidadPares);
	console.log("7 - Promedio positivos: " + promedioPositivos.toFixed(2));
	console.log("8 - Promedio Negativos: " + promedioNegativos.toFixed(2));
	console.log("9 - Diferencia entre positivos y negativos: " + diferencia);
}//FIN DE LA FUNCIÓN