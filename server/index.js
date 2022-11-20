const express = require('express');
const path = require('path');
require('dotenv').config();
const controllers = require('./controllers');
const cronJobs = require('./jobs/cronJobs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const logger = (req, res, next) => {
  console.log(`A ${req.method} request was made to the ${req.url} endpoint`);
  if (req.body && Object.keys(req.body).length) {
    console.log(`with a payload of ${JSON.stringify(req.body)}`);
  }
  next();
};
app.use(logger);

// Update data in db on a schedule

cronJobs.dailySnow.start();
cronJobs.weatherUpdate.start();

app.use('/', express.static(path.join(__dirname, '../client/public')));
app.get('/mountains', controllers.getMountains);
app.get('/mountain', controllers.getMountain);
app.post('/mountains', controllers.postMountain);

const { PORT = 3000 } = process.env;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listing on ${PORT}`);
    console.log(`successfully connected at http://localhost:${PORT}`);
  }
});
