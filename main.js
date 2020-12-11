var button= document.getElementById("enviarmensaje");
var mensaje= document.getElementById("Mensajeenviado");
console.log(button)
button.addEventListener("click",function(){
    mensaje.classList.add("mostrar")
})

