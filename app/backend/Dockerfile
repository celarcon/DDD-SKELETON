FROM node:20.13.1-alpine

WORKDIR /backend

COPY package.json  package-lock.json /backend/

RUN npm install -g npm@9.8.1
RUN npm install

COPY . /backend/

CMD ["npm", "run", "dev:backend"]