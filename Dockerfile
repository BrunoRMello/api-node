FROM node:16

WORKDIR /usr/share/api-node

RUN echo "Copiando package.json"
COPY package.json ./
COPY yarn.lock ./

RUN yarn add node-sass

RUN yarn

COPY . ./

RUN echo "Buildando projeto"
RUN yarn build


# change this to your custom port
EXPOSE 3333

# RUN start
CMD ["yarn", "start"]
