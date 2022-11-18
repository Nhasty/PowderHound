/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
const axios = require('axios');
const { CronJob } = require('cron');
require('dotenv').config();
const Mountain = require('../db');

const updateAllNames = async function () {
  try {
    const uniqueNames = await Mountain.find({}).distinct('name');
    const axiosOptions = {
      params: { units: 'i' },
      headers: {
        'X-RapidAPI-Key': process.env.SNOWAPIKEY,
        'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
      },
    };
    console.log([uniqueNames]);
    uniqueNames.forEach(function(name, index) {

    })
    // eslint-disable-next-line func-names, prefer-arrow-callback
    // uniqueNames.forEach(function (name) {
    //   axios.get(`https://ski-resort-forecast.p.rapidapi.com/${name}/snowConditions`, axiosOptions)
    //     .then((apiResponse) => {
    //       Mountain.find({ name })
    //         .then((anotherResponse) => console.log(anotherResponse));
    //     });
    // });
  } catch (err) {
    console.log(err);
  }
};

updateAllNames();