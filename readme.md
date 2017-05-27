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

## wut?

Do [*actions*][action] from or against *models* as *role*-based *commands* which
will result in *statuses*. Configure *contracts* and *components* to taste,
bearing in mind...

<blockquote>
<p>If the engine of application state (and hence the API) is not being driven by
hypertext, then it cannot be RESTful and cannot be a REST API. Period. Is there
some broken manual somewhere that needs to be fixed?</p>
<div><cite>Roy Fielding</cite></div>
</blockquote>

## Updates

Coming soon...

[action]: https://schema.org/Action)
