// Escreva um algoritmo para verificar se uma roleta de cassino é viciada. A roleta tem 37 números (de 0 a 36), sendo que o número 0 é verde e os demais são divididos igualmente entre vermelho e preto (impares são vermelho, pares são pretos). O programa deve contar quantas vezes cada cor (verde, vermelho, preto) foi gerada e verificar se alguma cor tem uma frequência maior que 40%. Se houver, o programa deve indicar que a roleta pode estar viciada.

import leia from 'readline-sync'
export default function atividade05() {
 var totalGiros = leia.questionInt(" digite a qtde de giros da roleta: ")

  var verde = 0
  var vermelho = 0
  var preto = 0

  for(var i = 0; i < totalGiros; i++){
    var giros = Math.trunc(Math.random()* 37)
  
    if(giros === 0){
      verde++ 
    }else if(giros % 2 === 0){
      preto++
    }else{
      vermelho++
    } 
  }
  
  var vezesVerde = (verde / totalGiros)*100
  var vezesVermelho = (vermelho / totalGiros)*100
  var vezesPreto = (preto / totalGiros)*100

  if(vezesVerde > 40 || vezesVermelho > 40 || vezesPreto > 40){
    console.log("Pode estar viciada;")
  }else{
    console.log("Não parece suspeita;")
  }


}