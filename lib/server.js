
'use strict';

const express = require('express');
const app = express();
const clothesRoute = require('./routes/clothes.js');
const foodRoute = require('./routes/food.js');

app.use(express.json());
app.use(clothesRoute);
app.use(foodRoute);

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

// app.get('/message'); // returns all messages
// app.get('/message/:id'); // returns only messages that match an id.
// app.post('/message'); // creating a new message
// app.put('/message/:id'); // update an existing message
// app.patch('/message/:id'); // update an existing message
// app.delete('/message/:id'); // remove and existing message