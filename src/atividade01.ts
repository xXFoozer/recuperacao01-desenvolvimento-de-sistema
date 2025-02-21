// Crie um algoritmo para um calcular o valor de uma hospedagem. Você deve solicitar ao usuário a quantidade de diárias e também a idade do hospede. Com essas informações você calcular o valor total da diária com base na tabela de preço abaixo. Além disso, você deve levar em consideração que caso a pessoa tenha mais de 60 anos, ela terá um desconto de 20%. Ao final o algoritmo deve informar o valor total da hospedagem.

// Menor ou igual a 5 dias - R$100,00 a diária
// De 6 até 10 dias - R$90,00 a diária
// A partir de 11 dias - R$80,00 a diária
import leia from 'readline-sync'
export default function atividade01() {
  var dias = leia.questionInt("Quantos dias previstos: ");
  var idade = leia.questionInt("Digite sua idade: ");
  var diaria = 0;

  
  if (dias <= 5) {
    diaria = 100;
  } else if (dias >= 6 && dias <= 10) {
    diaria = 90;
  } else if (dias > 10) {
    diaria = 80;
  }

  
  var valorTotal = dias * diaria;

  
  if (idade > 60) {
    valorTotal = valorTotal * 0.80; 
  }

 
  console.log(`O valor total da hospedagem é de R$${valorTotal.toFixed(2)}`);
}

