function adicionarProduto(name, category, price, quantity, supplier) {
    // cria um objeto para representar o produto
    const product = {
      name: name,
      category: category,
      price: price,
      quantity: quantity,
      supplier: supplier

    };
  
    // armazena o objeto produto em um array
    inventory.push(product);
  
    // retorna uma mensagem de sucesso
    return `${name} Adicionado ao estoque com sucesso!`;
  }
  
  // exemplo de uso da função
  const inventory = [];
  
  adicionarProduto("Água", bebidas, 2.00, 10, "Fornecedor A");
  adicionarProduto("Pizza G", refeicoes, 59.99, 100, "Fornecedor B");