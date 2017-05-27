// ./program/actions/loan/index.js
const defer = require('defer')
function LoanAction (concept) {
  var d = defer()
  concept.target = ''
  d.resolve(concept)
  return d.promise
}
module.exports = LoanAction
