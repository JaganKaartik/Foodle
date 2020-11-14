FROM node:latest

# Create work directory
WORKDIR /app

# Install runtime dependencies
RUN npm install yarn 

COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy app source to work directory
COPY ./dist .

# Expose Port 
EXPOSE 7000

CMD ["yarn","dev"]
