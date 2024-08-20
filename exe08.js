/* Crie um objeto contaBancaria com propriedades como numero, titular, saldo, e transacoes (um array de objetos representando cada transação). Implemente métodos para depositar, sacar, e visualizar o histórico de transações. */

const account = {
  numero: "1234567890",
  titular: "Guilherme",
  saldo: 10000,
  transacoes: [],

  depositar: function (valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.transacoes.push({
        tipo: "deposito",
        valor,
      });
    } else {
      console.log("Valor inválido para deposito.");
    }
  },

  sacar: function (valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push({
        tipo: "saque",
        valor,
      });
    } else {
      console.log("Valor inválido para saque ou saldo insuficiente.");
    }
  },

  visualizarTransacoes: function () {
    if (this.transacoes.length > 0) {
      console.log("Histórico de transações:");
      this.transacoes.forEach((transacao) => {
        console.log(`${transacao.tipo}: R$ ${transacao.valor},00`);
      });
      console.log(`Saldo Final: R$ ${this.saldo},00`);
    } else {
      console.log("Nenhuma transação encontrada.");
    }
  },
};

// Testando os métodos

account.depositar(5000);
account.sacar(2000);
account.visualizarTransacoes();
