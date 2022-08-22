/*Ejercicio 3

Un aficionado a las cartas coleccionables desea organizar su coleccion, para esto necesita 
ingresar en un programa:
nombre, tipo (validar monstruo, arma, magica, trampa), rareza validar (comun, rara, rarisima,
legendaria), precio (validar entre 250$ y 5000$) y cantidad del mismo tipo de carta (no menor a 1), 
dejar ingresar hasta que el usuario quiera e informar lo siguiente:
A) de los distintos tipos de cartas, la cantidad total de cada tipo
B) el nombre de la carta mas repetida de cada tipo
C) de las cartas rarisimas y legendarias, la que mas precio tiene y su nombre
D) el valor de la coleccion entera
E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras, 
25% rarisimas 25% legendarias)

*/
function mostrar()
{
	let nombre;
	let tipo;
	let rareza;
	let precio;
	let cantidad;
	let respuesta;

	let acumuladorMonstruo;
	let acumuladorArma;
	let acumuladorMagica;
	let acumuladorTrampa;

	let cartaMasRepetidaMonstruo;
	let cartaMasRepetidaArma;
	let cartaMasRepetidaMagica;
	let cartaMasRepetidaTrampa;
	
	let cantidadCartaMasRepetidaMonstruo;
	let cantidadCartaMasRepetidaArma;
	let cantidadCartaMasRepetidaMagica;
	let cantidadCartaMasRepetidaTrampa;

	let cartaMasCaraRarisima;
	let cartaMasCaraLegendria;
	let precioCartaMasCaraRarisima;
	let precioCartaMasCaraLegendaria;

	let acumuladorComun;
	let acumuladorRara;
	let acumuladorRarisima;
	let acumuladorLegendaria;

	let porcentajeComun;
	let porcentajeRara;
	let porcentajeRarisima;
	let porcentajeLegendaria;

	let acumuladorPrecioTotal;
	let acumuladorTotal;

	acumuladorTotal = 0;
	acumuladorMonstruo = 0;
	acumuladorArma = 0;
	acumuladorMagica = 0;
	acumuladorTrampa = 0;
	acumuladorComun= 0;
	acumuladorRara= 0;
	acumuladorRarisima= 0;
	acumuladorLegendaria= 0;
	respuesta = true;

	while(respuesta)
	{
		nombre = prompt("Ingrese el nombre:");

		tipo = prompt("Ingrese el tipo:");
		while(tipo != "monstruo" && tipo != "arma" && tipo != "magica" && tipo != "trampa")
		{
			tipo = prompt("Error. Reingrese el tipo");
		}

		rareza = prompt("Ingrese la rareza:");
		while(rareza != "comun" && rareza != "rara" && rareza != "rarisima" && rareza != "legendaria")
		{
			rareza = prompt("Error. Reingrese la rareza");
		}

		precio = prompt("Ingrese el precio:");
		precio = parseFloat(precio);
		while(precio < 250 || precio > 5000)
		{
			precio = prompt("Error. Reingrese el precio");
			precio = parseFloat(precio);
		}

		cantidad = prompt("Ingrese la cantidad:");
		cantidad = parseFloat(cantidad);
		while(cantidad < 1)
		{
			cantidad = prompt("Error. Reingrese la cantidad");
			cantidad = parseFloat(cantidad);
		}

		//A
		switch(tipo)
		{
			case "monstruo":
				if(cantidad > cantidadCartaMasRepetidaMonstruo || acumuladorMonstruo == 0)
				{
					cartaMasRepetidaMonstruo = nombre;
					cantidadCartaMasRepetidaMonstruo = cantidad
				}
				acumuladorMonstruo += cantidad;
				break;
				
			case "arma":
				if(cantidad > cantidadCartaMasRepetidaArma || acumuladorArma == 0)
				{
					cartaMasRepetidaArma = nombre;
					cantidadCartaMasRepetidaArma = cantidad
				}
				acumuladorArma += cantidad;
				break;

			case "magica":
				if(cantidad > cantidadCartaMasRepetidaMagica || acumuladorMagica == 0)
				{
					cartaMasRepetidaMagica = nombre;
					cantidadCartaMasRepetidaMagica = cantidad
				}
				acumuladorMagica += cantidad;
				break;

			default: //trampa
				if(cantidad > cantidadCartaMasRepetidaTrampa || acumuladorTrampa == 0)
				{
					cartaMasRepetidaTrampa = nombre;
					cantidadCartaMasRepetidaTrampa = cantidad
				}
				acumuladorTrampa += cantidad;
				break;
		}

		switch(rareza)
		{
			case "comun":
				acumuladorComun += cantidad;
				break;

			case "rara":
				acumuladorRara += cantidad;
				break;

			case "rarisima":
				if(precio > precioCartaMasCaraRarisima || acumuladorRarisima == 0)
				{
					cartaMasCaraRarisima = nombre;
					precioCartaMasCaraRarisima = precio;
				}
				acumuladorRarisima += cantidad;
				break;

			case "legendaria":
				if(precio > precioCartaMasCaraLegendaria || acumuladorLegendaria == 0)
				{
					cartaMasCaraLegendaria = nombre;
					precioCartaMasCaraLegendaria = precio;
				}
				acumuladorLegendaria += cantidad;
				break;
		}

		

		acumuladorPrecioTotal += cantidad * precio;
		acumuladorTotal += cantidad;
		respuesta = confirm("¿Quiere seguir ingresando?");
	} 

	porcentajeComun = acumuladorComun / acumuladorTotal * 100;
	porcentajeRara = acumuladorRara / acumuladorTotal * 100;
	porcentajeRarisima = acumuladorRarisima / acumuladorTotal * 100;
	porcentajeLegendaria = acumuladorLegendaria / acumuladorTotal * 100;

	console.log("la cantidad de cartas de tipo monstruo es de: " + acumuladorMonstruo);
	console.log("la cantidad de cartas de tipo arma es de: " + acumuladorArma);
	console.log("la cantidad de cartas de tipo magica es de: " + acumuladorMagica);
	console.log("la cantidad de cartas de tipo trampa es de: " + acumuladorTrampa);

	console.log("la carta mas repetida de tipo monstruo es de: " + cartaMasRepetidaMonstruo);
	console.log("la carta mas repetida de tipo arma es de: " + cantidadCartaMasRepetidaArma);
	console.log("la carta mas repetida de tipo magica es de: " + cantidadCartaMasRepetidaMagica);
	console.log("la carta mas repetida de tipo trampa es de: " + cantidadCartaMasRepetidaTrampa);

	if(acumuladorRarisima != 0)
	{
		console.log("la carta mas cara de rareza rarisima es de: " + cartaMasCaraRarisima);
	}
	else
	{
		console.log("no se han ingresado cartas rarisimas");
	}
	if(acumuladorLegendaria != 0)
	{
		console.log("la carta mas cara de rareza legendaria es de: " + cartaMasCaraLegendria);
	}
	else
	{
		console.log("no se han ingresado cartas legendarias")
	}
	
	

	console.log("el valor de la coleccion entera es de: " + acumuladorTotal);

	console.log("el porcentaje de la carta de rareza comun es de: " + porcentajeComun);
	console.log("el porcentaje de la carta de rareza rara es de: " + porcentajeRara);
	console.log("el porcentaje de la carta de rareza rarisima es de: " + porcentajeRarisima);
	console.log("el porcentaje de la carta de rareza legendaria es de: " + porcentajeLegendaria);
}
/*Ejercicio 3

Un aficionado a las cartas coleccionables desea organizar su coleccion, para esto necesita 
ingresar en un programa:
nombre, tipo (validar monstruo, arma, magica, trampa), rareza validar (comun, rara, rarisima,
legendaria), precio (validar entre 250$ y 5000$) y cantidad del mismo tipo de carta (no menor a 1), 
dejar ingresar hasta que el usuario quiera e informar lo siguiente:
A) de los distintos tipos de cartas, la cantidad total de cada tipo
B) el nombre de la carta mas repetida de cada tipo
C) de las cartas rarisimas y legendarias, la que mas precio tiene y su nombre
D) el valor de la coleccion entera
E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras, 
25% rarisimas 25% legendarias)

*/
