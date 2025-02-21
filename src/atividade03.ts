



// Crie um algoritmo que leia uma quantidade n de números inteiros fornecida pelo usuário e armazene esses números em um vetor. O algoritmo deve parar de solicitar valores, quando o usuário digitar o numero 0. Ao final, o algoritmo deve calcular e imprimir a média desses números, a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).

import leia from 'readline-sync'
export default function atividade03() {
    var numeros: number[] = []; 
    var numero: number;
  
    do {
     
      numero = leia.questionInt("Digite um numero (0 para parar): ");
      if (numero !== 0) {
        numeros.push(numero);
      }

    }while(numero !== 0);
  
    
    if (numeros.length > 0) {

      var soma = numeros.reduce((acc, num) => acc + num, 0);
  
      
      var media = soma / numeros.length;
  
      
      var maior = Math.max(...numeros);
  
      var menor = Math.min(...numeros);
  
  
      console.log(`Números digitados: ${numeros}`);
      console.log(`Soma dos numeros: ${soma}`);
      console.log(`Média dos numeros: ${media.toFixed(2)}`);
      console.log(`Maior numero: ${maior}`);
      console.log(`Menor numero: ${menor}`);
    } else {
      console.log("Nenhum numero foi digitado.");
    }
  }
