FROM node:18

WORKDIR /app/client

# Copy only necessary files
COPY . /app/client/

WORKDIR /app/client/client

RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200/tcp

CMD ng serve --host 0.0.0.0
