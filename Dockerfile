FROM node:15

WORKDIR /var/app

RUN yarn install

COPY . .

CMD ["yarn", "run", "dev"]
