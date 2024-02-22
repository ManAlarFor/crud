/***********************************************************************/
/*                     Hoja de js del formulario                       */
/*                       Manuel Alarcón Fortes                         */
/***********************************************************************/

function validacion(){
    let nombre = document.getElementById('Nombre').value ;
    let pais = document.getElementById('Pais').value ;
    let pieza = document.getElementById('Pieza').value ;
    let edad = document.getElementById('Edad').value ;
    let seccion = document.getElementById('Seccion').value ;
    let ubicacionExpo = document.getElementById('expo').checked ;
    let ubicacionAlmacen = document.getElementById('almacen').checked ;

        let valor = true;

    if(nombre=="" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ']{2,}/.test(nombre)){

        document.getElementById('avisoNombre').style.visibility="visible";
        valor = false;

    }

    if(pais=="0"){

        document.getElementById('avisoPais').style.visibility="visible";
        valor = false;

    }

    if(pieza=="" || /^\s+$/.test(pieza) || !/[a-zñ']{2,}/.test(pieza)){

        document.getElementById('avisoPieza').style.visibility="visible";
        valor = false;

    }

    if(edad=="0"){

        document.getElementById('avisoEdad').style.visibility="visible";
        valor = false;

    }

    if(seccion==""){

        document.getElementById('avisoSeccion').style.visibility="visible";
        valor = false;

    }

    if((ubicacionExpo==false)&&(ubicacionAlmacen==false)){

        document.getElementById('avisoUbicacion').style.visibility="visible";
        valor = false;

    }

    return valor ;

}


function resetear(id){
    document.getElementById("aviso"+id).style.visibility="hidden" ;

}