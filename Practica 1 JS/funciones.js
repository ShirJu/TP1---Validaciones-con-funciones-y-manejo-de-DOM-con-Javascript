function ValidarInput(nota)
{
    var elemento = document.getElementById("nota");
    var nota = elemento.value;

    if (nota == "") 
    {
        alert("Todos los campos deben estar completos para continuar");
    } 
    

}
function color(nota)
{
    var elemento = document.getElementById("nota");
    var nota = elemento.value;

    if (nota>=1 && nota<=10) 
        {
            elemento.style.background= "green";
        } 
        else 
        {
            elemento.style.background= "red";
        }
}