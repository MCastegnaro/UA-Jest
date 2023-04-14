const Pessoa = require("./Pessoa");

describe("Pessoa", () =>{
    let pessoa;

    let nome,
        idade,
        endereco,
        genero,
        telefone,
        tempoTrabalho;

    beforeAll(() =>{
        nome = "Amilton";
        idade = 17;
        endereco = "um endereco ai";
        genero = "homem";
        telefone = "0000-0000";
        tempoTrabalho = 43;
    })

    beforeEach(() =>{
        pessoa = new Pessoa();
    })

    test("Deve definir e retornar o nome", () =>{
        pessoa.nomear(nome);
        expect(pessoa.getNome()).toBe(nome);
    });

    test("Deve definir e retornar a idade", () =>{
        pessoa.definirIdade(idade);
        expect(pessoa.getIdade()).toBe(idade);
    });

    test("Deve definir e retornar o endereço", () =>{
        pessoa.definirEndereco(endereco);
        expect(pessoa.getEndereco()).toBe(endereco);
    });

    test("Deve definir e retornar todos os dados", () =>{
        pessoa.definirDadosCompletos(nome, idade, endereco, genero, telefone, tempoTrabalho);
        expect(pessoa.getDadosCompletos()).toBe(nome + " " + idade + " " + endereco + " " + genero + " " + telefone + " " + tempoTrabalho);
    });

    test("Deve definir e retornar nome e telefone somente", () =>{
        pessoa.definirNomeETelefone(nome, telefone);
        expect(pessoa.getNomeETelefone()).toBe(nome + " " + telefone);
    });

    test("Deve definir e retornar o telefone", () =>{
        pessoa.definirTelefone(telefone);
        expect(pessoa.getTelefone()).toBe(telefone);
    });

    test("Deve definir e retornar o telefone", () =>{
        pessoa.definirTelefone(telefone);
        expect(pessoa.getTelefone()).toBe(telefone);
    });

    test("Deve definir e retornar o tempo restante de trabalho necessário para aposentar", () =>{
        pessoa.definirTempoDeAposentar(idade, genero, tempoTrabalho);
        expect(pessoa.getTempoDeTrabalho()).toBe(tempoTrabalho);
    });
})