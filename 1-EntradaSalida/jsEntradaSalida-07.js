/*
	Smiriglia, Fausto DIV Z
	E/S Ejercicio 6
*/
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
	//Declara las variables
	let num1;
	let num2;
	let resultado;

	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	num1 = parseInt(txtIdNumeroUno.value)
	num2 = parseInt(txtIdNumeroDos.value);
	
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
	*/

	//Declara las variables
	let num1;
	let num2;
	let resultado;

	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	num1 = parseInt(txtIdNumeroUno.value)
	num2 = parseInt(txtIdNumeroDos.value);
	
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
	*/
	//Declara las variables
	let num1;
	let num2;
	let resultado;

	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	num1 = parseInt(txtIdNumeroUno.value)
	num2 = parseInt(txtIdNumeroDos.value);
	
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
	*/

	//Declara las variables
	let num1;
	let num2;
	let resultado;

	//Toma el valor de la textbox, lo convierte el valor de string a numero y lo asigna en una variable .
	num1 = parseInt(txtIdNumeroUno.value)
	num2 = parseInt(txtIdNumeroDos.value);
	
	//Dividimos los 2 valores obtenidos anteriormente.
	resultado = num1 / num2;

	//Imprime el resultado en pantalla
	alert(`La division da como resultado: ${resultado}`);
}

