const { v4: uuidv4 } = require('uuid');

function cadastrarEstabelecimento(nomeEstabelecimento, nomeAdministrador, senha, email, tipoEstabelecimento) {
  // cria um objeto para representar o estabelecimento
  const estabelecimento = {
    id: uuidv4(), // adiciona um ID único ao estabelecimento
    nomeEstabelecimento: nomeEstabelecimento,
    nomeAdministrador: nomeAdministrador,
    senha: senha,
    email: email,
    tipoEstabelecimento: tipoEstabelecimento
  };

  // armazena o objeto estabelecimento em um array ou em um banco de dados
  // aqui vou armazenar em um array como exemplo
  estabelecimentos.push(estabelecimento);

  // retorna uma mensagem de sucesso
  return "Cadastro realizado com sucesso!";
}

// exemplo de uso da função
const estabelecimentos = [];

cadastrarEstabelecimento("Bar do João", "João", "123456", "joao@bardojao.com.br", "Bar");