/* Um objeto representa um produto em uma loja (com propriedades como nome, preço e quantidade em estoque). Crie uma função que receba esse objeto e calcule o valor total em estoque (preço x quantidade). Se o valor total for maior que um determinado valor, exiba uma mensagem de alerta usando console.log. */

const product = {
  name: "Notebook",
  price: 499.99,
  stock: 10,
};

function calculateTotalStockValue(product, threshold) {
  const totalValue = product.price * product.stock;

  if (totalValue > threshold) {
    console.log(
      `Alerta: O valor total do estoque do produto ${product.name} excede o limite de ${threshold}.`
    );
  } else {
    console.log(
      `O valor total do estoque do produto ${product.name} está dentro do limite.`
    );
  }
}

function main() {
  calculateTotalStockValue(product, 1000);
}

main();
