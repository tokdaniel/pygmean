FROM node:13.5.0
RUN npm install -g --unsafe-perm prisma2

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

RUN npm install @prisma/photon

CMD [ "prisma2", "dev" ]
