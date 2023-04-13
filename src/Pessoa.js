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

        this.nome = ""
        this.idade = 0 
        this.endereco = ""
        this.genero = ""
        this.telefone = ""
        this.tempoDeTrabalhoAnos = 0

    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    idadeNaoZero(idade){
        if(idade !== 0){
            return idade
        }
    }

    getEndereco(){
        return this.endereco;
    }

    getDadosCompletos(){
        return `${this.nome} ${this.idade} ${this.genero} ${this.telefone} ${this.tempoDeTrabalhoAnos}`;
    }

    getNomeETelefone(){
        return `${this.nome} ${this.telefone}`;
    }

    getTempoDeTrabalhoAnos(){
        return this.tempoDeTrabalhoAnos;
    }

    getTempoParaSeAposentar(genero, tempoDeTrabalho){

        if(genero === "Masculino"){
            if(tempoDeTrabalho >= 65){
                return "Aposentado";
            }
            else{ 
                return "Não Aposentado";
            }

        }else if (genero === "Feminino"){
            if(tempoDeTrabalho >= 60){
                return "Aposentada";
            }
            else{ 
                return "Não Aposentada";
            }
        }else if (genero === "Não Binário"){
            return "Não há lei específica com as regras de aposentadoria para este Gênero"
        }

    }

    getTelefone(){
        return this.telefone;
    }

}

module.exports = Pessoa;