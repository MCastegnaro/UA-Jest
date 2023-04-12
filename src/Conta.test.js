const Conta = require("./Conta");

describe("Conta", () =>{
    test("Deve depositar com conta ativa", () => {
        const conta = new Conta();

        conta.ativar();
        conta.depositar(100.0);

        expect(conta.getSaldo()).toBe(100);
        
    });

    test("Não Deve depositar com conta inativa", () => {
        const conta = new Conta();

        conta.inativar();
        conta.depositar(100.0);

        expect(conta.getSaldo()).toBe(0);       
    });

    test("Deve sacar com conta ativa e saldo maior que o valor de saque", () => {
        const conta = new Conta();

        conta.ativar();
        conta.depositar(100.0);
        conta.sacar(70.0);

        expect(conta.getSaldo()).toBe(30);
        
    });

    test("Não deve sacar com conta inativa", () => {
        const conta = new Conta();

        conta.ativar();
        conta.depositar(100.0);
        conta.inativar();
        conta.sacar(70.0);

        expect(conta.getSaldo()).toBe(100);
        
    });

    test("Não deve sacar com conta ativa e saldo menor que o valor de saque", () => {
        const conta = new Conta();

        conta.ativar();
        conta.depositar(100.0);
        conta.sacar(110.0);

        expect(conta.getSaldo()).toBe(100);
        
    });
})
