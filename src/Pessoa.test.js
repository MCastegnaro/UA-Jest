const Pessoa = require("./Pessoa");
const GENERO = require("./Generos");

describe("Pessoa", () => {
  let pessoa;

  beforeEach(() => {
    pessoa = new Pessoa({
      nome: "Joãozinho",
      idade: 13,
      endereco: {
        cep: "99999999",
        numero: "777"
      },
      telefone: "1199999999",
      tempoDeTrabalho: 0,
      genero: GENERO.MALE
    });
  });

  test("Pessoa não deve ser cadastrada sem todos os dados", () => {
    expect(() => new Pessoa()).toThrowError(new Error("Dados faltantes"));
  });

  test("Pessoa deve retornar nome do tipo string e com mais de um caractere", () => {
    const nome = pessoa.getNome();

    expect(typeof nome).toBe("string");
    expect(nome.length).toBeGreaterThanOrEqual(2);
  });

  test("Pessoa deve retornar idade maior que 0 e menor que 160", () => {
    const idade = pessoa.getIdade();

    expect(typeof idade).toBe("number");
    expect(idade).toBeGreaterThan(0);
    expect(idade).toBeLessThan(160);
  });

  test("Pessoa deve retornar endereço com cep e número", () => {
    const endereco = pessoa.getEndereco();

    expect(typeof endereco).toBe("object");
    expect(typeof endereco.cep).toBe("string");
    expect(typeof endereco.numero).toBe("string");

    expect(endereco.cep.length).toBe(8);
    expect(endereco.numero.length).toBeGreaterThanOrEqual(1);
    expect(endereco.numero.length).toBeLessThanOrEqual(6);
  });

  test("Pessoa deve retornar um telefone do tipo string com apenas números e com length entre 10 e 11", () => {
    const telefone = pessoa.getTelefone();

    expect(typeof pessoa.telefone).toBe("string");
    expect(isNaN(pessoa.telefone)).toBe(false);

    expect(telefone.length).toBeGreaterThanOrEqual(10);
    expect(telefone.length).toBeLessThanOrEqual(11);
  });

  test("Pessoa deve retornar retonar um tempo de trabalho entre 0 e 142", () => {
    const tempoDeTrabalho = pessoa.getTempoDeTrabalho();

    expect(typeof tempoDeTrabalho).toBe("number");
    expect(tempoDeTrabalho).toBeGreaterThanOrEqual(0);
    expect(tempoDeTrabalho).toBeLessThanOrEqual(142);
  });

  test("Pessoa de gênero masculino com idade menor que 65 deve retornar um tempo para se aposentar", () => {
    pessoa.genero = GENERO.MALE;

    const idade = pessoa.getIdade();
    const tempoParaSeAposentar = pessoa.getTempoParaSeAposentar();

    expect(typeof tempoParaSeAposentar).toBe("number");
    expect(tempoParaSeAposentar).toBe(65 - idade);
  });

  test("Pessoa de gênero masculino com idade maior que 65 deve retornar tempo para se aposentar igual 0", () => {
    pessoa.genero = GENERO.MALE;
    pessoa.idade = 70;

    const tempoParaSeAposentar = pessoa.getTempoParaSeAposentar();

    expect(typeof tempoParaSeAposentar).toBe("number");
    expect(tempoParaSeAposentar).toBe(0);
  });

  test("Pessoa de gênero masculino com idade igual a 65 deve retornar tempo para se aposentar igual 0", () => {
    pessoa.genero = GENERO.MALE;
    pessoa.idade = 65;

    const tempoParaSeAposentar = pessoa.getTempoParaSeAposentar();

    expect(typeof tempoParaSeAposentar).toBe("number");
    expect(tempoParaSeAposentar).toBe(0);
  });

  test("Pessoa de gênero feminino com idade menor que 60 deve retornar um tempo para se aposentar", () => {
    pessoa.genero = GENERO.FEMALE;

    const idade = pessoa.getIdade();
    const tempoParaSeAposentar = pessoa.getTempoParaSeAposentar();

    expect(typeof tempoParaSeAposentar).toBe("number");
    expect(tempoParaSeAposentar).toBe(60 - idade);
  })  

  test("Pessoa de gênero feminino com idade maior 60 deve retornar tempo para se aposentar igual 0", () => {
    pessoa.genero = GENERO.FEMALE;
    pessoa.idade = 65;

    const tempoParaSeAposentar = pessoa.getTempoParaSeAposentar();

    expect(typeof tempoParaSeAposentar).toBe("number");
    expect(tempoParaSeAposentar).toBe(0);
  });
  

  test("Pessoa de gênero feminino com idade igual a 60 deve retornar tempo para se aposentar igual 0", () => {
    pessoa.genero = GENERO.FEMALE;
    pessoa.idade = 60;

    const tempoParaSeAposentar = pessoa.getTempoParaSeAposentar();

    expect(typeof tempoParaSeAposentar).toBe("number");
    expect(tempoParaSeAposentar).toBe(0);
  });

  test("Pessoa deve retornar nome e telefone", () => {
    const nomeETelefone = pessoa.getNomeETelefone();

    expect(typeof nomeETelefone).toBe("object");

    expect(typeof nomeETelefone.telefone).toBe("string");
    expect(nomeETelefone.telefone.length).toBeGreaterThanOrEqual(10);
    expect(nomeETelefone.telefone.length).toBeLessThanOrEqual(11);

    expect(typeof nomeETelefone.nome).toBe("string");
    expect(nomeETelefone.nome.length).toBeGreaterThanOrEqual(2);
  });

  test("Pessoa deve retornar todos os dados concatenados separados por vírgula", () => {
    const dadosCompletos = pessoa.getDadosCompletos();

    const [nome, idade, cep, numero, telefone, tempoDeTrabalho] = dadosCompletos.split(',');

    expect(typeof dadosCompletos).toBe("string");

    expect(nome.length).toBeGreaterThanOrEqual(2);

    expect(Number(idade)).toBeGreaterThan(0);
    expect(Number(idade)).toBeLessThan(160);

    expect(cep.length).toBe(8);
    expect(numero.length).toBeGreaterThanOrEqual(1);
    expect(numero.length).toBeLessThanOrEqual(6);

    expect(telefone.length).toBeGreaterThanOrEqual(10);
    expect(telefone.length).toBeLessThanOrEqual(11);

    expect(Number(tempoDeTrabalho)).toBeGreaterThanOrEqual(0);
    expect(Number(tempoDeTrabalho)).toBeLessThanOrEqual(142);
  });
})
