FROM node:alpine

#Create app directory
WORKDIR /usr/src/app

#Install app dependenceis
COPY package.json .

RUN npm install

# Bundle App source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]