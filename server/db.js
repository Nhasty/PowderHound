const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/powderhound`);

const todaysSchema = new mongooseSchema({
  temperature: String,
  symbolPhrase: String,
  windDirString: String,
  windSpeed: String,
  WindGust: String,
}, { timestamps: true });

const littleSchema = new mongoose.Schema({
  summary: String,
  windSpeed: String,
  windDirection: String,
  snow: String,
  maxTemp: String,
  minTemp: String,
});

const futureSchema = new mongoose.Schema({
  dayOfWeek: String,
  am: littleSchema,
  pm: littleSchema,
  night: littleSchema,
});

const fiveDaySchema = new mongoose.Schema({
  forcast5Day: [futureSchema],
  summary3Day: String,
  summaryDays4To6: String,
});

const conditionsSchema = new mongoose.Schema({
  topSnowDepth: String,
  botSnowDepth: String,
  freshSnowFall: String,
  lastSnowfallDate: String,
})

const mountainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  locationId: {
    type: String,
    required: true,
  },
  todaysForecast: todaysSchema,
  fiveDayForecast: fiveDaySchema,
  snowConditions: conditionsSchema,
});

const Mountain = mongoose.model('Mountain', mountainSchema)
module.exports = Mountain;