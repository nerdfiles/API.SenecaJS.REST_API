// ./program/actions/loan/index.js
const defer = require('defer')
function LoanAction (request) {
  function perform (concept) {
    var d = defer()
    return (target) => {
      concept.target = target
      d.resolve(concept)
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
