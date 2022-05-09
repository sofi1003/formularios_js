let impar = "";
let i = 1;

function ciclowhile(objeto)
{

    let numero = parseInt(document.formulario.caja.value);

    while(i <= numero)
    {

        if(i % 2 != 0 ){
        
            impar = impar + i + ", ";
        }

        i++;
    }
    document.formulario.respuesta.value = impar;
}