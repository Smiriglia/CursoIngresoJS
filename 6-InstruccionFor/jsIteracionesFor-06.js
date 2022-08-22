function mostrar()
{
	let nombreIngresado;
	let posicionIngresada;
	let nacionalidadIngresada
	let cantidadTarjetasRojasRecibidas;
	let golesIngresados;

	let goleadorTorneo;
	let golesDelGoleadorTorneo;
	let contador;
	let respuesta;

	let jugadorArgentinoConMenosRojas;
	let cantidadRojasArgentinoConMenosRojas;
	let flagJugadorArgentino;

	let contadorIngleses;
	let porcentajeIngleses;

	contador = 0;
	contadorIngleses = 0;
	flagJugadorArgentino = true;
	respuesta = true;

	while(respuesta)
	{
		nombreIngresado = prompt("Ingrese su nombre:");

		nacionalidadIngresada = prompt("Ingrese su nacionalidad")

		posicionIngresada = prompt("Ingrese su posicion:")
		while(posicionIngresada != "Arquero" && posicionIngresada != "Defensor" && posicionIngresada != "Mediocampista" && posicionIngresada != "Delantero")
		{
			posicionIngresada = prompt("Error. Reingrese su posicion:")
		}

		cantidadTarjetasRojasRecibidas = prompt("Ingrese la cantidad de tarjetas rojas recibidas:");
		cantidadTarjetasRojasRecibidas = parseInt(cantidadTarjetasRojasRecibidas);
		while(cantidadTarjetasRojasRecibidas < 1)
		{
			cantidadTarjetasRojasRecibidas = prompt("Error. Reingrese la cantidad de tarjetas rojas recibidas:");
			cantidadTarjetasRojasRecibidas = parseInt(cantidadTarjetasRojasRecibidas);
		}

		golesIngresados = prompt("Ingrese la cantidad de goles:");
		golesIngresados = parseInt(golesIngresados);
		while(golesIngresados < 1)
		{
			golesIngresados = prompt("Error. Reingrese la cantidad de goles:");
			golesIngresados = parseInt(golesIngresados);
		}

		if(golesIngresados > golesDelGoleadorTorneo || contador == 0)
		{
			goleadorTorneo = nombreIngresado;
			golesDelGoleadorTorneo = golesIngresados;
		}

		switch (nacionalidadIngresada)
		{
			case "Argentino":
				if(cantidadTarjetasRojasRecibidas < cantidadRojasArgentinoConMenosRojas || flagJugadorArgentino)
				{
					cantidadRojasArgentinoConMenosRojas = cantidadTarjetasRojasRecibidas;
					jugadorArgentinoConMenosRojas = nombreIngresado;
				}
				break;

			case "Ingles":
				contadorIngleses++;
				break;
		}

		contador++;
		respuesta = confirm("¿Quiere seguir ingresando?");
	}
	
	porcentajeIngleses = contadorIngleses / contador * 100;

	if(flagJugadorArgentino)
	{
		console.log("No has ingresado ningun jugador argentino");
	}
	else
	{
		console.log("El goleador del torneo es: " + goleadorTorneo);
	}
	console.log("El jugador Argentino con menos rojas recibidas es: " + jugadorArgentinoConMenosRojas);
	console.log("El porcentaje de jugadores Ingleses de la liga es de: " + porcentajeIngleses + "%");


}
/******************************************************************************
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar

-Nombre del jugador
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-nacionalidad
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben poder ingresar números negativos.



*******************************************************************************/
