# Update Browser Application README

Explain what the browser application does and how to run or host it. Document
the distribution methods the package supports. For a static build, identify the
directory to serve. For a container image, give the image name, container port,
and URL to open. Include required configuration and backend services when the
application depends on them.

## Example README

Replace the example package name, image name, paths, and ports with the values
for the application being documented.

````md
# Pokedexii Web

Pokedexii Web is the browser frontend for Pokedexii.

## Running Locally

### Serve with NGINX or Apache

```sh
npm install --global @zthun/browser-application
printf '%s\n' "$(npm root --global)/@zthun/browser-application/dist"
```

1. Set your web server's document root to the printed directory.
2. Open the URL configured on your web server.

### Docker

```sh
docker run --rm --publish 127.0.0.1:5173:80 zthun/browser-application
```

Open [http://localhost:5173](http://localhost:5173).

### Docker Compose

Save the following as `compose.yaml`.

```yaml
services:
  web:
    image: zthun/browser-application
    ports:
      - "127.0.0.1:5173:80"
```

From the same directory, start the application.

```sh
docker compose up
```

Open [http://localhost:5173](http://localhost:5173).
````
