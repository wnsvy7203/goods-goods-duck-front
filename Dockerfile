FROM node:18-alpine AS base

WORKDIR /usr/src/app
COPY . .
RUN yarn cache clean --force
RUN yarn install
RUN yarn build
EXPOSE 3000


ENTRYPOINT ["yarn", "start"]
