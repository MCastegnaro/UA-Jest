const Pessoa = require("./Pessoa");

describe("Pessoa", () => {
    let pessoa;
    let DadosCompletos;

    let nome,
        idade,
        endereco,
        genero,
        telefone,
        tempoDeTrabalho;

    beforeAll(() => {
        nome = "Gabriel";
        idade = 20;
        endereco = "Rua Ypacarai"
        genero = "Masculino"
        telefone = 45991431900;
        tempoDeTrabalho = 20;
    })

    beforeEach(() => {
        pessoa = new Pessoa(nome, idade, endereco, genero, telefone, tempoDeTrabalho);
        DadosCompletos = nome.concat('', idade,'',endereco,'',genero,'',telefone,'',tempoDeTrabalho,'');
    })

    test("Deve retornar o nome estipulado", () => {
        expect(pessoa.getNome()).toBe(nome)
    })



})