const express = require('express');
const path = require('path');
require('dotenv').config();
const controllers = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/public')));
app.get('/mountains', controllers.getMountains);
app.get('/mountain', controllers.getMountain)
app.post('/mountains', controllers.postMountain);

const { PORT = 3000 } = process.env;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listing on ${PORT}`);
    console.log(`successfully connected at http://localhost:${PORT}`);
  }
})