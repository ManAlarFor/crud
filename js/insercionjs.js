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
    let valor = true;

    if(nombre=="" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ']{2,}/.test(nombre)){

        document.getElementById('avisoNombre').style.visibility="visible";
        document.getElementById("Nombre").style.borderColor="red";
        valor = false;

    }

    if(pais=="0"){

        document.getElementById('avisoPais').style.visibility="visible";
        document.getElementById("Pais").style.borderColor="red";
        valor = false;

    }

    if(pieza=="" || /^\s+$/.test(pieza) || /[0-9]/.test(pieza) || !/[a-zñ']{2,}/.test(pieza)){

        document.getElementById('avisoPieza').style.visibility="visible";
        document.getElementById("Pieza").style.borderColor="red";
        valor = false;

    }

    if(edad=="0"){

        document.getElementById('avisoEdad').style.visibility="visible";
        document.getElementById("Edad").style.borderColor="red";
        valor = false;

    }

    if(seccion==""){

        document.getElementById('avisoSeccion').style.visibility="visible";
        document.getElementById("Seccion").style.borderColor="red";
        valor = false;

    }

    return valor ;

}


function resetear(id){
    document.getElementById("aviso"+id).style.visibility="hidden" ;
    document.getElementById(id).style.borderColor="red" ;

}