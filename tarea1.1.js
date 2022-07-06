
//Determina el nombre y tipo de dato para almacenaren variables la siguiente información

    // tipos de variables 

    name:   "String"
    last name: "String" 
    nombre de usuario en ITI: "String"
    edad: "Entero"
    correo electronico: "String

    mayor de edad: "Booleano"
    dinero ahorrado: "Decimal"
    deudas: "Entero"

    //Traduce a código JavaScript las variables del ejemplo anterior y adjunta una captura

      const nombre = "juan", apellido = "Castro";
    var usuario, edad, correo, mayor de edad, dinero ahorrado, deudas;


//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
 // Nombre completo (nombre y apellido) 
 //Dinero real (dinero ahorrado menos deudas)

         const nombre = "Juan", apellido = "Castro";
        var usuario, edad, correo, adulto, ahorros, deudas;
 
 ahorros = 10000;
 deudas = 3000;
 
 console.log(`Hola, me llamo ${nombre} ${apellido}. Y el dinero real que tengo es ${ahorros - deudas}`)


 //. Convierte el siguiente código en una función, pero, 
 //cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función

        const name = "Juan David";
          const lastname = "Castro Gallego";
          const completeName = name + lastname;
          const nickname = "juandc";
 
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


 //respuesta
 const name = "Juan", lastName = "Castro", nick = "juandc";
 const completeName = `${name} ${lastName}`;
 
 function presentarse(name, nickName){
   console.log("Mi nombre es " + name + ", pero prefiero que me digas " + nickName + ".");
 }
 
 presentarse(completeName, nick);


 ///Replica el comportamiento del siguiente código que usa la sentencia switch Utilizando 
 //if, else y else if 




  const tipoDeMatricula = "Basic";  
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

       ///respuesta

       if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
  } else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de ITI durante un mes");
  } else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de ITI durante un año");
  } else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
  }


     if(tipoDeSuscripcion === "Free"){
  console.log("Solo puedes tomar los cursos gratis");  
}

if(tipoDeSuscripcion === "Basic"){
  console.log("Puedes tomar casi todos los cursos de ITI durante un mes");  
}

if(tipoDeSuscripcion === "Expert"){
  console.log("Puedes tomar casi todos los cursos de ITI durante un año");  
}
