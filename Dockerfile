FROM node:lts-alpine
WORKDIR /todo-vuejs
COPY package*.json ./
RUN npm install -q
RUN npm install -g @vue/cli
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]

