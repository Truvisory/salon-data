const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development'
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const knexConfig = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    knex('clients')
    .join('products', 'clients.Product_IDs', '=', 'products.ID')
    .join('services', 'clients.Service_IDs', '=', 'services.ID')
    .select('clients.First_Name', 'clients.Last_Name', 'products.Product_Name', 'services.Service_Name')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))