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
 * -> getNomeETelefone> Retorna nome e telefone.
 * -> getTempoDeTrabalho> Retorna o tempo de trabalho.
 * -> getTempoParaSeAposentar> Assuma que a idade de aposentadoria é 60 anos feminino, 65 masculino.
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

    constructor() {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.genero = genero;
        this.telefone = telefone;
        this.tempoDeTrabalho = tempoDeTrabalho;
        this.idadeMulherAposentadoria = idadeMulherAposentadoria;
        this.idadeHomemAposentadoria = idadeHomemAposentadoria;
        this.ativo = false;
    }

    ativar() {
        this.ativo = true;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getEndereco() {
        return this.endereco;
    }

    getDadosCompletos() {
        return this.nome, this.idade, this.genero, this.telefone, this.tempoDeTrabalho;
    }

    getNomeETelefone() {
        return this.nome, this.telefone;
    }

    getTempoDeTrabalho() {
        return this.tempoDeTrabalho;
    }

    getTempoParaSeAposentarMulher() { 
        if(this.idadeMulherAposentadoria - this.tempoDeTrabalho >= 60){
            this.idadeMulherAposentadoria -= this.tempoDeTrabalho;
        } else {
            throw new Error("Você já pode se aposentar, sua idade ultrapassa a idade maxima para trabalhar!")
        }
    }

    getTempoParaSeAposentarHomem() { 
        if(this.idadeHomemAposentadoria - this.tempoDeTrabalho >= 65){
            this.idadeHomemAposentadoria -= this.tempoDeTrabalho;
        } else {
            throw new Error("Você já pode se aposentar, sua idade ultrapassa a idade maxima para trabalhar!")
        }
    }

    getTelefone() {
        return this.telefone;
    }

}

module.exports = Pessoa;