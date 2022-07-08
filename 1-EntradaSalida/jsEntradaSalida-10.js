/*
	Smiriglia, Fausto DIV Z
	E/S Ejercicio 10 bis
*/
function mostrarAumento()
{
	/*
	Proposito:
		-Debemos lograr tomar el importe por ID.
		Transformarlo a entero (parseInt), luego
		mostrar el importe con un Descuento del 25 %
		en el cuadro de texto "RESULTADO"
	*/
	//declara las variables
	let sueldo;
	let porcentajeIngresado;
	let descuento;
	let sueldoActualizado;

	//Asigna a una variable un dato ingresado por un prompt y lo convierte a float
	porcentajeIngresado = parseFloat(prompt("Ingrese el porcentaje de aumento:"));

	//Asigna la variable tomando el valor de la textbox y convirtiendolo en un float.
	sueldo = parseFloat(document.getElementById("txtIdImporte").value);

	//Asingna variable con el resultado que se obtiene calculando el porcentaje ingresado de la variable sueldo.
	descuento = sueldo * porcentajeIngresado / 100;

	//Asigna la variable con el valor que se obtiene restando el sueldo con el descuento.
	sueldoActualizado = sueldo - descuento;

	//Imprime en pantalla el descuento obtenido
	alert("Ud obtuvo un descuento de: $" + descuento);

	//Cambia el valor de la textbox *txtIdResultado* por el sueldo actualizado
	document.getElementById("txtIdResultado").value = sueldoActualizado;
}
