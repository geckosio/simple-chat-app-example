FROM node:18-bullseye AS build

WORKDIR /usr/src/app
COPY . .

RUN apt update -yq && apt upgrade -yq

RUN rm -rf node_modules
RUN npm install
RUN npm run build
RUN npm prune --production

FROM node:18-bullseye
ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
COPY --from=build /usr/src/app/node_modules ./node_modules

CMD node server.mjs