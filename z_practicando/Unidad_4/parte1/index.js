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
var litrosCombustible = 0;
console.log(combustible(litrosCombustible));

var nivel = combustible(litrosCombustible);
var emptyAlert = false;

const tanqueVacio = (tanque) => {
    if (tanque === "E"){
        emptyAlert = true;
    } 
    return emptyAlert
}
console.log(tanqueVacio(nivel))