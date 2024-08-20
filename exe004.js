/* Crie um objeto que represente um pedido em um restaurante, com propriedades como cliente, pratos (um array de objetos representando os pratos pedidos), e total. Escreva métodos dentro desse objeto para adicionar pratos ao pedido, calcular o total e exibir um resumo do pedido. */

let cliente = prompt("Digite o nome do cliente");

const pedido = {
  numero: 0,
  cliente,
  pratos: [],
  total: 0,

  adicionarPratos: function (prato, quantidade) {
    const novoPrato = (prato, quantidade);
    this.pratos.push(novoPrato);
    this.total += prato.preco * quantidade;
  },

  resumoPedido: function (pedido) {
    console.log(`\nPedido: ${this.numero}\nCliente: ${this.cliente}`);
    console.log(this.pratos);
    console.log(`Total do pedido: R$ ${this.total},00`);
  },
};
