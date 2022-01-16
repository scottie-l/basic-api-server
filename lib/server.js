
'use strict';

const express = require('express');
const app = express();
const clothesRoute = require('./routes/clothes.js');
const foodRoute = require('./routes/food.js');
const err404 = require('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');
const logger = require('.middleware/logger.js');

app.use(express.json());
app.use(clothesRoute);
app.use(foodRoute);
app.use(logger);

app.use('*', err404);
app.use(err500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  },
  app,
};

// Remember to start your Postgres server: Windows: pg_ctl -D /home/linuxbrew/.linuxbrew/var/postgres start
// In your server.js, require() your router modules, and use() them.
