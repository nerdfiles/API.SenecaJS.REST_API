// ./program/command/__noop__.js
const request = require('sync-request');
const hal = require('hal');
module.exports = {
  initialize: (args, done) => {
    var url = 'http://www.setgetgo.com/randomword/get.php';
    var response = request('GET', url);
    var output = {
      name : 'noop',
      body : response.body.toString('utf-8')
    };
    var resource = new hal.Resource(output, '/noop');
    resource.link('test', '/noop/test');
    const responseConstruct = {
      statusCode : 200,
      data       : resource.toJSON()
    };
    done(null, responseConstruct);
  }
};
