// array donde se guardan las tareas
let tareas = [];

let input = document.getElementById("tarea");
let button = document.getElementById("agregar");
let lista = document.getElementById("lista");
let error = document.getElementById("error");

// contador
let total = document.getElementById("total");
let completadas = document.getElementById("completadas");
let pendientes = document.getElementById("pendientes");

// evento agregar
button.addEventListener("click", function() {

    let texto = input.value;

    //
    if (texto === "") {
        error.textContent = "no puede estar vacio";
        return;
    }

    if (texto.length > 50) {
        error.textContent = "maximo 50 caracteres";
        return;
    }

    error.textContent = "";

    // se crea el objeto tarea
    let tarea = {
        texto: texto,
        completada: false
    };

    tareas.push(tarea);

    input.value = "";

    render();
});

// funcion render
function render() {

    lista.innerHTML = "";

    let comp = 0;

    for (let i = 0; i < tareas.length; i++) {

        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tareas[i].completada;

        let span = document.createElement("span");
        span.textContent = tareas[i].texto;

        // tachar si esta completada
        if (tareas[i].completada) {
            span.classList.add("completada");
            comp++;
        }

        // evento checkbox
        checkbox.addEventListener("click", function() {
            tareas[i].completada = this.checked;
            render();
        });

        li.appendChild(checkbox);
        li.appendChild(span);

        lista.appendChild(li);
    }

    // actualiza el contador
    total.textContent = tareas.length;
    completadas.textContent = comp;
    pendientes.textContent = tareas.length - comp;
}