var aceptar=confirm("Presiona aceptar si eres mayor de edad");
if (aceptar==false){  
alert("Estas ingresando bajo tu responsabilidad");
}
var nombre = prompt("Ingrese su nombre");
function saludo(){
    if (nombre){
        alert("Bienvenido "+ nombre);
    } else{
        alert("Ingrese su nombre");
    }
}
saludo();