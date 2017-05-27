# API.SenecaJS.REST_API

    $ npm i && npm i jq -g
    $ node index.js -h
    $ npm run index service
    $ curl http://localhost:8081/api/noop | jq '.'
    {
      "statusCode": 200,
      "data": {
        "_links": {
          "self": {
            "href": "/noop"
          },
          "test": {
            "href": "/noop/test"
          }
        },
        "name": "noop",
        "body": "yellowfish"
      }
    }
