const axios = require ('axios');
require('dotenv').config();
const Mountain = require('../db.js');


module.exports = async function postMountain(req, res) {
  try {
    const { name, locationId, user } = req.body;
    const resort = name.replace(/ /g, '%20');
    const weatherOptions = {
      params: {
        tempunit: 'F',
        windunit: 'MPH',
        tz: 'America/Denver',
        periods: '1',
        dataset: 'full'
      },
      headers: {
        'X-RapidAPI-Key': process.env.SNOWAPIKEY,
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
      }
    };
    const snowOptions = {
      params: {units: 'i', el: 'mid'},
      headers: {
        'X-RapidAPI-Key': process.env.SNOWAPIKEY,
        'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
      }
    }
    const snowOptions2 = {
      params: {units: 'i'},
      headers: {
        'X-RapidAPI-Key': 'dc2d81faecmsh6b85b6aec3548a3p1b5121jsn4adc81ce3045',
        'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
      }
    }
    const weatherAPIResponse = await axios.get(`https://foreca-weather.p.rapidapi.com/forecast/15minutely/${locationId}`, weatherOptions)
    const snowForecastAPIRespnse = await axios.get(`https://ski-resort-forecast.p.rapidapi.com/${resort}/forecast`, snowOptions)
    const snowConditionsAPIResponse = await axios.get(`https://ski-resort-forecast.p.rapidapi.com/${resort}/snowConditions`, snowOptions2)
    const todaysForecast = {
      temperature: weatherAPIResponse.data.forecast[0].temperature,
      symbol: weatherAPIResponse.data.forecast[0].symbol,
      symbolPhrase: weatherAPIResponse.data.forecast[0].symbolPhrase,
      windDirString: weatherAPIResponse.data.forecast[0].windDirString,
      windSpeed: weatherAPIResponse.data.forecast[0].windSpeed,
      windGust: weatherAPIResponse.data.forecast[0].windGust
    }
    const fiveDayForecast = snowForecastAPIRespnse.data
    const snowConditions = snowConditionsAPIResponse.data
    console.log(snowConditions)
    console.log(fiveDayForecast.forecast5Day)
    const newMountain = new Mountain({
      user,
      name,
      locationId,
      todaysForecast,
      fiveDayForecast,
      snowConditions,
    })
    await newMountain.save();
    res.sendStatus(201)
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}