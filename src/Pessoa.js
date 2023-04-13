class Pessoa{
    constructor(nome, idade, endereco, telefone, genero, tempoDeTrabalho){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.genero = genero;
        this.telefone = telefone;
        this.tempoDeTrabalho = tempoDeTrabalho;
        this.dadosCompletos = nome.concat("," , idade , "," ,endereco, "," ,genero, ",", telefone, "," ,tempoDeTrabalho);
        this.nomeETelefone = nome.concat(",", telefone);
        this.tempoParaAposentadoria = 0;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getEndereco(){
        return this.endereco;
    }

    getTelefone(){
        return this.telefone;
    }

    getDadosCompletos(){
       return this.dadosCompletos;
    }  

    getNomeETelefone(){
        return this.nomeETelefone;
    }

    getTempoDeTrabalho(){
        return this.tempoDeTrabalho;
    }

    getTempoParaSeAposentar(){
        if(this.genero == "Masculino"){
            this.tempoParaAposentadoria = 65 - this.idade;
        } else {
            this.tempoParaAposentadoria = 60 - this.idade;
        }
        return this.tempoParaAposentadoria
    }
}
module.exports = Pessoa;

