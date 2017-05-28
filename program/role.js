// ./program/role.js
const noop = require('./command/__noop__')
const person = require('./command/person')
const search = require('./command/search')
function Role () {
  const roleInterface = {
    noop               : noop.initialize,
    personGet          : person.get,
    personCreate       : person.create,
    personSave         : person.save,
    personRemove       : person.remove,
    personUpdate       : person.update,
    personInlineUpdate : person.inlineUpdate,
    search             : search.get
  }
  return roleInterface
}
module.exports = Role
