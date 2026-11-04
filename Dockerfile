FROM node:lts as setup
WORKDIR /usr/dev
COPY . .
RUN yarn install

FROM build as analyze
RUN yarn lint
