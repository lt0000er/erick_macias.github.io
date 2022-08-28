
// Api de Perritos
const urlApiDogsRandom ="https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_choJTQLXqOIDOypjRtQ8rV6BxW6hJL79RqdMKrvTcnIGnxOeBTweBgDMYX8d86Vg"
// Api de Perritos Favoritos
const urlApiDogsFavorite ="https://api.thedogapi.com/v1/favourites?api_key=live_choJTQLXqOIDOypjRtQ8rV6BxW6hJL79RqdMKrvTcnIGnxOeBTweBgDMYX8d86Vg"
 // Api de Añadir Perritos Favoritos
const urlApiDogsAddFavorite = "https://api.thedogapi.com/v1/favourites?api_key=live_choJTQLXqOIDOypjRtQ8rV6BxW6hJL79RqdMKrvTcnIGnxOeBTweBgDMYX8d86Vg"
// Api eliminar de Perritos Favoritos
const urlApiDogsDeleteFavorite = "https://api.thedogapi.com/v1/favourites/";

//Funtion conseguir Perritos.
const getDogsRandom = async () => {
    const response = await fetch(urlApiDogsRandom);
    const data = await response.json();
    const div = document.querySelector("#Container_randomDogs");
    const array = [];
    data.forEach((dog) => {
        div.innerHTML = "";
        // Crear imagen 
        const img = document.createElement("img");
        img.src = dog.url;
        img.alt = "DOG ramdom";
        img.className = "img-random";
        img.width = 275;
        img.height = 275;
        array.push(img);

        // Crear Boton
        const button = document.createElement("button");
        button.innerHTML = "Añadir a Favoritos";
        button.onclick = () => {
            addDogsToFavorite(dog.id);
        };
        array.push(button);
    });
    div.append(...array);
};
getDogsRandom();

//Funcion perros Favoritos
const getDogsFavorite = async () => {
    const response = await fetch(urlApiDogsFavorite);
    const data = await response.json();
    const div = document.querySelector("#DogsFavorite");
    const array  = [];
    data.map(perFav => {
        div.innerHTML = '';
        // Crear imagen
        const img = document.createElement("img");
        img.src = perFav.image.url;
        img.alt = "Perro Favorito";
        img.className = "img-favorite";
        img.width = 275;
        img.height = 275;
        array.push(img);

        // Crear imagen
        const button = document.createElement("button");
        button.innerHTML = "Eliminar";
        button.onclick = () => {
            removeDogsFromFavorite(perFav.id);
        }
        array.push(button);
    });
    div.innerHTML = "";
    div.append(...array);
}

getDogsFavorite();

// Añadir perros Favoritos
const addDogsToFavorite = async (id) => {
    const response = await fetch(urlApiDogsAddFavorite, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            image_id: id,
        }),
    });
    getDogsFavorite();
}

// Eliminar perritos
const removeDogsFromFavorite = async (id) => {
    const response = await fetch(`${urlApiDogsDeleteFavorite}${id}?api_key=live_choJTQLXqOIDOypjRtQ8rV6BxW6hJL79RqdMKrvTcnIGnxOeBTweBgDMYX8d86Vg`, {
        method: "DELETE",
    });
    getDogsFavorite();
};



