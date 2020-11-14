FROM node:latest

# Create work directory
WORKDIR /app

# Install runtime dependencies
RUN npm install yarn 

COPY package.json ./ && yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy app source to work directory
COPY . .

# Expose Port 
EXPOSE 7000

# Build and run the app
RUN yarn build

CMD ["yarn","dev"]
