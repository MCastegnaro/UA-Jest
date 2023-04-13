const Pessoa = require("./Pessoa");


let pessoa;
let nome, idade, endereco, genero, telefone, tempoDeTrabalho;
let dadosCompletos;
let nomeETelefone;
let tempoParaAposentadoria;


beforeAll(() => {
    nome = "Jean Guilherme"
    idade = 28;
    endereco = "Rua Aquidauana"
    genero = "Masculino"
    telefone = "45999227476"
    tempoDeTrabalho = "10 anos"
    dadosCompletos = nome.concat("," , idade , "," ,endereco, "," ,genero, ",", telefone, "," ,tempoDeTrabalho);
    nomeETelefone = nome.concat(",", telefone);
    if (genero == "Masculino"){
        tempoParaAposentadoria = 65 - idade;
    } else {
        tempoParaAposentadoria = 60 - idade;
    }
})

beforeEach(() => {
    pessoa = new Pessoa(nome, idade, endereco, telefone, genero, tempoDeTrabalho);
})

describe("Pessoa", () => {
    test("Deve retornar o nome da pessoa", () =>{
        expect(pessoa.getNome()).toBe(nome);
    });

    test("Deve retornar a idade da pessoa", ()  =>{
        expect(pessoa.getIdade()).toBe(idade);
    });

    test("Deve retorna o endereco da pessoa", () =>{
        expect(pessoa.getEndereco()).toBe(endereco);
    });

    test("Deve retornar todos os dados da pesssoa", () =>{
        expect(pessoa.getDadosCompletos()).toBe(dadosCompletos);
    })

    test("Deve retornar Nome e telefone da pessoa", () =>{
        expect(pessoa.getNomeETelefone()).toBe(nomeETelefone);
    })

    test("Deve retornar o tempo de trabalho da pessoa", () => {
        expect(pessoa.getTempoDeTrabalho()).toBe(tempoDeTrabalho);
    })

    test("Deve retornar o tempo que falta para a pessoa se aposentar", () => {
        expect(pessoa.getTempoParaSeAposentar()).toBe(tempoParaAposentadoria);
    })

    test("Deve retornar o numero de telefone da pessoa", () =>{
        expect(pessoa.getTelefone()).toBe(telefone);
    })

})
 


