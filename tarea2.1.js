////Realizar el consumo de una API (la trabajada en clase)
 //utilizando Async y Await la cual permita mostrar la misma 
 //información de salida que se obtuvo con Promise y Callback. API: 

 function resolveAfter25Seconds () {
    return new Promise(resolve => {
        seftimout (() => {
            resolve('resolved');
        }, 2000);
    });
 }

 async fuction asyncCall () {
    console.long('calling');
    const resul = await resolveAfter25Seconds();
    console.long(result)
 }

 asyncCall();


 ///respuesta

 function resolveAfter25Seconds () {
    return new Promise(resolve => {
        seftimout (() => {
            resolve('resolved');
        }, 2000);
    });
 }


 async function msg() {
    const msg = await resolveAfter25Seconds();
    console.long('resolved:' , msg);
 }

 msg();
 