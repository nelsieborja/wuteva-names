import uniqueRandomArray from 'unique-random-array'
const wutevaNames = require('./wuteva-names.json')

const mainExport = {
  all: wutevaNames,
  random: uniqueRandomArray(wutevaNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
