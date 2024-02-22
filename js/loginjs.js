/***********************************************************************/
/*                     Hoja de js del formulario                       */
/*                       Manuel Alarcón Fortes                         */
/***********************************************************************/

function validacion(){
    let email = document.getElementById('Email').value ;
    let pass = document.getElementById('Pass').value ;
    let valor = true;

    if(email=="" || ! /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(email)      ){

        document.getElementById('avisoEmail').style.visibility="visible";
        valor = false;

    }

    if(pass=="" || !/[A-ZÑ]+/.test(pass) || !/[a-zñ]+/.test(pass) || !/[0-9]+/.test(pass) || !/[!"·$%&/=/*-_:;,.¿?¡]+/.test(pass) ||! (pass.length>=8 && pass.length<=15 ) ){

        document.getElementById('avisoPass').style.visibility="visible";
        valor = false;

    }


    return valor ;

}


function resetear(id){
    document.getElementById("aviso"+id).style.visibility="hidden" ;

}