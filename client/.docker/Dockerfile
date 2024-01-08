FROM node:18

WORKDIR /usr/src/app-client
COPY . /usr/src/app-client/

WORKDIR /usr/src/app-client/client

RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200/tcp

CMD ng serve --host 0.0.0.0