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
        document.getElementById("Email").style.borderColor="red";
        valor = false;

    }

    if(pass=="" || /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pass) ||(pass.length>=8 && pass.length<=15 ) ){

        document.getElementById('avisoPass').style.visibility="visible";
        document.getElementById("Pass").style.borderColor="red";
        valor = false;

    }


    return valor ;

}


function resetear(id){
    document.getElementById("aviso"+id).style.visibility="hidden" ;
    document.getElementById(id).style.borderColor="red" ;

}