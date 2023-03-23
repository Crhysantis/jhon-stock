// cria uma nova linha na tabela
const newRow = document.createElement('tr');

// define o número do pedido
const numeroPedido = 123;

// define a data e hora do pedido
const dataHoraPedido = new Date().toLocaleString();

// define os itens pedidos
const itensPedido = [
  { nome: 'Hambúrguer', quantidade: 2, precoUnitario: 12.5 },
  { nome: 'Batata Frita', quantidade: 1, precoUnitario: 7.5 },
];

// cria uma coluna para o número do pedido
const colNumeroPedido = document.createElement('td');
colNumeroPedido.textContent = numeroPedido;
newRow.appendChild(colNumeroPedido);

// cria uma coluna para a data e hora do pedido
const colDataHoraPedido = document.createElement('td');
colDataHoraPedido.textContent = dataHoraPedido;
newRow.appendChild(colDataHoraPedido);

// cria uma coluna para os itens pedidos
const colItensPedido = document.createElement('td');
for (const item of itensPedido) {
  const divItem = document.createElement('div');
  divItem.textContent = `${item.nome} (x${item.quantidade})`;
  colItensPedido.appendChild(divItem);
}
newRow.appendChild(colItensPedido);

// cria uma coluna para o status do pedido
const colStatusPedido = document.createElement('td');
colStatusPedido.textContent = 'Pendente';
newRow.appendChild(colStatusPedido);

// cria uma coluna para as ações disponíveis para o pedido
const colAcoesPedido = document.createElement('td');
const botaoSairParaEntrega = document.createElement('button');
botaoSairParaEntrega.textContent = 'Sair para Entrega';
botaoSairParaEntrega.addEventListener('click', () => {
  sairParaEntrega(numeroPedido);
});
colAcoesPedido.appendChild(botaoSairParaEntrega);
newRow.appendChild(colAcoesPedido);

// adiciona a nova linha à tabela
const tabela = document.querySelector('table');
tabela.querySelector('tbody').appendChild(newRow);
