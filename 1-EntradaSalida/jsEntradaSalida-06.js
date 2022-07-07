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
	
	//Toma el valor de la textbox, lo convierte de string a numero y lo asigna en una variable .
	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);

	//Sumamos los 2 valores obtenidos anteriormente.
	resultado = num1 + num2;

	//Imprime el resultado en pantalla
	alert(`La suma da como resultado: ${resultado}`);
}

