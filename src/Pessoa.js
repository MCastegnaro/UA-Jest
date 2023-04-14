/**
 * Criar uma classe PESSOA e adicionar os seguintes atributos para ela
 * - Nome 
 * - Idade 
 * - Endereço
 * - Gênero
 * - Telefone
 * - Tempo de trabalho
 * 
 * Essa classe deve ter um contrutor publico para instanciar todos os atributos listados acima
 * 
 * Os métodos são:
 * -> getNome> Retorna o nome v Está testado
 * -> getIdade> Retorna a idade v Está testado
 * -> getEndereço> Retorna o endereço v Está testando
 * -> getDadosCompletos> Retorna concatenado NOME, IDADE, GENERO, TELEFONE e TEMPO DE TRABALHO v Está testado
 * -> getNomeETelefone> Retorna nome e telefone.  v Está testado
 * -> getTempoDeTrabalho> Retorna o tempo de trabalho.v Está testado
 * -> getTempoParaSeAposentar> Assuma que a idade de aposentadoria é 60 anos feminino, 65 masculino. v
 * -> getTelefone> Retorna o telefone. v está testado
 * 
 * Em seguida crie uma classe de teste para PESSOA e cubra as funcionalidades
 * com testes unitários para validar o correto funcionamento da mesma.
 * 
 * 
 * ENTREGA
 * 
 * A partir da branch aula-02 (upstram), deve ser criada uma branch com o seguinte padrão: ua-nome-sobrenome 
 * e nela realizar o desenvolvimento da atividade. Após concluída, a ativade, gerar um PR (pull request) apontando para a branch
 * entrega-02 lá do repositório do professor.
 */

const { error } = require("console");

class Pessoa {
    constructor() {
        this.nome = "";
        this.idade = 0;
        this.endereco = "";
        this.genero = "";
        this.telefone = "";
        this.tempoDeTrabalho = 0;
    }
    getNome() {
        return this.nome;
    }
    nomear(nome) {
        this.nome = nome;
    }
    definirIdade(idade) {
        if (idade > 0) {
            this.idade = idade;
        } else {
            throw new Error("Idade não pode ser negativa.")
        }
    }
    getIdade() {
        return this.idade;
    }
    definirEndereco(endereco) {
        this.endereco = endereco;
    }
    getEndereco() {
        return this.endereco;
    }

    definirDadosCompletos(nome, idade, genero, telefone, tempoDeTrabalho) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.telefone = telefone;
        this.tempoDeTrabalho = tempoDeTrabalho;
    }
    getDadosCompletos() {
        return this.nome + " " + this.idade + " " + this.genero + " " + this.telefone + " " + this.tempoDeTrabalho;
    }

    definirNomeETelefone(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
    getNomeETelefone() {
        return this.nome + " " + this.telefone;
    }

    definirTempoDeTrabalho(tempoDeTrabalho) {
        this.tempoDeTrabalho = tempoDeTrabalho;
    }

    getTempoDeTrabalho() {
        return this.tempoDeTrabalho;
    }

    definirTempoParaSeAposentar(idade, genero){
        this.idade = idade;
        this.genero = genero;
    
        if (genero == "masculino" && idade <= 65){
            this.tempoDeTrabalho = (65 - idade);       
         }
        else if(genero == "feminino" && idade <= 60){
            this.tempoDeTrabalho = (60 - idade);
        }


    }

    getTempoParaSeAposentar() {
        if (this.genero == "masculino" && this.idade <= 65) {
            return this.idade - this.tempoDeTrabalho;
        } else if (this.genero == "feminino" && this.idade <= 60) {
            return this.idade - this.tempoDeTrabalho;
        }


    }

    definirTelefone(telefone) {
        this.telefone = telefone;
    }

    getTelefone() {
        return this.telefone;
    }


}
module.exports = Pessoa;