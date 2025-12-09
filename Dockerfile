FROM node:18-alpine

WORKDIR /app

COPY ./ /app

RUN npm insatll -g http-server

EXPOSE 8080

CMD ["http-servcer", "-p", "8080"]

