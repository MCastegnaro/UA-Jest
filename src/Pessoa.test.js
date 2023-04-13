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
        tempoParaSeAposentar = 0;

        
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

    





})