FROM node:13.5.0-alpine
RUN npm install -g --unsafe-perm prisma2

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

RUN npm init -y
RUN npm install @prisma/photon

CMD [ "prisma2", "dev" ]
