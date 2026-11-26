# Update Node Service README

Explain what the service does and how clients interact with it. Document the
runtime and external services it requires, how to configure it, and how to start
it using the distribution methods it supports. For an npm package with a CLI,
use the executable name from the `bin` field in `package.json`. For a container,
give the image name and the port the service listens on inside the container.
Document the protocol, listening address, and configuration defaults where the
service defines them. Include a health check or a representative client request
and show the expected response.

## Example README

Replace the example package, executable, image, ports, and health check with the
values for the service being documented.

````md
# Pokedexii API

Pokedexii API provides the backend for Pokedexii Web.

## Running Locally

Choose one of the following methods.

### npm

```sh
npm install --global @zthun/pokedexii-api
pokedexii-api
```

### Docker

```sh
docker run --rm --publish 127.0.0.1:3000:3000 zthun/pokedexii-api
```

### Docker Compose

Save the following as `compose.yaml`.

```yaml
services:
  api:
    image: zthun/pokedexii-api
    ports:
      - "127.0.0.1:3000:3000"
```

From the same directory, start the service.

```sh
docker compose up
```

## Verify the Service

From another terminal, check the health endpoint.

```sh
curl --fail --include http://127.0.0.1:3000/health
```

A healthy service returns HTTP `200 OK`.
````
