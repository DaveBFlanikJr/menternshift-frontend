# Use the official Node.js 18 LTS image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "preview"]

# To build the docker image, run the command:
# docker build -t menternshift-frontend .

#To run the container, use the command:
#docker run -p 3000:3000 myapp