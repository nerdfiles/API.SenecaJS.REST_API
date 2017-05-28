// ./program/component/cors.js
module.exports = function (app) {
  app.use((request, response, next) => {
    var allowedOrigins = [
      'http://localhost:9001'
    ]
    var origin = request.headers.origin
    if(allowedOrigins.indexOf(origin) > -1) {
      response.setHeader('Access-Control-Allow-Origin', origin)
    }
    response.header('Access-Control-Allow-Methods', 'GET, OPTIONS')
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    response.header('Access-Control-Allow-Credentials', true)
    return next()
  })
}
