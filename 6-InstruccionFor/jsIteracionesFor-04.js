/*
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	let brake;

	brake = true;
	contador = 0;

	for(;;)
	{
		brake = prompt("Ingrese BREAK");
		if(brake == "BREAK")
		{
			break;
		}
	}

}