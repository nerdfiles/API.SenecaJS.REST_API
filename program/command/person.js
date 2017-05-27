// ./program/command/person.js
module.exports = {
  /**
   * @api {post} /person/
   * @apiName add
   * @apiDescription
   * Probably a POST.
   */
  create: (request, done) => {
    var body = JSON.parse(request.args.body)

    // So ideally a person would be created and at the outset produce a
    // LoanAction...
    const InitPerson = require('../model/person')(request).init(body)
    const InitLoanAction = require('../action/loan/index')(request)
    const Status200 = require('../status/200/index')(request)
    const Status301 = require('../status/301/index')(request)
    // const InitPerson2 = require('../model/person')(request).init()
    var person2 = Object.create({ noop: () => {} }, { name: { value: 'None', enumerable: true } })

    InitPerson((person) => {
      ReqLoanAction(person).perform(person2).then((loan) => {
        Status200(loan).then((response) => {
          done(null, response)
        })
        Status301(loan).then((response) => {
          done(null, response)
        })
      })
    }).catch((error) => {
      console.log(error)
    })

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
