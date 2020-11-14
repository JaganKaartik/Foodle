FROM node:latest

# Create work directory
WORKDIR /app

# Install runtime dependencies
RUN npm install yarn 

# Copy app source to work directory
COPY . .

# Expose Port 
EXPOSE 7000

# Install app dependencies
RUN yarn install

# Build and run the app
RUN yarn build

CMD ["yarn","dev"]
