exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('clients', table => {
      table.increments('ID')
      table.string('First_Name').notNullable().defaultsTo('')
      table.string('Last_Name').notNullable().defaultsTo('')
      table.string('Email').notNullable().defaultsTo('')
      table.string('Phone_Number').notNullable().defaultsTo('')
      table.integer('Product_IDs')
      table.integer('Service_IDs')
    }),
    knex.schema.createTable('services', table => {
      table.increments('ID')
      table.string('Service_Name').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('products', table => {
      table.increments('ID')
      table.string('Product_Name').notNullable().defaultsTo('')
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('clients'),
    knex.schema.dropTable('services'),
    knex.schema.dropTable('products'),
  ])
};