# https://hub.docker.com/_/node/
FROM node:6.6.0-slim
MAINTAINER drad "drader@adercon.com"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3333
CMD [ "npm", "start" ]
