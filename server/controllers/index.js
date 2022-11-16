const getData = require('./getData.js')
const postMountain = require('./postMountain.js');

module.exports = {
  getMountain: getData.getMountain,
  getMountains: getData.getMountains,
  postMountain: postMountain,
}