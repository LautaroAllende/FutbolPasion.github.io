

let respuestascorrectas=0;

function preguntar(cadena, respuestaCorrecta,  ) { let respuesta = prompt(cadena); if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) { alert("CORRECTO"); console.log("CORRECTO"); respuestascorrectas++; } else if (respuesta != "" && respuesta.toLowerCase() !== respuestaCorrecta.toLowerCase()) { alert("INCORRECTO"); console.error("INCORRECTO"); } else if(respuesta == "") { alert("SIN CONTESTAR"); console.log("SIN CONTESTAR"); while (respuesta == "") { respuesta = prompt(cadena); if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) { alert("CORRECTO"); console.log("CORRECTO"); respuestascorrectas++; break; } else if (respuesta != "" && respuesta.toLowerCase() !== respuestaCorrecta.toLowerCase()) { alert("INCORRECTO"); console.error("INCORRECTO"); break; } } } return respuestascorrectas; }

function copasliber() {   respuestascorrectas=0;

    respuestascorrectas= preguntar( "¿CUANTAS COPAS LIBERTADORES TIENE BOCA JUNIORS?", "6"  );

    respuestascorrectas= preguntar( "¿QUIEN ES EL JUGADOR CON MAS LIBERTADORES?contestar solo con el apellido", "battaglia" );

    respuestascorrectas=preguntar( "¿QUIEN ES EL MAXIMO GOLEADOR EN LIBERTADORES?contestar solo con el apellido","riquelme");


alert("RESPUESTAS CORRECTAS: " + respuestascorrectas); }

function copasinter() {  respuestascorrectas;

    respuestascorrectas=preguntar( "¿CUANTAS COPAS INTECONTINENTALES TIENE BOCA JUNIORS?", "3"  );

    respuestascorrectas=preguntar("¿EN QUE AÑO GANO CONTRA EL MILAN?","2003");

    respuestascorrectas=preguntar("¿EN UE AÑO GANO CONTRA EL REAL MADRID?","2000");

alert("RESPUESTAS CORRECTAS: " + respuestascorrectas); }

function maximogole() {  respuestascorrectas;

    respuestascorrectas=preguntar( "¿QUIEN ES EL MAXIMO GOLEADOR?: ingrese solo apellido", "palermo"  );
    
    respuestascorrectas=preguntar("¿CUANTOS GOLES TIENE PALERMO EN BOCA?","236");

    respuestascorrectas=preguntar("¿EN QUE AÑO SE RETIRO PALERMO?","2011");

alert("RESPUESTAS CORRECTAS: " + respuestascorrectas); }

function bombonera() {  respuestascorrectas;

    respuestascorrectas= preguntar( "¿EN QUE AÑO SE CONSTRUYO LA BOMBONERA?: solo el año", "1940");

    respuestascorrectas= preguntar( "¿EN QUE BARRIO ESTA UBICADA LA BOMBONERA?", "la boca");

    respuestascorrectas=preguntar( "¿CUAL ES EL NOMBRE DEL ESTADIO DE BOCA?", "Alberto J. Armando");

alert("RESPUESTAS CORRECTAS: " + respuestascorrectas); }

function fichajes() {  respuestascorrectas;

    respuestascorrectas=preguntar(" ¿QUIEN FUE EL FICHAJE MAS CARO DE BOCA?ingrese apellido ","riquelme");

    respuestascorrectas=preguntar("¿EN QUE AÑO VOLVIO POR SEGUNDA VEZ TEVEZ?","2018");
 
    respuestascorrectas=preguntar("¿EN QUE AÑO VINO POR PRIMERA VEZ  PALERMO ","1997");

    alert("RESPUESTAS CORRECTAS: " +respuestascorrectas); }

function escudo() {  respuestascorrectas;
    respuestascorrectas=preguntar ("¿CUANTAS ESTRELLAS TIENE EL ESCUDO DE BOCA?", "52");

    respuestascorrectas=preguntar ("¿CUANTOS ESCUDOS TUVO BOCA?","5");

     respuestascorrectas=preguntar ("¿EN QUE AÑO TUVO LUGAR EL PRIMR ESCUDO DE BOCA?", "1911");
    
    alert("RESPUESTAS CORRECTAS: " + respuestascorrectas); }

function tecnicos() {  respuestascorrectas;
    respuestascorrectas=preguntar ("¿QUIEN ES EL TECNICO QUE MAS GANO EN BOCA? ingrese apellido","bianchi",);

    respuestascorrectas=preguntar ("TECNICO QUE GANO LA ULTIMA LIBERTADORES EN BOCA? ingrese apellido","russo",);

    respuestascorrectas=preguntar ("TECNICO QUE GANO LA PRIMERA LIBERTADORES PARA BOCA? ingrese apelllido","lorenzo",);

    alert("RESPUESTAS CORRECTAS: " + respuestascorrectas); }







 