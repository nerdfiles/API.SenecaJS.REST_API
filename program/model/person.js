// ./program/model/person.js
const defer = require('promise-defer')
const bedquilt = require('bedquilt').BedquiltClient
const seneca = require('seneca')()
const entSaveStream = require('seneca-entities-save-stream')
const person = seneca.make('person')
const personEventStream = entSaveStream(seneca, { name$: 'person' })
function Person () {
}
module.exports = Person


