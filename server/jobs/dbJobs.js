const axios = require('axios');
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
    for (const name of uniqueNames) {
      await setTimeout(() => {console.log(name)}, 1000);
      console.log(name)
    }
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