//Obtengo los elementos del botón y la imagen del HTML
const boton = document.getElementById("boton");
const image = document.getElementById("image");
const accessKey = "gg7y5iPG2xzhu4Ir36XX7krj3KnsE29Nu6E_QGl9HAU"

//URL de la API de TheCocktailDB para obtener un cóctel random con imagen.
const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php?api_key=${accessKey}`;

//Le agrego un evento al click del botón. 
boton.addEventListener("click", () => {
    // Hago la solicitud a la API.
    fetch(apiUrl)
.then(response => response.json())
.then(data => {
    //URL de la imagen random.
    const imageUrl = data.drinks[0].strDrinkThumb;
//Actualizo la imagen del HTML con la imagen random.
    image.src = imageUrl;
})

.catch(error => {
    console.error("Error en la solicitud, error");
});
});
