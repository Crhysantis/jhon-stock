function retirarProduto(name, quantidade) {
  // procura pelo produto no estoque com base no nome
  const index = inventory.findIndex(product => product.name === name);

  if (index === -1) {
    // se o produto não foi encontrado no estoque
    return "Produto não encontrado no estoque.";
  } else if (inventory[index].quantity < quantidade) {
    // se a quantidade solicitada for maior do que a quantidade disponível no estoque
    return "Quantidade solicitada maior do que a quantidade disponível no estoque.";
  } else {
    // atualiza a quantidade do produto no estoque
    inventory[index].quantity -= quantidade;

    // retorna uma mensagem de sucesso
    return `${quantidade} unidades de ${name} retiradas do estoque com sucesso!`;
  }
}

// exemplo de uso da função
retirarProduto("Água", 5);