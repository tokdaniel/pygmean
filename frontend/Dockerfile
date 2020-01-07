FROM node:13.5.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD [ "npm", "run", "dev" ]
