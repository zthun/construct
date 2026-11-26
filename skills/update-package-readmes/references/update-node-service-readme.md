# Update Node Service README

Explain what the service does and how clients interact with it. Document the
runtime and external services it requires, how to configure it, and how to start
it. Include a small request or client example that shows how to verify it is
running. Document the protocol, listening address, and configuration defaults
where the service defines them.

## Example README

Replace the example package name, image name, paths, and ports with the values
for the application being documented.

````md
# Pokedexii Api

Pokedexii Web is the backend for Pokedexii.

## Running Locally

```sh
npm install --global @zthun/node-service
node-service-from-bin-in-package-json
```

### Docker

```sh
docker run --rm --p 3000:3000 zthun/node-service
```

### Docker Compose

Save the following as `compose.yaml`.

```yaml
services:
  api:
    image: zthun/node-service
    ports:
      - "3000:3000"
```

From the same directory, start the application.

```sh
docker compose up
```
````
