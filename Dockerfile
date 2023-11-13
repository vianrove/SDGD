# Use a base image for your application
FROM node:alpine

# Set the working directory for your application
WORKDIR /app

# Copy the necessary files and dependencies from your project directory to the container
COPY . .

# Install the required dependencies
RUN npm install

# Expose the port your application will run on
EXPOSE 5173

# Define the entrypoint for your application
CMD ["npm", "start"]