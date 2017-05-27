// ./program/model/person.js
const defer = require('promise-defer')
const bedquilt = require('bedquilt').BedquiltClient
const seneca = require('seneca')()
// const entSaveStream = require('seneca-entities-save-stream')
// const personEventStream = entSaveStream(seneca, { name$: 'person' })
seneca.use(require('seneca-basic'))
seneca.use(require('seneca-entity'))
function Person () {
  function init (body) {
    const person = seneca.make('person')
    person.name = body.name
    person.save$()
    return (callback) => {
      callback(person)
    }
  }
  return {
    init: init
  }
}
module.exports = Person


