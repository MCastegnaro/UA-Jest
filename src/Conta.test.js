const Conta = require("./Conta");

describe("Conta", () => {
  test("Deve depositar com conta ativa", () => {
    const conta = new Conta();

    conta.ativar();
    conta.depositar(100.00);

    expect(conta.getSaldo()).toBe(100.00);
  });

  test("Não deve depositar com conta inativa e sem saldo", () => {
    const conta = new Conta();

    conta.depositar(100.00);

    expect(conta.getSaldo()).toBe(0);
  });

  test("Não deve depositar com conta inativa e com saldo", () => {
    const conta = new Conta();
    
    conta.ativar();
    conta.depositar(100.00);
    conta.inativar();
    conta.sacar(100.00)

    expect(conta.getSaldo()).toBe(100.00);
  });

  test("Deve sacar com conta ativa e saldo maior ou igual ao valor de saque", () => {
    const conta = new Conta();

    conta.ativar();
    conta.depositar(100.00);
    conta.sacar(90.00);

    expect(conta.getSaldo()).toBe(10.00);

    conta.sacar(10.00);

    expect(conta.getSaldo()).toBe(0);
  })

  test("Não deve sacar com conta ativa e saldo menor que o valor de saque", () => {
    const conta = new Conta();

    conta.ativar();
    conta.depositar(100.00);
    conta.sacar(200.00);

    expect(conta.getSaldo()).toBe(100.00);
  })
});