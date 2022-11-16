const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/', express.static(path.join(__dirname, '../client/public')));

const { PORT = 3001 } = process.env;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listing on ${PORT}`);
    console.log(`successfully connected at http://localhost:${PORT}`);
  }
})