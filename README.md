# Simple Chat App with geckos.io

## About

This example uses geckos.io ^2.3.2

## How To Start

To clone and run this example, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ npx gitget https://github.com/geckosio/simple-chat-app-example

# Go into the repository
$ cd simple-chat-app-example

# Install dependencies
$ npm install

# Start the app
$ npm start

# Done
# Now open your browser on http://localhost:8080 or http://127.0.0.1:8080
```

## Server

Make sure you open ports 3000/tcp and 1025-65535/udp

## Dockerize

```
# build
docker build --progress=plain -t geckos-chat-app .

# run
docker run -p 3000:3000/tcp -p 10000-10007:10000-10007/udp geckos-chat-app
```

### From Docker Hub

```
docker run -d --rm -p 3000:3000/tcp -p 10000-10007:10000-10007/udp yandeu/geckos.io-simple-chat-app:latest
```

## Multiple docker containers

Run two docker containers with different ports.

```bash
docker run --pull always -d --rm -p 3000:3000/tcp -p 10000:10000/udp -e PORT_RANGE_MIN=10000 -e PORT_RANGE_MAX=10000 yandeu/geckos.io-simple-chat-app:latest
docker run --pull always -d --rm -p 3001:3000/tcp -p 10001:10001/udp -e PORT_RANGE_MIN=10001 -e PORT_RANGE_MAX=10001 yandeu/geckos.io-simple-chat-app:latest
```
