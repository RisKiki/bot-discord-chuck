FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN rm -rf node_modules/ && npm install
RUN npm install nodemon --global
COPY . .
EXPOSE 8080
CMD ["nodemon", "server.js"]