// ./program/status/200/index.js
const defer = require('defer')
function __200__ (concept) {
  var d = defer()
  concept.statusCode = 200
  d.resolve(concept)
  return d.promise
}
module.exports = __200__
