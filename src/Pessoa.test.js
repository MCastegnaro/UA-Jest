const Pessoa = require("./Pessoa");

describe("Pessoa Masculino", () => {
  let pessoa;
  nome = "Guilherme";
  idade = 69;
  endereco = "Russia";
  genero = "Masculino";
  telefone = "4002-8922";
  tempoDeTrabalho = 52;
  tempoParaSeAposentar = 65;

  beforeAll(() => {
    pessoa = new Pessoa(
      nome,
      idade,
      endereco,
      genero,
      telefone,
      tempoDeTrabalho
    );
  });

  it("Deve retornar nome", () => {
    expect(pessoa.getNome()).toBe(nome);
  });

  it("Deve retornar idade", () => {
    expect(pessoa.getIdade()).toBe(idade);
  });

  it("Deve retornar endereco", () => {
    expect(pessoa.getEndereco()).toBe(endereco);
  });

  it("Deve retornar dados completos", () => {
    expect(pessoa.getDadosCompletos()).toBe(
      `${nome} ${idade} ${genero} ${telefone} ${tempoDeTrabalho}`
    );
  });

  it("Deve retornar nome e telefone", () => {
    expect(pessoa.getNomeETelefone()).toBe(`${nome} ${telefone}`);
  });

  it("Deve retornar tempo de trabalho", () => {
    expect(pessoa.getTempoDeTrabalho()).toBe(tempoDeTrabalho);
  });

  it("Deve retornar tempo para se aposentar 65", () => {
    expect(pessoa.getTempoParaSeAposentar()).toBe(tempoParaSeAposentar - idade);
  });

  it("Deve retornar telefone", () => {
    expect(pessoa.getTelefone()).toBe(telefone);
  });
});

describe("Pessoa Feminino", () => {
  let pessoa;
  nome = "Farinha";
  idade = 24;
  endereco = "Russia";
  genero = "FEMININO";
  telefone = "4002-8922";
  tempoDeTrabalho = 52;
  tempoParaSeAposentar = 60;

  beforeAll(() => {
    pessoa = new Pessoa(
      nome,
      idade,
      endereco,
      genero,
      telefone,
      tempoDeTrabalho
    );
  });

  it("Deve retornar nome", () => {
    expect(pessoa.getNome()).toBe(nome);
  });

  it("Deve retornar idade", () => {
    expect(pessoa.getIdade()).toBe(idade);
  });

  it("Deve retornar endereco", () => {
    expect(pessoa.getEndereco()).toBe(endereco);
  });

  it("Deve retornar dados completos", () => {
    expect(pessoa.getDadosCompletos()).toBe(
      `${nome} ${idade} ${genero} ${telefone} ${tempoDeTrabalho}`
    );
  });

  it("Deve retornar nome e telefone", () => {
    expect(pessoa.getNomeETelefone()).toBe(`${nome} ${telefone}`);
  });

  it("Deve retornar tempo de trabalho", () => {
    expect(pessoa.getTempoDeTrabalho()).toBe(tempoDeTrabalho);
  });

  it("Deve retornar tempo para se aposentar 60", () => {
    expect(pessoa.getTempoParaSeAposentar()).toBe(tempoParaSeAposentar - idade);
  });

  it("Deve retornar telefone", () => {
    expect(pessoa.getTelefone()).toBe(telefone);
  });
});
