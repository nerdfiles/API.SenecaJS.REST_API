// ./program/api.js
var role = require('./role')()
function api (options) {
  var seneca = this
  seneca.add('role:api,cmd:noop',                   role.noop)
  seneca.add('role:api,cmd:authenticateUser',       role.authenticateUser)
  seneca.add('role:entity,cmd:save,name:person',    role.personSave)
  seneca.add('role:api,cmd:people',                 role.peopleGet)
  seneca.add('role:api,cmd:person',                 role.personGet)
  seneca.add('role:api,cmd:person/create',          role.personCreate)
  seneca.add('role:api,cmd:person/remove',          role.personRemove)
  seneca.add('role:api,cmd:person/update',          role.personUpdate)
  seneca.add('role:api,cmd:person/update/inline',   role.personInlineUpdate)
  seneca.add('role:api,cmd:search',                 role.simpleSearch)
  seneca.add('role:api,cmd:search/advanced',        role.advancedSearch)
}
module.exports = api
