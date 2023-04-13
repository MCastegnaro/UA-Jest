const Pessoa = require("./Pessoa");

describe("Pessoa", () => {
  let pessoaMasculina;
  let pessoaFeminina;
  nomeM = "Arnaldo";
  idadeM = 15;
  enderecoM = "vila c";
  generoM = "MASCULINO";
  telefoneM = "7070-7070";
  tempoDeTrabalhoM = 30;
  tempoParaSeAposentarM = 50

  nomeF = "Keterine";
  idadeF = 50;
  enderecoF = "vila a";
  generoF = "FEMININO";
  telefoneF = "7070-7071";
  tempoDeTrabalhoF = 30;
  tempoParaSeAposentarF = 10

  beforeAll(() => {
    pessoaMasculina = new Pessoa(
      nomeM,
      idadeM,
      enderecoM,
      generoM,
      telefoneM,
      tempoDeTrabalhoM
    );

    pessoaFeminina = new Pessoa(
      nomeF,
      idadeF,
      enderecoF,
      generoF,
      telefoneF,
      tempoDeTrabalhoF
    );
  });

  it("Deve retornar nome", () => {
    expect(pessoaFeminina.getNome()).toBe(nomeF);
  });

  it("Deve retornar idade", () => {
    expect(pessoaFeminina.getIdade()).toBe(idadeF);
  });

  it("Deve retornar endereco", () => {
    expect(pessoaFeminina.getEndereco()).toBe(enderecoF);
  });

  it("Deve retornar dados completos", () => {
    expect(pessoaFeminina.getDadosCompletos()).toBe(
      `${nomeF} ${idadeF} ${generoF} ${telefoneF} ${tempoDeTrabalhoF}`
    );
  });

  it("Deve retornar nome e telefone", () => {
    expect(pessoaFeminina.getNomeETelefone()).toBe(`${nomeF} ${telefoneF}`);
  });

  it("Deve retornar tempo de trabalho", () => {
    expect(pessoaFeminina.getTempoDeTrabalho()).toBe(tempoDeTrabalhoF);
  });

  it("Deve retornar tempo para se aposentar", () => {
    expect(pessoaFeminina.getTempoParaSeAposentar()).toBe(tempoParaSeAposentarF);
  });

  it("Deve retornar tempo para se aposentar", () => {
    expect(pessoaMasculina.getTempoParaSeAposentar()).toBe(tempoParaSeAposentarM);
  });

  it("Deve retornar telefone", () => {
    expect(pessoaFeminina.getTelefone()).toBe(telefoneF);
  });


});