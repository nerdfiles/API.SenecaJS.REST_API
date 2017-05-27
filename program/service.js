// ./program/service.js
const express = require('express')
const senecaWeb = require('seneca-web')
const Seneca = require('seneca')
const pry = require('pryjs')
const fs = require('fs')
const path = require('path')
const senecaConfig = {
  tag     : 'ft',
  timeout : 500,
  log     : 'silent',
  debug: {
    undead     : false,
    short_logs : false,
  },
  default_plugins: {
    entity      : false,
    'mem-store' : false
  },
  strict: {
    result  : true,
    add     : false,
    find    : true,
    maxloop : 11
  },
  plugins: [
    require('seneca-basic'),
    require('seneca-entity')
  ]
}
const seneca = Seneca(senecaConfig)
const api = require('./api')
const app = express()
const port = 8081
require('./component/cors')(app)
require('./component/logger')(app)
const noopContract = JSON.parse(fs.readFileSync(path.join(__dirname, '../contract') + '/__noop__.json', 'utf8'))
const personContract = JSON.parse(fs.readFileSync(path.join(__dirname, '../contract') + '/person.json', 'utf8'))
const searchContract = JSON.parse(fs.readFileSync(path.join(__dirname, '../contract') + '/search.json', 'utf8'))
const routes = [
  personContract,
  noopContract,
  searchContract
]
const config = {
  routes  : routes,
  adapter : require('seneca-web-adapter-express'),
  context : app
}
seneca
  .use(api)
  .use(senecaWeb, config)
  .ready((error) => {
    if (error) {
      console.log('API failed to load.')
      return process.exit(1)
    }
    const server = seneca.export('web/context')()
    server.listen(port, () => {
      console.log('API is ready. Running on port ' + port)
    })
  })
