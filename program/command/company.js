// ./program/command/company.js
module.exports = {
  get: (args, done) => {
    var output = JSON.stringify({
      message : '',
      input   : event,
    })
    const response = {
      statusCode : 200,
      data       : output,
    }
    done(null, response)
  }
}
