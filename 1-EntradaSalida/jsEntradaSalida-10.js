
function mostrarAumento()
{
	/*
	Proposito:
		-Debemos lograr tomar el importe por ID.
		Transformarlo a entero (parseInt), luego
		mostrar el importe con un Descuento del 25 %
		en el cuadro de texto "RESULTADO"

	Precondicion:
		-El valor ingresado en la textbox debe ser de tipo numero.
	*/

	//Inicializa la variable tomando el valor de la textbox y convirtiendolo en un float.
	let sueldo = parseFloat(document.getElementById("txtIdImporte").value);

	//Inicializa la variable calculando el 25% de la variable sueldo.
	let descuento = sueldo * 0.25;

	//Inicializa la variable restando el sueldo con el descuento.
	let sueldoActualizado = sueldo - descuento;

	//Cambia el valor de la textbox *txtIdResultado* por el sueldo actualizado
	document.getElementById("txtIdResultado").value = sueldoActualizado;
}
