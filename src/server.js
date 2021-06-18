'use strict';

const express = require('express');
const cors = require('cors');
const customersRoutes = require('./routes/customers.js');
const receiptsRoutes = require('./routes/receipts.js');
const logger = require('./middleware/logger');

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);
app.use(customersRoutes);
app.use(receiptsRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  } 
}