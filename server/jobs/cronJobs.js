/* eslint-disable prefer-arrow-callback */
const { CronJob } = require('cron');
const dbJobs = require('./dbJobs');

const dailySnow = new CronJob('0 30 5-9 */1 * *', function () {
  dbJobs.updateAllForecasts()
    .then(function (response) {
      if (response === 'success') {
        console.log('successfully updated forecasts and conditions');
      }
      if (response === 'failure') {
        console.log('failure');
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

const weatherUpdate = new CronJob('0 0,30 * * * *', function () {
  dbJobs.updateAllWeather()
    .then(function (response) {
      if (response === 'success') {
        console.log('successfully updated weather');
      }
      if (response === 'failure') {
        console.log('failure');
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = {
  dailySnow,
  weatherUpdate,
};
