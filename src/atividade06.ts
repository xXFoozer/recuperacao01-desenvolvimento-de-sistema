// Escreva um programa que permita o cadastro de N produtos. Para cada produto, solicite o nome e o preço. Armazene os dados em um vetor de objetos. Ao final, o programa deve:

// Imprimir o nome e o preço de cada produto.
// Calcular e exibir o preço médio dos produtos.
// Calcular e exibir o preço total



import leia from 'readline-sync'
export default function atividade06() {
  var vetorProduto = []
  
  do{
    var produto = {
      nome: leia.question("Digite o nome do produto: "),
      preco: leia.questionFloat("Digite o valor do produto R$:")
    }
    vetorProduto.push(produto)
    var saida = leia.questionInt("para continuar qualquer numero (menos 0): ")
    
  }while(saida != 0)

  var total = vetorProduto.reduce((total, produto)=> total + produto.preco, 0) 
  var media = total /vetorProduto.length
  

  vetorProduto.forEach((produto) => {
    console.log(`Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}`);
  });

  console.log(`Preço total dos produtos: R$${total.toFixed(2)}`);
  console.log(`Preço médio dos produtos: R$${media.toFixed(2)}`);

}