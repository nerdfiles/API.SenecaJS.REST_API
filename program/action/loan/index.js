// ./program/actions/loan/index.js
const defer = require('defer')
function LoanAction (request) {
  function perform (concept) {
    var d = defer()
    concept.target = ''
    d.resolve(concept)
    return (concept) => {
      return d.promise
    }
  }
  return (concept) => {
    return {
      perform: perform(concept)
    }
  }
}
module.exports = LoanAction
