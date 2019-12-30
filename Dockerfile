FROM node:10-alpine
RUN apk add --no-cache bash

WORKDIR /app

# install and copy project
COPY package*.json ./
RUN yarn install
COPY . .

# serve the app
CMD ["yarn" ,"run", "start"]