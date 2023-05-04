import { genero, Pessoa } from './Pessoa.js';

describe('Testes para a classe Pessoa', () => {
    let pessoa;
    
    const expectPerson = {
        nome : 'Henrique Amaral da Silva',
        idade : 18,
        endereco : 'Rua das Cataratas, 183',
        genero : genero.MASCULINO,
        telefone : '(45) 9999-9999',
        tempoDeTrabalho : 2
    }

    beforeEach(() => {
        pessoa = new Pessoa('Henrique Amaral da Silva', 18, 'Rua das Cataratas, 183', genero.MASCULINO, '(45) 9999-9999', 2);
    });

    it('getNome deve retornar o nome correto', () => {
        expect(pessoa.getNome()).toBe(expectPerson.nome);
    });

    it('getIdade deve retornar a idade correta', () => {
        expect(pessoa.getIdade()).toBe(expectPerson.idade);
    });

    it('getEndereco deve retornar o endereço correto', () => {
        expect(pessoa.getEndereco()).toBe(expectPerson.endereco);
    });

    it('getDadosCompletos deve retornar as informações completas', () => {
        expect(pessoa.getDadosCompletos()).toBe(`${expectPerson.nome}, ${expectPerson.idade} anos, ${expectPerson.genero}, tel: ${expectPerson.telefone}, tempo de trabalho: ${expectPerson.tempoDeTrabalho} anos`);
    });

    it('getNomeETelefone deve retornar nome e telefone', () => {
        expect(pessoa.getNomeETelefone()).toBe(`nome: ${expectPerson.nome}, tel: ${expectPerson.telefone}`);
    });

    it('getTempoDeTrabalho deve retornar o tempo de trabalho correto', () => {
        expect(pessoa.getTempoDeTrabalho()).toBe(expectPerson.tempoDeTrabalho);
    });

    it('getTempoParaSeAposentar deve retornar o tempo correto para aposentadoria', () => {
        expect(pessoa.getTempoParaSeAposentar()).toBe(((expectPerson.genero == genero.MASCULINO) ? 65 : 60) - expectPerson.idade);
    });

    it('getTelefone deve retornar o telefone correto', () => {
        expect(pessoa.getTelefone()).toBe(expectPerson.telefone);
    });
});