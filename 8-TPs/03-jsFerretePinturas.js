/*
	Smiriglia, Fausto DIV Z
	TPs - Trabajo practico numero 3
*/
function FahrenheitCentigrados () 
{
    /*
    Proposito:
        -Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura
         en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
    */
    let temperaturaFahrenheit;
    let temperaturaCentigrados;
    let mensaje;

    temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;
    temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

    temperaturaCentigrados = (temperaturaFahrenheit - 32) / 1.8;

    mensaje = `${temperaturaFahrenheit.toFixed(1)} Fahrenheit`;
    mensaje = mensaje + `son ${temperaturaCentigrados.toFixed(1)} Centigrados`;

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
    /*
    Proposito:
        -Al ingresar una temperatura en Centígrados debemos mostrar la temperatura
         en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
    */
    let temperaturaCentigrados;
    let temperaturaFahrenheit;
    let mensaje;

    temperaturaCentigrados = document.getElementById("txtIdTemperatura").value;
    temperaturaCentigrados = parseFloat(temperaturaCentigrados);

    temperaturaFahrenheit = temperaturaCentigrados * 1.8 + 32;

    mensaje = `${temperaturaCentigrados.toFixed(1)} Centigrados`;
    mensaje = mensaje + ` son ${temperaturaFahrenheit.toFixed(1)} Fahrenheit`;

    alert(mensaje);
}
