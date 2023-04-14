const Pessoa = require("./Pessoa")

describe("Pessoa", () => {
    let pessoa;

    let idade,
        endereco,
        genero,
        telefone,
        tempoTrabalho;

    beforeAll(() => {
        idade = 23;
        endereco = "Av. das Cataratas"
        genero = "Male";
        telefone = "98212669"
        tempoTrabalho = 6;
    })

    beforeEach(() =>{
        pessoa = new Pessoa();
    })

    test("Se for -Male- Deve ter pelo menos 65 anos de carteira assinada para atingir a aposentadoria", () => {
        pessoa.genero = genero;
        pessoa.tempoTrabalho = tempoTrabalho;

        expect(pessoa.getAposentadoria(pessoa.genero, pessoa.tempoTrabalho)).toBe("Pode aposentar")
    })

    test("Se for -Female- Deve ter pelo menos 60 anos de carteira assinada para atingir a aposentadoria", () => {
        pessoa.genero = genero;
        pessoa.tempoTrabalho = tempoTrabalho;

        expect(pessoa.getAposentadoria(pessoa.genero, pessoa.tempoTrabalho)).toBe("Pode aposentar")
    })

    test("A idade deve ser menor que 120 anos", () => {
        pessoa.idade = idade;

        expect(pessoa.idadeMax(pessoa.idade)).toBe(idadePessoa);
    })  
})