const Conta = require("./src/conta")
let conta = new Conta()
conta.ativar()
conta.depositar(100)

console.log("Valor da sua conta é " + conta.getSaldo())