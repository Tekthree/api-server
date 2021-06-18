'use strict';

const express = require('express');
const cors = require('cors');
const customersRoutes = require('./routes/customers.js');
const receiptsRoutes = require('./routes/receipts.js');

const app = express();

app.use(cors());
app.use(express.json());


app.use(customersRoutes);
app.use(receiptsRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  } 
}