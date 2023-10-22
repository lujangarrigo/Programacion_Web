const actualizarBanner = async () => {
    try {
        const respuesta = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const comida = respuesta.data.meals[0];
        const URLImg = comida.strMealThumb;

        if (URLImg) {
            document.getElementById('imgComida').src = URLImg;
        }
    } catch (error) {
        console.error('Error al obtener la imagen', error);
    }
};

setInterval(actualizarBanner, 2000);
actualizarBanner(); 