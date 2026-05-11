// EJ 1 + EJ 2 juntos
let usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
.then(r => r.json())
.then(data => {
usuarios = data;

data.forEach(u => {
console.log(u.name, u.email);

let li = document.createElement("li");
li.innerText = u.name + " - " + u.email;
document.getElementById("lista").appendChild(li);
});
});

// EJ 3
document.getElementById("buscar").addEventListener("input", function(e){
let texto = e.target.value.toLowerCase();
let lista = document.getElementById("lista");
lista.innerHTML = "";

usuarios
.filter(u => u.name.toLowerCase().includes(texto))
.forEach(u => {
let li = document.createElement("li");
li.innerText = u.name;
lista.appendChild(li);
});
});

// EJ 4
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(r => r.json())
.then(u => {
document.getElementById("usuario").innerHTML =
"Nombre: " + u.name + "<br>" +
"Email: " + u.email + "<br>" +
"Tel: " + u.phone + "<br>" +
"Ciudad: " + u.address.city;
});

// EJ 5
function crear(){
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;

if(nombre == "" || email == ""){
document.getElementById("mensaje").innerText = "Faltan datos";
return;
}

fetch('https://jsonplaceholder.typicode.com/users',{
method:'POST',
headers:{'Content-Type':'application/json'},
body: JSON.stringify({name:nombre, email:email})
})
.then(res => {
if(res.ok){
document.getElementById("mensaje").innerText = "Creado";
}else{
document.getElementById("mensaje").innerText = "Error";
}
});
}