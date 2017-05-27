// ./program/interface.js
const docopt = require('docopt-js')
const cli = require('./cli')
const configSchema = docopt.docopt(cli, { version: '0.0.1' })
function Interface () {
  function loadSchema (schema) {
    if (schema.service) return require('./service')
  }
  return loadSchema(configSchema)
}
module.exports = Interface
