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
 * -> getNome> Retorna o nome
 * -> getIdade> Retorna a idade
 * -> getEndereço> Retorna o endereço
 * -> getDadosCompletos> Retorna concatenado NOME, IDADE, GENERO, TELEFONE e TEMPO DE TRABALHO
 * -> getNe trabalho.
 * -> getNomeETelefone> Retorna nome e telefone.
 * -> getTempoDeTrabalho> Retorna o tempo deAposentar> Assuma que a idade de aposentadoria é 60 anos feminino, 65 masculino.
 * -> getTelefone> Retorna o telefone. 
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

class Pessoa {

    constructor(){
        this.nome = "";
        this.idade = 0;
        this.endereco = "";
        this.genero = "";
        this.telefone = "";
        this.tempoTrabalho = 0;
    }

    getNome(){
        return this.nome
    }

    nomear(nome){
        this.nome = nome;
    }

    getIdade(){
        return this.idade;
    }

    definirIdade(idade){
        if(idade > 0){
            return this.idade = idade;
        }
    }

    getEndereco(){
        return this.endereco;
    }

    definirEndereco(endereco){
        return this.endereco = endereco;
    }

    getDadosCompletos(){
        return this.nome + " " + this.idade + " " + this.endereco + " " + this.genero + " " + this.telefone + " " + this.tempoTrabalho; 
    }

    definirDadosCompletos(nome, idade, endereco, genero, telefone, tempoTrabalho){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.genero = genero;
        this.telefone = telefone;
        this.tempoTrabalho = tempoTrabalho;
    }

    getNomeETelefone(){
        return this.nome + " " + this.telefone;
    }

    definirNomeETelefone(nome, telefone){
        this.nome = nome;
        this.telefone = telefone;
    }

    getTempoDeTrabalho(){
        return this.tempoTrabalho;
    }

    definirTempoDeAposentar(idade, genero,tempoTrabalho){
        this.tempoTrabalho = tempoTrabalho;
        this.idade = idade;
        this.genero = genero;

        if(idade <= 65 && genero == 'homem'){
            tempoTrabalho = (65 - idade);
        }

        if(idade <= 60 && genero == 'mulher'){
            tempoTrabalho = (60 - idade);
            
        }
    }

    getTelefone(){
        return this.telefone;
    }

    definirTelefone(telefone){
        this.telefone = telefone;
    }

}

module.exports = Pessoa;