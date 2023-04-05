module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('pedidos',
      [{
        número_item: 2,
        código_produto: "K13",
        quantidade_produto: 5,
        valor_unitário_produto: "15,00"
      },
      {
        número_item: 4,
        código_produto: "SD9",
        quantidade_produto: 12,
        valor_unitário_produto: "5,00"
      },
      {
        número_item: 3,
        código_produto: "MR2",
        quantidade_produto: 10,
        valor_unitário_produto: "17,30"
      },
      {
        número_item: 1,
        código_produto: "A22",
        quantidade_produto: 9,
        valor_unitário_produto: "10,00"
      }
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
}
