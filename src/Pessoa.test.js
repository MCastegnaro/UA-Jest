const Pessoa = require('./Pessoa');

describe("Pessoa", () => {
    let pessoa;

    let DadosCompletos;

    let NomeETelefone;

    let nome,
        idade,
        endereco,
        genero,
        telefone,
        TempoDeTrabalho;

    beforeAll(() => {
        nome = "Carlos";
        idade = 50;
        endereco = "Rua Alameda Bigua";
        genero = "Masculino";
        telefone = 998507720;
        TempoDeTrabalho = 27;
    })    

    beforeEach(() => {
        pessoa = new Pessoa(nome,idade,endereco,genero,telefone,TempoDeTrabalho);

        DadosCompletos = nome.concat('',idade,'',endereco,'',genero,'',telefone,'',TempoDeTrabalho,'');

        NomeETelefone = nome.concat('',telefone,'');
    })

    test("Deve retornar o nome", () => {
        expect(pessoa.getNome()).toBe(nome);
    });

    test("Deve retornar a idade", () => {
        expect(pessoa.getIdade()).toBe(idade);
    });

    test("Deve retornar o endereco", () => {
        expect(pessoa.getEndereco()).toBe(endereco);
    });

    test("Deve retornar o genero", () => {
        expect(pessoa.getGenero()).toBe(genero);
    });

    test("Deve retornar Dados completos", () => {
        expect(pessoa.getDadosCompletos()).toBe(DadosCompletos);
    });

    test("Deve retornar nome e telefone", () => {
        expect(pessoa.getNomeETelefone()).toBe(NomeETelefone);
    });

    test("Deve retornar o telefone", () => {
        expect(pessoa.getTelefone()).toBe(telefone);
    });
    
    test("Deve retornar o tempo de aposentar para mulher", () => {
        expect(pessoa.getTempoParaSeAposentarMulher()).toBe(this.TempoDeTrabalhoMulher);
    });

    test("Deve retornar o tempo de aposentar para homem", () => {
        expect(pessoa.getTempoParaSeAposentarMulher()).toBe(this.TempoDeTrabalhoMulher);
    });

})