const axios = require ('axios');
const Mountain = require('../db.js')

module.exports = async function postMountain(req, res) {
  const { name, locationId, user } = req.body;

}