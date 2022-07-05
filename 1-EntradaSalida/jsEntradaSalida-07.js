function sumar()
{	
	/*
	Proposito:
		-Debemos lograr tomar Los numeros por ID ,
		transformarlos a enteros (parseInt) y Sumarlos.
		mostrar el resulto por medio de "ALERT".
	
	Precondicion:
		-El valor ingresado en txtIdNumeroUno y txtIdNumeroDos deben
		ser numeros enteros.
	*/

	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	let num1 = parseInt(txtIdNumeroUno.value);
	let num2 = parseInt(txtIdNumeroDos.value);
	let resultado;

	//Sumamos los 2 valores obtenidos anteriormente.
	resultado = num1 + num2;

	//Imprime el resultado en pantalla
	alert(`La suma da como resultado: ${resultado}`);
}

function restar()
{
	/*
	Proposito:
		-Debemos lograr tomar Los numeros por ID ,
		transformarlos a enteros (parseInt) y Restarlos.
		mostrar el resulto por medio de "ALERT".
	
	Precondicion:
		-El valor ingresado en txtIdNumeroUno y txtIdNumeroDos deben
		ser numeros enteros.
	*/
	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	let num1 = parseInt(txtIdNumeroUno.value);
	let num2 = parseInt(txtIdNumeroDos.value);
	let resultado;

	//Restamos los 2 valores obtenidos anteriormente.
	resultado = num1 - num2;

	//Imprime el resultado en pantalla
	alert(`La resta da como resultado: ${resultado}`);
	
}

function multiplicar()
{
	/*
	Proposito:
		-Debemos lograr tomar Los numeros por ID ,
		transformarlos a enteros (parseInt) y Multiplicarlos.
		mostrar el resulto por medio de "ALERT".
	
	Precondicion:
		-El valor ingresado en txtIdNumeroUno y txtIdNumeroDos deben
		ser numeros enteros.
	*/
	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	let num1 = parseInt(txtIdNumeroUno.value);
	let num2 = parseInt(txtIdNumeroDos.value);
	let resultado;

	//multiplicamos los 2 valores obtenidos anteriormente.
	resultado = num1 * num2;

	//Imprime el resultado en pantalla
	alert(`El producto es: ${resultado}`);
}

function dividir()
{
	/*
	Proposito:
		-Debemos lograr tomar Los numeros por ID ,
		transformarlos a enteros (parseInt) y Dividirlos.
		mostrar el resulto por medio de "ALERT".
	
	Precondiciones:
		-El valor ingresado en txtIdNumeroUno y txtIdNumeroDos deben
		ser numeros enteros.

		-El valor ingresado en txtIdNumeroDos Debe ser distinto de cero.
	*/
	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	let num1 = parseInt(txtIdNumeroUno.value);
	let num2 = parseInt(txtIdNumeroDos.value);
	let resultado;

	//Dividimos los 2 valores obtenidos anteriormente.
	resultado = num1 / num2;

	//Imprime el resultado en pantalla
	alert(`La division da como resultado: ${resultado}`);
}

