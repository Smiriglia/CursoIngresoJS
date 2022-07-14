function mostrar()
{
	/*
	Proposito:
		-Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
		 "EXCELENTE" para notas igual a 9 o 10,
		 "APROBÓ" para notas mayores a 4,
		 "Vamos, la proxima se puede" para notas menores a 4
	*/

	let notaGenerada;
	notaGenerada = Math.floor(Math.random() * 10) + 1;

	if(notaGenerada > 8)
	{
		alert("EXCELENTE");
	}
	else if(notaGenerada >= 4)
	{
		alert("Aprobo");
	}
	else
	{
		alert("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN