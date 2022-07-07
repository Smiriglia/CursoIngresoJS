/*
	Smiriglia, Fausto DIV Z
	E/S Ejercicio 8
*/
function SacarResto()
{
	/*
	Poposito:
	 
		-Debemos lograr tomar Los numeros por ID ,
		transformarlos a enteros (parseInt),realizar la operación correcta y 
		mostrar el resto entre el dividendo y el divisor.
		ej.: "El resto es 0 ."
	Precondiciones:
		-El valor ingresado en txtIdNumeroDividendo y txtIdNumeroDivisor deben
		ser numeros enteros.

		-El valor ingresado en txtIdNumeroDivisor Debe ser distinto de cero.
	*/

	//Declara las variables
	let dividendo;
	let divisor;
	let resultado;

	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	dividendo = parseInt(txtIdNumeroDividendo.value)
	divisor = parseInt(txtIdNumeroDivisor.value);
	
	//Sacamos el resto 2 valores obtenidos anteriormente.
	resultado = dividendo % divisor;

	//Imprime el resultado en pantalla
	alert(`La division da como resultado: ${resultado}`);
}