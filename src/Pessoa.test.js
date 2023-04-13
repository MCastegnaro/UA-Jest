const Pessoa = require("./Pessoa.js")

describe("Pessoa", () =>{
    
    let pessoa;

    let idadePessoa,
        anosTrabalhados,
        telefonePessoa,
        generoPessoaM;

    beforeAll(() => {
        idadePessoa = 1;
        anosTrabalhados = 65;
        generoPessoaM = "Masculino";
        telefonePessoa = "12345678910";
    })

    beforeEach(() => {
        pessoa = new Pessoa();
    })

    test("Idade não deve ser zero.", () => {
        pessoa.idade = idadePessoa;
        expect(pessoa.idadeNaoZero(pessoa.idade)).toBe(idadePessoa);
    });

    test("Tempo de Trabalho deve ser maior que 60(F) ou 65(M) para se aposentar.", () => {
        pessoa.genero = generoPessoaM;
        pessoa.tempoDeTrabalhoAnos = anosTrabalhados;

        expect(pessoa.getTempoParaSeAposentar(pessoa.genero, pessoa.tempoDeTrabalhoAnos)).toBe("Aposentado");
    });

    test("Telefone deve ter 11 digitos e devem ser numeros.", () => {
        pessoa.telefone = telefonePessoa;

        expect(pessoa.telefone.length).toBe(11);
        expect(isNaN(pessoa.telefone)).toBe(false);
    });


})

