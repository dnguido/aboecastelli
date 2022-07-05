function calculadora (calculo, x, y) {

    if (calculo == "suma"){
        return x + y;
    } else if (calculo == "resta"){
        return x - y;
    } else if (calculo == "multiplicacion"){
        return x * y;
    } else if (calculo == "division"){
        return x / y;
    } else if (calculo == "exponenciacion"){
        return x ** y;
    } else {
        return -1
    }
}

console.log(calculadora ("division", 4, 8))











/* Practicando Switch
let edad = prompt ("Cuál es tu edad")

switch (edad){
    case "0":
        console.log ("Tenes cero años")
        break;

    case "10":
        console.log ("Tenes 10 años")
        break;

    case "50":
        console.log ("Tenes 50 años")
        break;

    default:
        console.log("No tenes ni 0, ni 10, ni 50 años")
        break;

}
 */


