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

do{
    let operacion = prompt("Ingrese una operacion: suma, resta, multiplicacion, division, exponenciacion");
    let primero = parseInt(prompt ("Ingrese el primer numero"));
    let segundo = parseInt(prompt ("Ingrese el segundo numero"));

    if(operacion && primero && segundo && !isNaN(primero) && !isNan (segundo)){
        alert (`El resultado de la operacion ${operacion} entre ${primero} y ${segundo} es: ${calculadora (operacion, primero, segundo)})`);

        console.log(calculadora (operacion, primero, segundo));
    }else{
        alert ("Algunos de los datos ingresados no es válido");
    }
    
}while(confirm ("Desea realizar otra operación?"))
























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


