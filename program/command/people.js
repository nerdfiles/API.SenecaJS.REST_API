// ./program/command/people.js
const seneca = require('seneca')()
seneca.use(require('seneca-basic'))
seneca.use(require('seneca-entity'))
module.exports = {
  /**
   * @api {get} /people/
   * @apiName get
   * @apiDescription
   * Probably a GET for a people list.
   */
  get: (request, done) => {
    var output = []
    const response = {
      statusCode : 200,
      body       : output
    }
    done(null, response)
  }
}
