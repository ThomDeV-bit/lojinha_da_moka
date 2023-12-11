FROM node:18.17.0-slim

WORKDIR /usr/src/api

COPY . .

COPY ./.env.production ./.env

RUN npm install --quiet --no-optional --no-found --loglevel=error

RUN npm run build

EXPOSE 3000
EXPOSE 3306

CMD ["npm","run","start:prod"]
