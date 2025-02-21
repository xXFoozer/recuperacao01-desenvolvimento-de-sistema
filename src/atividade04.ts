// Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário. Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório. A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.
import leia from 'readline-sync'

export default function atividade04() {  
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'
  var senha: string[]= []
  
  var tamanho = leia.questionInt("digite quantos caracteres quer a senha: ")


  for(var i = 0; i < tamanho; i++){
    var numAleatorio= Math.trunc(Math.random()*char.length)
  
    
    senha.push(char[numAleatorio]) 
  }

  console.log(`sua senha: ${senha}`)



  
}