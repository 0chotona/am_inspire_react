FROM node:latest AS build

WORKDIR /front

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# prod
FROM nginx:latest

COPY --from=build /front/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]