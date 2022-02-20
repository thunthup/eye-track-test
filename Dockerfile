FROM node:16

RUN apt update
RUN apt install

RUN npm install -g serve

COPY /build /build

EXPOSE 8080

CMD ["serve","-s","build","-l","8080"]