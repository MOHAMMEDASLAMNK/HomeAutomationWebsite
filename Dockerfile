# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port on which your app runs (usually 3000 for development)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]