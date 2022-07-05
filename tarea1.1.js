
//Determina el nombre y tipo de dato para almacenaren variables la siguiente información

    // tipos de variables 

    name:   "String tipo cadena"
    last name: "String tipo de cadena" 
    nombre de usuario en ITI: "String"
    edad: "Number"
    correo electronico: var

    mayor de edad: "number"
    dinero ahorrado: "number"
    deudas: "number"

    //Traduce a código JavaScript las variables del ejemplo anterior y adjunta una captura

const alumno = {
    name: "Erick",
    last name: "Macias",
    nombre de usuario en ITI: "erick",
    edad: 26,
    correo electronico: "erick.macias@iti.com",
    mayor de edad: "Si",
    dinero ahorrado: "si, 500",
    deudas: "5000",

}


//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
 // Nombre completo (nombre y apellido) 
 //Dinero real (dinero ahorrado menos deudas)
 
 const alumno = {
     name: "Erick",
     last name: "Macias",
     dinero real: [
         " dinero ahorrado"
     ],
     imprimeNombre: function () {
         console.log("el nombre es" + this. name);
     }
 }


 //. Convierte el siguiente código en una función, pero, 
 //cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función


console.log(alumno.imprimeNombre);
console.log(alumno.imprimeNombreCompleto);
console.log(alumno.imprimeApodo);

 const alumno = function(name, lastname, complename, nickname) {
     this.name = "Juan David";
     this.lastname = "Castro Gallegos";
     this.completename = Juan + Castro;
     this.nickname = juandc; 
     this.imprimeNombre = function (){
         console.log("el nombre es " + this.name);
     }
     this.imprimeNombreCompleto = function (){
         console.log("el nombre completo es " + this.completename);
     }
     this.imprimeApodo = function (){
         console.log("el apodo es "+ this.nickname);
     }
 }
 console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); 


 ///Replica el comportamiento del siguiente código que usa la sentencia switch Utilizando 
 //if, else y else if 




  const tipoDeMatricula = "Basic";
  if (matricula === gratis) {

  } if (matricula === basico){
    
  } if (matricula === experta) {

  } if (matricula === expertaPlus) {

  } else {

  }
  
    switch (tipoDeMatricula) {
      case "Free": 
   console.log("Solo puedes tomar los cursos gratis"); 
       break; 
    case "Basic": 
 console.log("Puedes tomar casi todos los cursos de ITI durante un mes"); 
      break; 
    case "Expert": 
 console.log("Puedes tomar casi todos los cursos de ITI durante un año");
      break; 
    case "ExpertPlus":
  console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año"); 
     break;
  } 
