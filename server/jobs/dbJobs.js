/* eslint-disable no-promise-executor-return */
/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
const axios = require('axios');
require('dotenv').config();
const Mountain = require('../db');

const timer = () => new Promise((resolve) => setTimeout(resolve, 350));

const snowConditionsOptions = {
  params: { units: 'i' },
  headers: {
    'X-RapidAPI-Key': process.env.SNOWAPIKEY,
    'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
  },
};

const forecastOptions = {
  params: { units: 'i', el: 'mid' },
  headers: {
    'X-RapidAPI-Key': process.env.SNOWAPIKEY,
    'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
  },
};

const weatherOptions = {
  params: {
    tempunit: 'F',
    windunit: 'MPH',
    tz: 'America/Denver',
    periods: '1',
    dataset: 'full',
  },
  headers: {
    'X-RapidAPI-Key': process.env.SNOWAPIKEY,
    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
  },
};

const updateAllForecasts = async function () {
  try {
    const uniqueNames = await Mountain.find({}).distinct('name');
    for (const name of uniqueNames) {
      const snowResponse = await axios.get(`https://ski-resort-forecast.p.rapidapi.com/${name}/snowConditions`, snowConditionsOptions);
      await Mountain.updateMany({ name }, { snowConditions: snowResponse.data });
      const forecastResponse = await axios.get(`https://ski-resort-forecast.p.rapidapi.com/${name}/forecast`, forecastOptions);
      await Mountain.updateMany({ name }, { fiveDayForecast: forecastResponse.data });
      await timer();
    }
    return 'success';
  } catch (err) {
    console.log(err);
    return 'failure';
  }
};

const updateAllWeather = async function () {
  try {
    const uniqueIds = await Mountain.find({}).distinct('locationId');
    for (const locationId of uniqueIds) {
      const weatherAPIResponse = await axios.get(`https://foreca-weather.p.rapidapi.com/forecast/15minutely/${locationId}`, weatherOptions);
      await Mountain.updateMany({ locationId }, { todaysForecast: weatherAPIResponse.data });
    }
    return 'success';
  } catch (err) {
    console.log(err);
    return 'failure';
  }
};

module.exports = {
  updateAllForecasts,
  updateAllWeather,
};
