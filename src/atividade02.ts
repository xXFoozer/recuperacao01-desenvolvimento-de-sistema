// Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

import leia from 'readline-sync'
export default function atividade02() {
  var temperatura= leia.keyInSelect(["Celsius para Fahrenheit ","Fahrenheit para Celsius","Celsius para Kelvin", "Kelvin para Celsius","Fahrenheit para Kelvin","Kelvin para Fahrenheit"])

if(temperatura === 0){
    var Celsius= leia.questionFloat("QUANTOS CELSIUS ESTA: ")
    var f = (Celsius * 1.8) + 32 
    
    console.log("voce esta a "+f+" Fahrenheit")
}

if(temperatura === 1){
    var Fahrenheit= leia.questionFloat("QUANTOS FAHRENHEIT ESTA: ")
    var  c = (Fahrenheit - 32) * (5/9)
    
    console.log("voce esta a "+c+" Celcius")
}
if(temperatura === 2){
    var Celsius= leia.questionFloat("QUANTOS CELSIUS ESTA: ")
    var  k = Celsius + 273.15 
    
    console.log("voce esta a "+k+" Kelvin")
}
if(temperatura === 3){
    var Kelvin = leia.questionFloat("QUANTOS KELVIN ESTA: ")
    var   c = Kelvin - 273.15
    console.log("voce esta a "+c+" Celsius")
}
if(temperatura === 4){
    var Fahrenheit = leia.questionFloat("QUANTOS FAHRENHEIT ESTA: ")
    var k = (Fahrenheit - 32) * (5/9) + 273.15 
    console.log("voce esta a "+ k + " kelvin")
}
if(temperatura === 5){
    var Kelvin = leia.questionFloat("QUANTOS KELVin ESTA: ")
    var f = (Kelvin - 273.15) * 1.8 + 32
    console.log("voce esta a "+ f + " farinheit")
}
}