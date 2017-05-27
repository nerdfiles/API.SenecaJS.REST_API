// ./program/role.js
const noop = require('./command/__noop__')
const person = require('./command/person')
const people = require('./command/people')
const searchSimple = require('./command/searchSimple')
const searchAdvanced = require('./command/searchAdvanced')
function Role () {
  const roleInterface = {
    noop               : noop.initialize,
    peopleGet          : people.get,
    personGet          : person.get,
    personCreate       : person.create,
    personSave         : person.save,
    personRemove       : person.remove,
    personUpdate       : person.update,
    personInlineUpdate : person.inlineUpdate,
    simpleSearch       : searchSimple.get,
    advancedSearch     : searchAdvanced.get
  }
  return roleInterface
}
module.exports = Role
