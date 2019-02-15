exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          'Product_Name': 'Shampoo'
        },
        {
          'Product_Name': 'Hairspray'
        },
        {
          'Product_Name': 'Conditioner'
        }
      ]);
    });
};