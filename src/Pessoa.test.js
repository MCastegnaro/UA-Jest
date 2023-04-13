const Pessoa = require("./Pessoa");

describe("Pessoa", () => {
    
    let pessoa;

    let nome,
    idade,
    endereco,
    genero,
    telefone,
    tempoDeTrabalho,
    tempoParaSeAposentar;

    beforeAll(() => {
        nome = "Maria";
        idade = 20;
        endereco = "Rua Santos Dumont";
        genero = "feminino";
        telefone = 45999856896;
        tempoDeTrabalho = 10;
        
        if(genero == "feminino"){
            tempoParaSeAposentar = 60-idade;
        }else if(genero == "masculino"){
            tempoParaSeAposentar = 65-idade;
        }
        
        idadeParaAposentadoriaMasculino = 65;
        // idadeAcimaDoLimiteAposentadoriaMasculino = 70;
        idadeLParaAposentadoriaFeminino = 60
        // idadeAcimaDoLimiteAposentadoriaFeminino = 63;
        // generoFeminino = "Feminino";
    
    
        pessoa = new Pessoa(nome,idade,endereco,genero,telefone,tempoDeTrabalho);
    
        // dadosCompletos = nome.concat(", ",idade,", ",genero,", ",telefone,", ",endereco,", ",experiencia);
    })

    test("Deve retornar o nome correto", () => {
        expect(pessoa.getNome()).toBe(nome)
    })

    test("Deve retornar a idade corret", () => {
        expect(pessoa.getIdade()).toBe(idade)
    })

    test("Deve retornar o endereco correto", () => {
        expect(pessoa.getEndereco()).toBe(endereco)
    })

    test("Deve retornar o telefone correto", () => {
        expect(pessoa.getTelefone()).toBe(telefone)
    })

    test("Deve retornar o tempo de trabalho correto", () => {
        expect(pessoa.getTempoDeTrabalho()).toBe(tempoDeTrabalho)
    })

    // test("Deve retornar o tempo restante para a aposentadoria", () => {
    //     expect(pessoa.getTempoParaSeAposentar()).toBe(tempoParaSeAposentar)
    // })






})