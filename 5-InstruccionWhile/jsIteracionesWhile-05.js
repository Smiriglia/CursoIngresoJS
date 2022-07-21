/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}
	txtIdSexo.value = sexoIngresado;
}