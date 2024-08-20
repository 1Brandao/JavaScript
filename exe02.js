/* Um objeto representa um produto em uma loja (com propriedades como nome, preço e quantidade em estoque). Crie uma função que receba esse objeto e calcule o valor total em estoque (preço x quantidade). Se o valor total for maior que um determinado valor, exiba uma mensagem de alerta usando console.log. */

const product = {
  name: "Desk",
  price: 1500.0,
  stock: 300,
};

function calculateTotalStockValue(object, limit) {
  const total = object.price * object.stock;
  if (total >= limit) {
    console.log(
      `O produto ${object.name} excedeu o valor total em estoque R$ ${total},00. Limite R$ ${limit},00!`
    );
  } else {
    console.log(
      `O produto ${object.name} possui o valor total em estoque R$ ${total},00. Limite: R$ ${limit},00!`
    );
  }
}

function main() {
  calculateTotalStockValue(product, 20000);
}

main();
