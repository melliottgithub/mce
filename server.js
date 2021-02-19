const express = require('express');
const mongoose = require('mongoose');
const db = require("./db")
const shoppingCartRouter = require('./routes/shoppingCartRoutes');

const app = express();

// middlewares
app.use(express.json());
app.use('/', express.static(__dirname + '/dist'))
// routes
app.use('/api/shoppingcart', shoppingCartRouter);

const PORT = 3002;

app.get('/', (req, res) => {
  res.send(`test`)
})

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`)
})