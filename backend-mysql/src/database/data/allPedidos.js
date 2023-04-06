const itensPedido = [
  {
    número_item: 1,
    código_produto: 'A22',
    quantidade_produto: 9,
    valor_unitário_produto: 10.00,
    id_pedido: 1,
  },
  {
    número_item: 2,
    código_produto: 'K13',
    quantidade_produto: 5,
    valor_unitário_produto: 15.00,
    id_pedido: 1,
  },
  {
    número_item: 3,
    código_produto: 'MR2',
    quantidade_produto: 10,
    valor_unitário_produto: 17.30,
    id_pedido: 1,
  },
  {
    número_item: 4,
    código_produto: 'SD9',
    quantidade_produto: 12,
    valor_unitário_produto: 5.00,
    id_pedido: 1,
  },
  {
    número_item: 1,
    código_produto: 'HU5',
    quantidade_produto: 5,
    valor_unitário_produto: 33.00,
    id_pedido: 2,
  },
  {
    número_item: 2,
    código_produto: 'XK1',
    quantidade_produto: 25,
    valor_unitário_produto: 20.00,
    id_pedido: 2,
  },
  {
    número_item: 3,
    código_produto: 'WF99',
    quantidade_produto: 90,
    valor_unitário_produto: 1.70,
    id_pedido: 2,
  },
  {
    número_item: 1,
    código_produto: 'A99',
    quantidade_produto: 39,
    valor_unitário_produto: 10.00,
    id_pedido: 3,
  },
  {
    número_item: 2,
    código_produto: 'M2',
    quantidade_produto: 15,
    valor_unitário_produto: 17.00,
    id_pedido: 3,
  },
  {
    número_item: 3,
    código_produto: 'K73',
    quantidade_produto: 110,
    valor_unitário_produto: 15.00,
    id_pedido: 3,
  },
  {
    número_item: 4,
    código_produto: 'SD9',
    quantidade_produto: 20,
    valor_unitário_produto: 5.40,
    id_pedido: 3,
  },
  {
    número_item: 5,
    código_produto: 'D19',
    quantidade_produto: 6,
    valor_unitário_produto: 44.00,
    id_pedido: 3,
  },
  {
    número_item: 1,
    código_produto: 'SF49',
    quantidade_produto: 170,
    valor_unitário_produto: 5.30,
    id_pedido: 4,
  },
  {
    número_item: 2,
    código_produto: 'VR5',
    quantidade_produto: 51,
    valor_unitário_produto: 90.00,
    id_pedido: 4,
  },
  {
    número_item: 3,
    código_produto: 'BR1',
    quantidade_produto: 25,
    valor_unitário_produto: 23.00,
    id_pedido: 4,
  },
  {
    número_item: 1,
    código_produto: 'AM9',
    quantidade_produto: 66,
    valor_unitário_produto: 10.00,
    id_pedido: 5,
  },
  {
    número_item: 2,
    código_produto: 'MR5',
    quantidade_produto: 15,
    valor_unitário_produto: 7.00,
    id_pedido: 5,
  },
  {
    número_item: 3,
    código_produto: 'SS3',
    quantidade_produto: 18,
    valor_unitário_produto: 15.00,
    id_pedido: 5,
  },
  {
    número_item: 4,
    código_produto: 'RR7',
    quantidade_produto: 21,
    valor_unitário_produto: 45.00,
    id_pedido: 5,
  },
  {
    número_item: 5,
    código_produto: 'FM8',
    quantidade_produto: 6,
    valor_unitário_produto: 19.00,
    id_pedido: 5,
  },
  {
    número_item: 6,
    código_produto: 'YY6',
    quantidade_produto: 10,
    valor_unitário_produto: 15.90,
    id_pedido: 5,
  },
  {
    número_item: 7,
    código_produto: 'T19',
    quantidade_produto: 7,
    valor_unitário_produto: 21.00,
    id_pedido: 5,
  },
];

const pedidos = [
  {
    cliente: 'Fulano1',
    valor_total: 398.00,
  },
  {
    cliente: 'Fulano2',
    valor_total: 818.00,
  },
  {
    cliente: 'Fulano3',
    valor_total: 2667.00,
  },
  {
    cliente: 'Fulano4',
    valor_total: 6066.00,
  },
  {
    cliente: 'Fulano5',
    valor_total: 2400.00,
  },
];

