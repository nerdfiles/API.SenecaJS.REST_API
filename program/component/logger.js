// ./program/component/logger.js
const path = require('path')
const winston = require('winston')
module.exports = function (app) {
  var logger = new winston.Logger({
    transports: [
      new winston.transports.File({
        level            : 'info',
        filename         : path.resolve(__dirname, '..', 'log', 'all-logs.log'),
        handleExceptions : true,
        json             : true,
        maxsize          : 5242880,
        maxFiles         : 5,
        colorize         : false
      }),
      new winston.transports.Console({
        level            : 'debug',
        handleExceptions : true,
        json             : false,
        colorize         : true
      })
    ],
    exitOnError: false
  })
  logger.stream = {
    write: function (message, encoding) {
      logger.info(message)
    }
  }
  app.use(require('morgan')('combined', {
    'stream': logger.stream
  }))
}
