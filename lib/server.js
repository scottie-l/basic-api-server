'use strict';

const express = require('express');
const app = express();
const clothesRoute = require('./routes/clothes.js');
const foodRoute = require('./routes/food.js');
const err404 = require('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

app.use(express.json());
app.use(clothesRoute);
// app.use(foodRoute);
app.use(logger);

app.use('*', err404);
app.use(err500);

// app.get('/message'); // returns all messages
// app.get('/message/:id'); // returns only messages that match an id.
// app.post('/message'); // creating a new message
// app.put('/message/:id'); // update an existing message
// app.patch('/message/:id'); // update an existing message
// app.delete('/message/:id'); // remove and existing message

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  },
  app,
};