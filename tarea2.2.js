/////Realizar el consumo de una API (la trabajada en clase)
// utilizando Promesas y utilizando XMLHTTPREQUEST mostrar 
//la misma información de salida que se obtuvo con Promise y Callback. API:

const xhttp = new XMLHttpRequest();
const API = `https://rickandmortyapi.com/api`;

const fetchData = (urlAPi) => {
    return new Promise((resolved, reject) => {
        xhttp.open("GET", urlApi, true);
        xhttp.onreadystatechange = (eve) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolved(JSON.parse(xhttp.responseText));
                }else{
                    const error = new Error("Error "+urlApi)
                    reject(error);
                }
            }
        }
        xhttp.send();
    })
}


////respuiestas cumplidas
// promesa cumplida
let  promesa = new  Promise(function(resolve, reject) {
    setTimeout(()  => resolve(new Error("Hecho!" +urlApi)), 4);
   });

   promesa.then(
     result => alert(result), 
     error => alert(error) 
   );
   /// promesas rechzadas

   let promesa =  new  Promise(function(resolve, reject)  { 
    setTimeout(()  => reject(new Error("Whoops!")), 200);
   });
   
   promesa.then(
     result => alert(result), 
     error => alert(error) 
   );
   