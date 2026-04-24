//cambiar texto del h1
const titulo = document.getElementById (`titulo`);
titulo.innerText = `HOLA`;
//cambiar el color del primer parrafo
arregloElementos = document.getElementsByClassName("parrafo");
primerParrafo = arregloElementos[0]
primerParrafo.style="color:red;";
//cambiar fondo del div
elemento = document.querySelector("#contenedor");
elemento.style="background-color:blue;";
//eventos con btn
let boton = document.getElementById("btn");
boton.addEventListener("click", function (){
    alert ("click detectado");
    boton.textContent = "gracias";
});
//crear tareas
    let input = document.getElementById("tarea");
    let button = document.getElementById("agregar");
    let lista = document.getElementById("lista");

    button.addEventListener("click", function() {

        if (input.value === "") {
            alert("escribi una tarea");
            return;
        }

        let li = document.createElement("li");
        li.textContent = input.value;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "eliminar";

        btnEliminar.addEventListener("click", function() {
            //forma 1
            li.remove();
            //forma 2
            // li.parentNode.removeChild(li);
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);

        input.value = "";
    });
//selectores
// Cambiar borde email
document.querySelector('input[type="email"]').style.border = "2px solid red";

// placeholder contraseña
document.querySelector('input[type="password"]').placeholder = "ingrese su nombre aqui";


//comentarios
let inputComentario = document.getElementById("comentario");
let buttonPublicar = document.getElementById("publicar");
let contenedor = document.getElementById("comentarios");

buttonPublicar.addEventListener("click", function() {

    let div = document.createElement("div");
    div.textContent = inputComentario.value;

    let eliminar = document.createElement("button");
    eliminar.textContent = "eliminar";

    eliminar.addEventListener("click", function() {
        div.remove();
    });

    div.appendChild(eliminar);
    contenedor.appendChild(div);

    inputComentario.value = "";
});
