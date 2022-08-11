FROM node:18-alpine
WORKDIR /
COPY package.json package-lock.json /

ENV NODE_ENV=production
RUN npm install --production

COPY . /
EXPOSE 3000

CMD ["node", "index.js"]