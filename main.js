var button= document.getElementById("enviarmensaje");
var mensaje= document.getElementById("Mensajeenviado");
var name= document.getElementById("inputname").value;

console.log(button)
console.log(name)
button.addEventListener("click",function(){
    console.log(name)
    mensaje.classList.add("mostrar")
})

