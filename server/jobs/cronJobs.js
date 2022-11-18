const { CronJob } = require('cron');

const dailySnow = new CronJob('4 * * * * *', function() {
  console.log('test')
});

module.exports = dailySnow;