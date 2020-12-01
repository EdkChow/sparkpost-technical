FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 8000

CMD node server/server.js

COPY . .
