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
 * -> getNome> Retorna o nome V
 * -> getIdade> Retorna a idade V
 * -> getEndereço> Retorna o endereço V
 * -> getDadosCompletos> Retorna concatenado NOME, IDADE, GENERO, TELEFONE e TEMPO DE TRABALHO V
 * -> getNomeETelefone> Retorna nome e telefone. V
 * -> getTempoDeTrabalho> Retorna o tempo de trabalho. V
 * -> getTempoParaSeAposentar> Assuma que a idade de aposentadoria é 60 anos feminino, 65 masculino. V
 * -> getTelefone> Retorna o telefone. V
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

    constructor(nome, idade, endereco, genero, telefone, tempoDeTrabalho, tempoParaSeAposentar){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.genero = genero;
        this.telefone = telefone;
        this.tempoDeTrabalho = tempoDeTrabalho;
        this.tempoParaSeAposentar = tempoParaSeAposentar;
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
    getTempoDeTrabalho(){
        return this.tempoDeTrabalho;
    }
    getTempoParaSeAposentar(){
        if(this.genero == "feminino"){
            this.tempoParaSeAposentar = 60-this.idade;
        }else if(this.genero == "masculino"){
            this.tempoParaSeAposentar = 65-this.idade;
        }
        return this.tempoParaSeAposentar;
    }
    getDadosCompletos(){
        let dadosCompletos = this.nome.concat(", ",this.idade,", ",
        this.genero,", ",this.telefone,", ",this.endereco,", ",this.tempoDeTrabalho);
        return dadosCompletos;
    }
    getNomeETelefone(){
        return [this.nome,this.telefone];
    }


}
module.exports = Pessoa;