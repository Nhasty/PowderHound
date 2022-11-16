const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/powderhound');

const todaysSchema = new mongoose.Schema({
  temperature: String,
  symbolPhrase: String,
  windDirString: String,
  windSpeed: String,
  windGust: String,
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
  forecast5Day: [futureSchema],
  summary3Day: String,
  summaryDays4To6: String,
});

const conditionsSchema = new mongoose.Schema({
  topSnowDepth: String,
  botSnowDepth: String,
  freshSnowfall: String,
  lastSnowfallDate: String,
});

const mountainSchema = new mongoose.Schema({
  user: {
    type: String,
  },
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

const Mountain = mongoose.model('Mountain', mountainSchema);
module.exports = Mountain;
