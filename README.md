# TrailerAPI

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
It runs in [http://localhost:3005](http://localhost:3005)

### `npm test`

Launches the test runner.

## Get the movie trailer

To get the movie trailer, you have to Post a Viaplay Content API movie url as following:

#### `Post / http://localhost:3005/trailers`

##### request body:

```json
{
  "url": "http://content.viaplay.se/pc-se/film/21-bridges-2019"
}
```

##### response:

```json
{
  "trailer_url": "https://www.youtube.com/watch?v=qaZoSTG10lw"
}
```

## Handling heavy load of requests

Considering the amount of requests expected, we should setup a Api Gateway (or at least a Load Balancer) to distribute the requests among multiple servers in order to deliver a high quality experience for the users.
