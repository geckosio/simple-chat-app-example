# Simple Chat App with geckos.io

## About

This example uses geckos.io ^2.3.1.

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
docker run --pull always -p 3000:3000/tcp -p 10000-10007:10000-10007/udp yandeu/geckos.io-simple-chat-app:latest
```
