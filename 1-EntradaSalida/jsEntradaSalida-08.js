function SacarResto()
{
	/*
	Poposito:
	 
		-Debemos lograr tomar Los numeros por ID ,
		transformarlos a enteros (parseInt),realizar la operación correcta y 
		mostrar el resto entre el dividendo y el divisor.
		ej.: "El resto es 0 ."
	Precondiciones:
		-El valor ingresado en txtIdNumeroUno y txtIdNumeroDos deben
		ser numeros enteros.

		-El valor ingresado en txtIdNumeroDos Debe ser distinto de cero.
	*/

	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	let dividendo = parseInt(txtIdNumeroDividendo.value);
	let divisor = parseInt(txtIdNumeroDivisor.value);
	let resultado;

	//Sacamos el resto 2 valores obtenidos anteriormente.
	resultado = dividendo % divisor;

	//Imprime el resultado en pantalla
	alert(`La division da como resultado: ${resultado}`);
}