const starwarsArr = require('./src/starwars-names.json');
const uniqueRandomArray = require('unique-random-array');


module.exports = {
  all: starwarsArr,
  random: uniqueRandomArray(starwarsArr)
}
