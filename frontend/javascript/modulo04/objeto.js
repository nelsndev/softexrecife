const banco = {
  conta: "12345",
  saldo: 100,
  tipoConta: "corrente",
  agencia: "01234-5",

  buscarSaldo: function () {
    return this.saldo;
  },

  deposito: function (valor) {
    this.saldo += valor;
  },

  saque: function (valor) {
    this.saldo -= valor;
  },

  numeroConta: function () {
    return this.conta;
  },
};
