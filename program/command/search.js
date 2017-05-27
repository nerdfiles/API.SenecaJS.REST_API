// ./program/command/searchSimple.js
module.exports = {
  get: (request, done) => {
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
