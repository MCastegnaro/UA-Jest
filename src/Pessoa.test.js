const Pessoa = require("./Pessoa");

describe("Pessoa", () => {


    let pessoa;

    let nome,
        idade,
        endereco,
        generoMasculino,
        generoFeminino,
        telefone,
        tempoDeTrabalho;

    beforeAll(() => {
        nome = "Luisin do gado";
        idade = 20;
        endereco = "moro do lado do perigo";
        generoMasculino = "masculino";
        generoFeminino = "feminino";
        telefone = "45998193666";
        tempoDeTrabalho = 5;
    })

    beforeEach(() => {
        pessoa = new Pessoa();
    })

    test("Deve retornar tempo para se aposentar do homem", () => {

        pessoa.definirTempoParaSeAposentar(idade, generoMasculino);
        expect(pessoa.getTempoDeTrabalho()).toBe(65 - idade);
    });

    
    test("Deve retornar tempo para se aposentar da mulher", () => {

        pessoa.definirTempoParaSeAposentar(idade, generoFeminino);
        expect(pessoa.getTempoDeTrabalho()).toBe(60 - idade);
    });


    test("Deve retornar telefone", () => {

        pessoa.definirTelefone(telefone);
        expect(pessoa.getTelefone()).toBe(telefone);
    });

    test("Deve retornar tempo de trabalho ", () => {

        pessoa.definirTempoDeTrabalho(tempoDeTrabalho);
        expect(pessoa.getTempoDeTrabalho()).toBe(tempoDeTrabalho);
    });

    test("Deve retornar nome e telefone ", () => {

        pessoa.definirNomeETelefone(nome, telefone);
        expect(pessoa.getNomeETelefone()).toBe(nome + " " + telefone);
    });


    test("Deve retornar dados completos concatenados", () => {

        pessoa.definirDadosCompletos(nome, idade, generoMasculino, telefone, tempoDeTrabalho);
        expect(pessoa.getDadosCompletos()).toBe(nome + " " + idade + " " + generoMasculino + " " + telefone + " " + tempoDeTrabalho);
    });

    test("Deve retornar o nome", () => {

        pessoa.nomear(nome);
        expect(pessoa.getNome()).toBe(nome);
    });

    test("Deve retornar a idade", () => {

        pessoa.definirIdade(idade);
        expect(pessoa.getIdade()).toBe(idade);
    });

    test("Não deve retornar a idade negativa", () => {


        expect(() => pessoa.definirIdade(-18))
            .toThrowError(new Error("Idade não pode ser negativa."));

        expect(pessoa.getIdade()).toBe(0);
    });

    test("Deve conseguir pegar o endereço", () => {


        pessoa.definirEndereco(endereco);

        expect(pessoa.getEndereco()).toBe(endereco);
    });

})