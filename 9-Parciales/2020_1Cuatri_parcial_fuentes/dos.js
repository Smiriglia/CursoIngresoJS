function mostrar()
{
  let nombreIngresado;
  let edadIngresada;
  let cantidadVotosIngresados;
  let contador;

  let candidatoConMenosVotos;
  let cantidadVotosCandidatoMin;

  let candidatoConMasVotos;
  let cantidadVotosCandidatoMax;

  let acumuladorEdad;
  let promedioEdad;

  acumuladorEdad = 0 
  contador = 0;
  while(contador < 3)
  {
    nombreIngresado = prompt("Ingrese el nombre:")

    edadIngresada = prompt("Ingrese la edad:");
    edadIngresada = parseInt(edadIngresada);
    while(edadIngresada < 1)
    {
      edadIngresada = prompt("Error. Reingrese la edad:");
      edadIngresada = parseInt(edadIngresada);
    }

    cantidadVotosIngresados = prompt("Ingrese la cantidad de votos:");
    cantidadVotosIngresados = parseInt(cantidadVotosIngresados);
    while(cantidadVotosIngresados < 1)
    {
      cantidadVotosIngresados = prompt("Error. Reingrese la cantidad de votos:");
      cantidadVotosIngresados = parseInt(cantidadVotosIngresados);
    }
    if(cantidadVotosIngresados < cantidadVotosCandidatoMin || contador == 0)
    {
      candidatoConMenosVotos = nombreIngresado;
      cantidadVotosCandidatoMin = cantidadVotosIngresados;
    }
    if(cantidadVotosIngresados >cantidadVotosCandidatoMax || contador == 0)
    {
      candidatoConMasVotos = nombreIngresado;
      cantidadVotosCandidatoMax = cantidadVotosIngresados;
    }

    acumuladorEdad += edadIngresada;

    contador++;
  }
  promedioEdad = acumuladorEdad / contador;

  console.log("el candidato con mas votos es : " + candidatoConMasVotos);
  console.log("el candidato con menos votos es: " + candidatoConMenosVotos);
  console.log("el promedio de edades de los candidatos es de: " + promedioEdad.toFixed(2));
}
/*
Ejercicio 1

Ingresar el nombre de los 5 candidatos a presidente de CusCús,  
la edad de cada uno y la cantidad de votos (no menor a cero)  que sacó en las elecciones.
Informar: 
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.
*/

