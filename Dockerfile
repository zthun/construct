FROM node:lts AS setup
WORKDIR /usr/dev
COPY . .
RUN npm i -g corepack && corepack enable && yarn install

FROM setup AS analyze
RUN yarn lint
