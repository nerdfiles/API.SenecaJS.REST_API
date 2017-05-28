# API.SenecaJS.REST_API

    $ npm i && npm i jq -g
    $ bin/program -h
    $ bin/program service

Elsewhere:

    $ source scripts/resty.sh
    $ resty.set 'http://localhost:8081/api'
    $ GET /noop | jq '.'

We should see a broke-ass HAL-ish JSON output:

```json
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
    "data": "yellowfish"
  }
}
```

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

[action]: https://schema.org/Action
