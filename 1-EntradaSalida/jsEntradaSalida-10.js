/*
	Smiriglia, Fausto DIV Z
	E/S Ejercicio 9
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
	let descuento;
	let sueldoActualizado;

	//Asigna la variable tomando el valor de la textbox y convirtiendolo en un float.
	sueldo = parseFloat(document.getElementById("txtIdImporte").value);

	//Asingna variable con el resultado que se obtiene calculando el 25% de la variable sueldo.
	descuento = sueldo * 25 / 100;

	//Asigna la variable con el valor que se obtiene restando el sueldo con el descuento.
	sueldoActualizado = sueldo - descuento;

	//Cambia el valor de la textbox *txtIdResultado* por el sueldo actualizado
	document.getElementById("txtIdResultado").value = sueldoActualizado;
}
