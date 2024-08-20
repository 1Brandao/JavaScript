/* Crie um objeto que represente um pedido em um restaurante, com propriedades como cliente, pratos (um array de objetos representando os pratos pedidos), e total. Escreva métodos dentro desse objeto para adicionar pratos ao pedido, calcular o total e exibir um resumo do pedido. */

const pedido = {
  cliente: "Guilherme",
  pratos: [],
  total: 0,

  adicionarPrato: function (prato, quantidade) {
    const novoPrato = { prato, quantidade };
    this.pratos.push(novoPrato);
    this.total += prato.preco * quantidade;
  },

  calcularTotal: function () {
    this.total = this.pratos.reduce(
      (total, prato) => total + prato.prato.preco * prato.quantidade,
      0
    );
  },

  mostrarResumo: function () {
    console.log(`Resumo do pedido:\nCliente: ${this.cliente}`);
    this.pratos.forEach((prato, index) => {
      console.log(`${index + 1}. ${prato.quantidade}x ${prato.prato.nome} - R$
        ${prato.prato.preco * prato.quantidade}`);
    });
    console.log(`Total: R$ ${this.total}`);
  },
};

const prato1 = { nome: "Pizza", preco: 60 };
const prato2 = { nome: "Lasanha", preco: 35 };
const prato3 = { nome: "Hamburguer", preco: 25 };

pedido.adicionarPrato(prato1, 2);
pedido.adicionarPrato(prato2, 1);
pedido.adicionarPrato(prato3, 4);

pedido.calcularTotal();

pedido.mostrarResumo();
pedido.mostrarResumo();
