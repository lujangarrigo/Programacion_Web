
const combustible = (litros) => {
    if (litros >= 45 && litros <= 55){
        return "F";
    } else if (litros >= 35){
        return 3/4;
    } else if (litros >= 20){
        return 1/2;
    } else if (litros >= 10){
        return 1/4;
    } else if (litros >= 0){
        return "E";
    } else {
        return "Fuel tank: Invalid argument, must be >= 0"
    }
}


function handleButtonClick() {
    var imagenesAnteriores = document.getElementsByTagName("img")
    var imagenAEliminar = imagenesAnteriores[0];
    if (imagenAEliminar) {
        imagenAEliminar.parentNode.removeChild(imagenAEliminar);
    }
	var numberInput = document.getElementById("litrosInput");
	var cantidadLitros = numberInput.value;
    var imagen = document.createElement("img");
    if (cantidadLitros >55){
        var parrafo = document.createElement("p")
        parrafo.innerHTML = "Fuel tank: Invalid argument, must be >= 0 and <= 55"
        var div = document.getElementById("divImg");
		div.appendChild(parrafo);
    } else if (cantidadLitros >= 45 && cantidadLitros <= 55){
		imagen.innerHTML = imagen.setAttribute("src","fuel_meter_f.png");
		var div = document.getElementById("divImg");
		div.appendChild(imagen);
    } else if (cantidadLitros >= 35){
		imagen.innerHTML = imagen.setAttribute("src", "fuel_meter_1-4.png");
		var div = document.getElementById("divImg");
        console.log(imagen)
		div.appendChild(imagen);
    } else if (cantidadLitros >= 20){
		imagen.innerHTML = imagen.setAttribute("src","fuel_meter_1-2.png");
		var div = document.getElementById("divImg");
		div.appendChild(imagen);
    } else if (cantidadLitros >= 10){
		imagen.innerHTML = imagen.setAttribute("src","fuel_meter_1-4.png");
		var div = document.getElementById("divImg");
		div.appendChild(imagen);
    } else {
		imagen.innerHTML = imagen.setAttribute("src","fuel_meter_e.png");
		var div = document.getElementById("divImg");
		div.appendChild(imagen);
    } 
}
