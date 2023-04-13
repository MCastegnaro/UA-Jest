const Pessoa = require("./Pessoa");

describe("Pessoa Masculino", () => {
  let pessoa;
  nome = "Roger";
  idade = 55;
  endereco = "rua picanha";
  genero = Pessoa.Generos.masculino;
  telefone = "2432-5132";
  tempoDeTrabalho = 35;
  tempoParaSeAposentar = Pessoa.IdadeAposentadoriaMasculino;

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
        `Nome: ${nome}, idade: ${idade}, genero:${genero}, telefone: ${telefone}, tempo de trabalho: ${tempoDeTrabalho}.`
    );
  });

  it("Deve retornar nome e telefone", () => {
    expect(pessoa.getNomeETelefone()).toBe(`Nome: ${nome}, telefone: ${telefone}.`);
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
  nome = "Lúcia";
  idade = 50;
  endereco = "rua taroba";
  genero = Pessoa.Generos.feminino;
  telefone = "1232-1232";
  tempoDeTrabalho = 30;
  tempoParaSeAposentar = Pessoa.IdadeAposentadoriaFeminino;

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
        `Nome: ${nome}, idade: ${idade}, genero:${genero}, telefone: ${telefone}, tempo de trabalho: ${tempoDeTrabalho}.`
    );
  });

  it("Deve retornar nome e telefone", () => {
    expect(pessoa.getNomeETelefone()).toBe(`Nome: ${nome}, telefone: ${telefone}.`);
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
