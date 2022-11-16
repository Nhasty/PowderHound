const Mountain = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const states = require('../states.js')

module.exports.getMountains = function (req, res) {
  Mountain.find({ user: req.query })
}

module.exports.getMountain = async function (req, res) {
  try {
    let { resort } = req.query;
    resort = resort.replace(/ /g, '%20');
    const snowOptions = {
      params: {units: 'i'},
      headers: {
        'X-RapidAPI-Key': process.env.SNOWAPIKEY,
        'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
      }
    };
    const snowAPIResponse = await axios.get(`https://ski-resort-forecast.p.rapidapi.com/${resort}/snowConditions`, snowOptions);
    const state = snowAPIResponse.data.basicInfo.region.split(' - ')[1]
    const stateAbbrev =states[state]
    resort = snowAPIResponse.data.basicInfo.name.replace(/ /g, '%20')
    const mountainConditions = {...snowAPIResponse.data};
    delete mountainConditions.basicInfo
    const weatherOptions = {
      params: {lang: 'en'},
      headers: {
        'X-RapidAPI-Key': process.env.SNOWAPIKEY,
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
  }
    }
    const weatherAPIResponse = await axios.get(`https://foreca-weather.p.rapidapi.com/location/search/${resort}`, weatherOptions)
    res.status(200).json({
      mountainConditions,
      location: weatherAPIResponse.data.locations.filter((location) => location.state === stateAbbrev)
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
}