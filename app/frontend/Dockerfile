FROM node:18.17.0-alpine

WORKDIR /frontend

COPY package.json  package-lock.json /frontend/

RUN npm install

COPY . /frontend/

CMD ["npm", "run", "dev:frontend"]