FROM node:18-bullseye-slim AS build

WORKDIR /usr/src/app
COPY . .

RUN apt update -yq && apt upgrade -yq

RUN rm -rf node_modules
RUN npm install
RUN npm run build
RUN npm prune --production

FROM node:18-bullseye-slim
ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3000/tcp
EXPOSE 10000-10007/udp

CMD ["node", "server.mjs"]