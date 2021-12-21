FROM node:current-alpine

WORKDIR /app

COPY src/package.json .
RUN npm install

COPY src/ .

CMD ["npm", "run", "start"]