const notas = [
  {
    Vendedor: 'Fulano1',
  },
  {
    Vendedor: 'Fulano2',
  },
  {
    Vendedor: 'Fulano3',
  },
  {
    Vendedor: 'Fulano4',
  },
  {
    Vendedor: 'Fulano5',
  },
  {
    Vendedor: 'Fulano6',
  },
  {
    Vendedor: 'Fulano7',
  },
  {
    Vendedor: 'Fulano8',
  },
  {
    Vendedor: 'Fulano9',
  },
];

const itensNota = [
  {
    id_nota: 1,
    id_pedido: 1,
    número_item: 4,
    quantidade_produto: 4,
  },
  {
    id_nota: 1,
    id_pedido: 1,
    número_item: 2,
    quantidade_produto: 5,
  },
  {
    id_nota: 2,
    id_pedido: 2,
    número_item: 1,
    quantidade_produto: 5,
  },
  {
    id_nota: 2,
    id_pedido: 2,
    número_item: 3,
    quantidade_produto: 90,
  },
  {
    id_nota: 3,
    id_pedido: 5,
    número_item: 3,
    quantidade_produto: 7,
  },
  {
    id_nota: 3,
    id_pedido: 5,
    número_item: 4,
    quantidade_produto: 1,
  },
  {
    id_nota: 3,
    id_pedido: 5,
    número_item: 1,
    quantidade_produto: 21,
  },
  {
    id_nota: 3,
    id_pedido: 5,
    número_item: 6,
    quantidade_produto: 4,
  },
  {
    id_nota: 4,
    id_pedido: 5,
    número_item: 3,
    quantidade_produto: 11,
  },
  {
    id_nota: 4,
    id_pedido: 5,
    número_item: 4,
    quantidade_produto: 9,
  },
  {
    id_nota: 4,
    id_pedido: 5,
    número_item: 1,
    quantidade_produto: 20,
  },
  {
    id_nota: 4,
    id_pedido: 5,
    número_item: 6,
    quantidade_produto: 5,
  },
  {
    id_nota: 5,
    id_pedido: 3,
    número_item: 2,
    quantidade_produto: 5,
  },
  {
    id_nota: 5,
    id_pedido: 3,
    número_item: 3,
    quantidade_produto: 50,
  },
  {
    id_nota: 5,
    id_pedido: 3,
    número_item: 4,
    quantidade_produto: 15,
  },
  {
    id_nota: 5,
    id_pedido: 3,
    número_item: 1,
    quantidade_produto: 9,
  },
  {
    id_nota: 6,
    id_pedido: 1,
    número_item: 3,
    quantidade_produto: 3,
  },
  {
    id_nota: 6,
    id_pedido: 1,
    número_item: 4,
    quantidade_produto: 8,
  },
  {
    id_nota: 6,
    id_pedido: 1,
    número_item: 1,
    quantidade_produto: 9,
  },
  {
    id_nota: 7,
    id_pedido: 4,
    número_item: 3,
    quantidade_produto: 25,
  },
  {
    id_nota: 7,
    id_pedido: 1,
    número_item: 3,
    quantidade_produto: 7,
  },
  {
    id_nota: 7,
    id_pedido: 4,
    número_item: 2,
    quantidade_produto: 51,
  },
  {
    id_nota: 7,
    id_pedido: 4,
    número_item: 1,
    quantidade_produto: 170,
  },
  {
    id_nota: 8,
    id_pedido: 5,
    número_item: 7,
    quantidade_produto: 7,
  },
  {
    id_nota: 8,
    id_pedido: 5,
    número_item: 4,
    quantidade_produto: 2,
  },
  {
    id_nota: 8,
    id_pedido: 5,
    número_item: 1,
    quantidade_produto: 22,
  },
  {
    id_nota: 8,
    id_pedido: 5,
    número_item: 5,
    quantidade_produto: 6,
  },
  {
    id_nota: 9,
    id_pedido: 3,
    número_item: 4,
    quantidade_produto: 5,
  },
  {
    id_nota: 9,
    id_pedido: 3,
    número_item: 5,
    quantidade_produto: 6,
  },
  {
    id_nota: 9,
    id_pedido: 3,
    número_item: 2,
    quantidade_produto: 6,
  },
  {
    id_nota: 9,
    id_pedido: 3,
    número_item: 3,
    quantidade_produto: 55,
  },
  {
    id_nota: 9,
    id_pedido: 3,
    número_item: 1,
    quantidade_produto: 3,
  },
];

module.exports = { itensPedido, pedidos, notas, itensNota };
