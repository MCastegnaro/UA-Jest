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
        idade = "20 anos";
        endereco = "Rua Ypacarai"
        genero = "Masculino"
        telefone = "45991431900";
        tempoDeTrabalho = "20";
    })

    beforeEach(() => {
        pessoa = new Pessoa(nome, idade, endereco, genero, telefone, tempoDeTrabalho);

        DadosCompletos = nome.concat('', idade,'', endereco,'', genero,'', telefone,'', tempoDeTrabalho,''); 
        nomeETelefone = nome.concat('',telefone,'');

    })

    test("Deve retornar o nome informado", () => {
        expect(pessoa.getNome()).toBe(nome)
    });

    test("Deve retornar o idade informada", () => {
        expect(pessoa.getIdade()).toBe(idade)
    });

    test("Deve retornar o endereco informado", () => {
        expect(pessoa.getEndereco()).toBe(endereco)
    });

    test("Deve retornar o genero escolhido", () => {
        expect(pessoa.getGenero()).toBe(genero)
    });

    test("Deve retornar o telefone informado", () => {
        expect(pessoa.getTelefone()).toBe(telefone)
    });

    test("Deve retornar o tempo de trabalho informado", () => {
        expect(pessoa.getTempoDeTrabalho()).toBe(tempoDeTrabalho)
    });

    test("Deve retornar todos os dados informados", () => {
        expect(pessoa.getDadosCompletos()).toBe(DadosCompletos);
    });

    test("Deve retornar o nome e o telefone informado", () => {
        expect(pessoa.getNomeETelefone()).toBe(nomeETelefone);
    });

    test("Deve verificar se a mulher pode se aposentar", () => {
        expect(pessoa.getTempoParaSeAposentarMulher()).toBe(this.idadeMulherAposentadoria);
    });

    test("Deve verificar se a homem pode se aposentar", () => {
        expect(pessoa.getTempoParaSeAposentarMulher()).toBe(this.idadeHomemAposentadoria);
    });







    









})