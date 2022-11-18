const { CronJob } = require('cron');

const dailySnow = new CronJob('*/1 * * * * *', function() {
  console.log('test')
});

module.exports = dailySnow;