// Define o inventário de produtos com seus nomes e preços
const inventory = [
  { name: "Hambúrguer", price: 10 },
  { name: "Batata Frita", price: 5 },
  { name: "Refrigerante", price: 3 },
];

// Exibe o cardápio de produtos e solicita a quantidade desejada de cada um
function showMenu() {
  console.log("Bem-vindo ao nosso cardápio! Por favor, escolha os itens que deseja pedir:");
  
  for (let i = 0; i < inventory.length; i++) {
    console.log(`${i+1}. ${inventory[i].name} - R$${inventory[i].price}`);
  }

  const order = {};
  let moreItems = true;

  while (moreItems) {
    const itemNumber = prompt("Digite o número do item que deseja pedir:");
    const itemQuantity = prompt(`Quantos ${inventory[itemNumber-1].name} deseja pedir?`);
    
    order[inventory[itemNumber-1].name] = parseInt(itemQuantity);

    const response = prompt("Deseja pedir mais algum item? (sim/não)").toLowerCase();
    if (response === "não" || response === "nao") {
      moreItems = false;
    }
  }

  console.log("Seu pedido é:");
  for (const item in order) {
    console.log(`${order[item]} x ${item} - R$${order[item] * inventory.find(product => product.name === item).price}`);
  }

  console.log(`Total do pedido: R$${calculateTotal(order)}`);
}

// Calcula o total do pedido
function calculateTotal(order) {
  let total = 0;

  for (const item in order) {
    total += order[item] * inventory.find(product => product.name === item).price;
  }

  return total;
}

// Chama a função para exibir o cardápio
showMenu();

// Cria um objeto com os itens pedidos pelo cliente
const itensPedido = [];
for (const item in order) {
  const precoUnitario = inventory.find(product => product.name === item).price;
  const quantidade = order[item];
  itensPedido.push({ nome: item, quantidade, precoUnitario });
}

// Cria uma nova linha na tabela com as informações do pedido
const newRow = document.createElement('tr');
const colNumeroPedido = document.createElement('td');
colNumeroPedido.textContent = Math.floor(Math.random() * 1000) + 1; // Gera um número aleatório para o número do pedido
newRow.appendChild(colNumeroPedido);
const colDataHoraPedido = document.createElement('td');
colDataHoraPedido.textContent = new Date().toLocaleString();
newRow.appendChild(colDataHoraPedido);
const colItensPedido = document.createElement('td');
for (const item of itensPedido) {
  const divItem = document.createElement('div');
  divItem.textContent = `${item.nome} (x${item.quantidade})`;
  colItensPedido.appendChild(divItem);
}
newRow.appendChild(colItensPedido);
const colStatusPedido = document.createElement('td');
colStatusPedido.textContent = 'Pendente';
newRow.appendChild(colStatusPedido);
const colAcoesPedido = document.createElement('td');
const botaoSairParaEntrega = document.createElement('button');
botaoSairParaEntrega.textContent = 'Sair para Entrega';
botaoSairParaEntrega.addEventListener('click', () => {
  sairParaEntrega(colNumeroPedido.textContent);
});
colAcoesPedido.appendChild(botaoSairParaEntrega);
newRow.appendChild(colAcoesPedido);
const tabela = document.querySelector('table');
tabela.querySelector('tbody').appendChild(newRow);

