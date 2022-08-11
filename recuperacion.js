<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>: https://swapi.dev/</title>
</head>
<body>
      console.log (https://swapi.dev/api/people/1/);
      console.long (https://swapi.dev/api/planets/3/);
      console.long (https://swapi.dev/api/starships/2/);

      XMLHttpRequest 
      HTTP 200 OK
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.dev/api/planets/1/", 
    "films": [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/2/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/6/"
    ], 
    "species": [], 
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/", 
        "https://swapi.dev/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.dev/api/starships/12/", 
        "https://swapi.dev/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.dev/api/people/1/"
}


XMLHttpRequest 
HTTP 200 OK
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

{
    "name": "Yavin IV", 
    "rotation_period": "24", 
    "orbital_period": "4818", 
    "diameter": "10200", 
    "climate": "temperate, tropical", 
    "gravity": "1 standard", 
    "terrain": "jungle, rainforests", 
    "surface_water": "8", 
    "population": "1000", 
    "residents": [], 
    "films": [
        "https://swapi.dev/api/films/1/"
    ], 
    "created": "2014-12-10T11:37:19.144000Z", 
    "edited": "2014-12-20T20:58:18.421000Z", 
    "url": "https://swapi.dev/api/planets/3/"
}  async function postData(url = '', data = {}) {

  const response = await fetch(url, {
    method: 'POST';
    mode: 'cors';
    cache: 'no-cache';
    credentials: 'same-origin';
    headers: {
      'Content-Type': 'application/json'
    
    }
    redirect: 'follow';
    referrerPolicy: 'no-referrer';
    body: JSON.stringify(data) 
  });
  return response.json(); 
}

XMLHttpRequest
HTTP 200 OK
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

{
    "name": "CR90 corvette forte", 
    "model": "CR90 corvette", 
    "manufacturer": "Corellian Engineering Corporation", 
    "cost_in_credits": "3500000", 
    "length": "150", 
    "max_atmosphering_speed": "950", 
    "crew": "30-165", 
    "passengers": "600", 
    "cargo_capacity": "3000000", 
    "consumables": "1 year", 
    "hyperdrive_rating": "2.0", 
    "MGLT": "60", 
    "starship_class": "corvette", 
    "pilots": [], 
    "films": [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/6/"
    ], 
    "created": "2014-12-10T14:20:33.369000Z", 
    "edited": "2014-12-20T21:23:49.867000Z", 
    "url": "https://swapi.dev/api/starships/2/"
}
postData('https://swapi.dev/', { answer: 42 })
  .then(data => {
    console.log(data); 
  });

fetch('flores.jpg').then(function(response) {
  if(response.ok) {
    response.blob().then(function(miBlob) {
      var objectURL = URL.createObjectURL(miBlob);
      miImagen.src = objectURL;
    });
  } else {
    console.log('Respuesta de red OK pero respuesta HTTP no OK');
  }
})
.catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
});

</body>
</html>