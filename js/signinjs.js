/***********************************************************************/
/*                     Hoja de js del formulario                       */
/*                       Manuel Alarcón Fortes                         */
/***********************************************************************/

function validacion(){
    let nombre = document.getElementById('Nombre').value ;
    let pais = document.getElementById('Pais').value ;
    let apellido = document.getElementById('Apellido').value ;
    let usuario = document.getElementById('Usuario').value ;
    let ID = document.getElementById('ID').value ;
    let valor = true;

    if(nombre=="" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ']{2,}/.test(nombre)){

        document.getElementById('avisoNombre').style.visibility="visible";
        valor = false;

    }

    if(pais=="0"){

        document.getElementById('avisoPais').style.visibility="visible";
        valor = false;

    }

    if(apellido=="" || /^\s+$/.test(apellido) || /[0-9]/.test(apellido) || !/[a-zñ']{2,}/.test(apellido)){

        document.getElementById('avisoApellido').style.visibility="visible";
        valor = false;

    }

    if(usuario=="" || /^\s+$/.test(usuario) || ! /[0-9]/.test(usuario) || !/[a-zñ']{2,}/.test(usuario)){

        document.getElementById('avisoUsuario').style.visibility="visible";
        valor = false;

    }

    if(ID=="" ||  /^\s+$/.test(ID) || ! /[0-9]/.test(ID) || /[a-zñ']{2,}/.test(ID)){

        document.getElementById('avisoID').style.visibility="visible";
        valor = false;

    }

    return valor ;

}


function resetear(id){
    document.getElementById("aviso"+id).style.visibility="hidden" ;
    document.getElementById(id).style.borderColor="red" ;

}