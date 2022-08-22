/******************************************************************************
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital Universitario Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas en la próxima hora, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”, “conejo”, “mapache”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



*******************************************************************************/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let tipoIngresado;
	let pesoIngresado;
	let diagnosticoIngresado;
	let vacunaAntiRabica;
	let respuesta;

	let nombreMascotaMasViejaConVacuna;
	let edadMascotaMasViejaConVacuna;
	let flagMascotaConVacuna;

	let contadorMascotasSinVacunaConParasitos;

	let contadorGatosConProblemasDigestivos;
	let contadorPerrosConProblemasDigestivos;
	let contadorHamstersConProblemasDigestivos;
	let contadorConejosConProblemasDigestivos;
	let contadorMapachesConProblemasDigestivos;
	let tipoConMasProblemasDigestivos;

	let nombreMascotaMasJoven;
	let diagnosticoMascotaMasJoven;
	let edadMascotaMasJoven;
	let flagPrimerMascota;

	let contadorPerrosConOtitis;

	contadorPerrosConOtitis = 0;
	contadorGatosConProblemasDigestivos = 0;
	contadorPerrosConProblemasDigestivos = 0;
	contadorHamstersConProblemasDigestivos = 0;
	contadorConejosConProblemasDigestivos = 0;
	contadorMapachesConProblemasDigestivos = 0;
	contadorMascotasSinVacunaConParasitos = 0;
	flagMascotaConVacuna = true;
	flagPrimerMascota = true;
	
	respuesta = true;

	while(respuesta)
	{
		nombreIngresado = prompt("Ingrese el nombre");

		
		tipoIngresado = prompt("Ingrese el tipo:")
		while(tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "hamster" && tipoIngresado != "conejo" && tipoIngresado != "mapache")
		{
			tipoIngresado = prompt("Error. Reingrese el tipo:")
		}
		
		edadIngresada = prompt("Ingrese la edad:");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 1 || edadIngresada > 20)
		{
			edadIngresada = prompt("Error. Reingrese la edad:");
			edadIngresada = parseInt(edadIngresada);
		}

		pesoIngresado = prompt("Ingrese el peso:");
		pesoIngresado = parseInt(pesoIngresado);
		while(pesoIngresado < 1)
		{
			pesoIngresado = prompt("Error. Reingrese el peso:");
			pesoIngresado = parseInt(pesoIngresado);
		}

		diagnosticoIngresado = prompt("Ingrese el diagnostico:")
		while(diagnosticoIngresado != "problemas digestivos" && diagnosticoIngresado != "otitis" && diagnosticoIngresado != "alergias en la piel" && diagnosticoIngresado != "parasitos" && diagnosticoIngresado != "picazon de abeja")
		{
			diagnosticoIngresado = prompt("Error. Reingrese el diagnostico:")
		}

		vacunaAntiRabica = confirm("¿Tiene la vacuna antirrabica?");

		if((vacunaAntiRabica && edadIngresada > edadMascotaMasViejaConVacuna) || flagMascotaConVacuna)
		{
			nombreMascotaMasViejaConVacuna = nombreIngresado; 
			edadMascotaMasViejaConVacuna = edadIngresada;
			flagMascotaConVacuna = false;
		}

		if(!(vacunaAntiRabica) && diagnosticoIngresado == "parasitos")
		{
			contadorMascotasSinVacunaConParasitos++;
		}

		if(diagnosticoIngresado == "problemas digestivos")
		{
			switch(tipoIngresado)
			{
			case "gato":
				contadorGatosConProblemasDigestivos++;
				break;

			case "perro":
				contadorPerrosConProblemasDigestivos++;
				break;

			case "hamster":
				contadorHamstersConProblemasDigestivos++;
				break;

			case "conejo":
				contadorConejosConProblemasDigestivos++;
				break;
			
			case "mapache":
				contadorMapachesConProblemasDigestivos++;
				break;
			}
		}
		
		if(edadIngresada < edadMascotaMasJoven ||flagPrimerMascota)
		{
			nombreMascotaMasJoven = nombreIngresado;
	 		diagnosticoMascotaMasJoven = diagnosticoIngresado;
		 	edadMascotaMasJoven = edadIngresada;
	 		flagPrimerMascota = false;
		}
		if(tipoIngresado == "perro" && diagnosticoIngresado == "otitis")
		{
			contadorPerrosConOtitis++;
		}



		respuesta = confirm("¿Quiere seguir ingresando?")
	}

	//Tipo: (Validar “gato”, “perro”, “hamster”, “conejo”, “mapache”)

	if(contadorGatosConProblemasDigestivos > contadorPerrosConProblemasDigestivos && contadorGatosConProblemasDigestivos > contadorHamstersConProblemasDigestivos && contadorGatosConProblemasDigestivos > contadorConejosConProblemasDigestivos && contadorGatosConProblemasDigestivos > contadorMapachesConProblemasDigestivos)
	{
		tipoConMasProblemasDigestivos = "gato";
	}
	else
	{
		if(contadorPerrosConProblemasDigestivos > contadorHamstersConProblemasDigestivos && contadorPerrosConProblemasDigestivos > contadorConejosConProblemasDigestivos && contadorPerrosConProblemasDigestivos > contadorMapachesConProblemasDigestivos)
		{
			tipoConMasProblemasDigestivos = "perro"
		}
		else
		{
			if(contadorHamstersConProblemasDigestivos > contadorConejosConProblemasDigestivos && contadorHamstersConProblemasDigestivos > contadorConejosConProblemasDigestivos && contadorHamstersConProblemasDigestivos > contadorMapachesConProblemasDigestivos)
			{
				tipoConMasProblemasDigestivos = "hamster"
			}
			else
			{
				if(contadorConejosConProblemasDigestivos > contadorMapachesConProblemasDigestivos)
				{
					tipoConMasProblemasDigestivos = "conejo";
				}
				else
				{
					tipoConMasProblemasDigestivos = "mapache";
				}
			}
		}
	}

	if(flagMascotaConVacuna)
	{
		console.log("No se ha ingresado ninguna mascota con vacuna antirrábica");
	}
	else
	{
		console.log("el nombre de la mascota más vieja con la vacuna antirrábica es: " + nombreMascotaMasViejaConVacuna);
	}
	console.log("la cantidad de mascotas sin vacuna antirrábica y con parásitos es de: " + contadorMascotasSinVacunaConParasitos);
	console.log("El tipo de mascota con más ingresos por problemas digestivos es: " + tipoConMasProblemasDigestivos);

	console.log("El nombre de la mascota mas joven ingresada es: " + nombreMascotaMasJoven);
	console.log("La edad de la mascota mas joven ingresada es: " + edadIngresada);
	console.log("El diagnostico de la mascota mas joven ingresada es: " + diagnosticoMascotaMasJoven);




}
/******************************************************************************
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital Universitario Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas en la próxima hora, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”, “conejo”, “mapache”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



*******************************************************************************/