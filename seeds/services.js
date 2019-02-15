exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {
          'Service_Name': 'Haircut'
        },
        {
          'Service_Name': 'Hair Color'
        },
        {
          'Service_Name': 'Balayage'
        },
        {
          'Service_Name': 'Highlight'
        },
      ]);
    });
};