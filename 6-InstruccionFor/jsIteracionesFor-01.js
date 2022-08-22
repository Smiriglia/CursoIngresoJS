/*
Ejercicio 1

Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.

*/

function mostrar()
{
	let i;
	let nombre;
	let edad;
	let peso;
	let altura;

	let pesoJugadorMasAlto;
	let alturaJugadorMasAlto;

	let nombreJugadorMasJoven;
	let edadJugadorMasJoven;

	let acumuladorAltura;
	let promedioAltura;

	let acumuladorPeso;
	let promedioPeso;

	let contadorJugadoresS;

	acumuladorAltura = 0;
	acumuladorPeso = 0;
	contadorJugadoresS = 0;

	for(i = 0; i < 11; i++)
	{
		nombre = prompt("Ingrese el nombre del jugador:");

		edad = prompt("Ingrese la edad:");
		edad = parseInt(edad);
		while(edad < 0)
		{
			edad = prompt("Error. Reingrese la edad:");
			edad = parseInt(edad);
		}

		peso = prompt("Ingrese el peso:");
		peso = parseFloat(peso);
		while(peso < 0)
		{
			peso = prompt("Error. Reingrese el peso:");
			peso = parseFloat(peso);
		}

		altura = prompt("Ingrese la altura:");
		altura = parseFloat(altura);
		while(altura < 0)
		{
			altura = prompt("Error. Reingrese la altura:");
			altura = parseFloat(altura);
		}

		if(edad < edadJugadorMasJoven || i == 0)
		{
			nombreJugadorMasJoven = nombre;
			edadJugadorMasJoven = edad
		}

		if(altura > alturaJugadorMasAlto || i == 0)
		{
			pesoJugadorMasAlto = peso;
			alturaJugadorMasAlto = altura;
		}

		if(altura > 1.7 && peso > 85)
		{
			contadorJugadoresS++;
		}

		acumuladorAltura += altura;
		acumuladorPeso += peso;

	}

	promedioAltura = acumuladorAltura / i;
	promedioPeso = acumuladorPeso / i;

}