# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app-server/

# Copy package.json and package-lock.json to the working directory
COPY . /app-server

WORKDIR /app-server/server

# Install app dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Run your application
CMD ["npm", "run", "dev"]