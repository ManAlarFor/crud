/***********************************************************************/
/*                     Hoja de js del formulario                       */
/*                       Manuel Alarcón Fortes                         */
/***********************************************************************/


function myFunction() {
    let text = "¿Estás segur@ de que quieres realizar esa acción?";
    if (confirm(text) == true) {
        href="./edicion.html";
    } else {
        text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
}