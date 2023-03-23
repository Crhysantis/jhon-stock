function login(email, password) {
  // Procura pelo usuário com o email fornecido
  const user = users.find(user => user.email === email);

  // Verifica se o usuário existe e se a senha está correta
  if (user && user.password === password) {
    // Retorna o ID do usuário, permitindo que ele acesse suas funções de estoque
    return user.id;
  } else {
    // Se o usuário não for encontrado ou a senha estiver incorreta, retorna null
    return null;
  }
}