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

