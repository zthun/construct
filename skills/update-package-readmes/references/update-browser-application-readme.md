# Update Browser Application README

Browser applications are usually only a portion of some hosted solution.  
The main thing to know is how to install the service and how to run it.

## Readme Example

````md
# Pokedexii Web

Pokedexxi's website is the frontend for the Pokedexii application.

## Running Locally

### Using your own server (NGINX, Apache, Etc)

```sh
npm i -g @zthun/browser-application
```

1. Point your server's root to your local node modules
   @zthun/browser-application/dist folder.
1. Open your browser and navigate to your configuration

## Docker

```sh
docker run zthun/browser-application -p 5173:80
# Open browser on port 5173
```

## Docker Compose

```docker-compose
Create a compose example
```
````
