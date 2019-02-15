exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {
          'First_Name': 'Tony',
          'Last_Name': 'Adams',
          'Phone_Number': '3035079404',
          'Email': 'tony@truvisory.com',
          'Product_IDs': 1,
          'Service_IDs': 2
        },
        {
          'First_Name': 'Toby',
          'Last_Name': 'Adams',
          'Phone_Number': '3035202756',
          'Email': 'toby@truvisory.com',
          'Product_IDs': 2,
          'Service_IDs': 3
        },
        {
          'First_Name': 'Boston',
          'Last_Name': 'Adams',
          'Phone_Number': '3035078404',
          'Email': 'boston@truvisory.com',
          'Product_IDs': 3,
          'Service_IDs': 4
        }
      ]);
    });
};
