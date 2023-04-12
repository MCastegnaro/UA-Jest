const Conta = require("./src/Conta");

let conta = new Conta();

conta.ativar();
conta.depositar(100);

console.log(conta);