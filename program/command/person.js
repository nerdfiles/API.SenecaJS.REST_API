// ./program/command/person.js
const seneca = require('seneca')()
seneca.use(require('seneca-basic'))
seneca.use(require('seneca-entity'))
module.exports = {
  /**
   * @api {post} /person/
   * @apiName add
   * @apiDescription
   * Probably a POST.
   */
  create: (request, done) => {

    var person = seneca.make('person')
    var body = JSON.parse(request.args.body)
    person.name = body.name
    console.log(person)
    person.save$(console.log)

    var output = {
      create: true
    }

    const response = {
      statusCode : 200,
      body       : output,
    }

    done(null, response)
  },

  save: (request, done) => {
    console.log(request)
    done(null, {})
  },

  /**
   * @api {get} /person/
   * @apiName get
   * @apiDescription
   * Probably a GET for a person by ID.
   */
  get: (request, done) => {

    // var one = bq.findOne().then(function (elements) {
    //   return R.filter(R.map(R.compose(R.prop(''))), elements)
    // })

    // var open = R.filter(R.where('datetime', bq.find()))

    let result = {
      id: 1
    }

    var output = result

    const response = {
      statusCode : 200,
      body       : output,
    }

    done(null, response)
  },

  /**
   * @api {patch} /person/
   * @apiName inlineUpdate
   * @apiDescription
   * Probably a PUT...
   */
  inlineUpdate: (request, done) => {

    var output = {
      inlineUpdate: true
    }

    const response = {
      statusCode : 200,
      body       : output,
    }

    done(null, response)
  },

  /**
   * @api {delete} /person/
   * @apiName remove
   * @apiDescription
   * Probably a DELETE...
   */
  remove: (request, done) => {

    var output = {
      delete: true
    }

    const response = {
      statusCode : 200,
      body       : output,
    }

    done(null, response)
  },

  /**
   * @api {put} /person/
   * @apiName update
   * @apiDescription
   * Probably a PUT...
   */
  update: (request, done) => {

    var output = {
      update: true
    }

    const response = {
      statusCode : 200,
      body       : output,
    }

    done(null, response)
  },

}
