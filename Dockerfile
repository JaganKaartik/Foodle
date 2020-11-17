FROM node:10

# Create work directory
WORKDIR /app

COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --pure-lockfile

# Copy app source to work directory
COPY . .

# Build Files
RUN yarn build

# Expose Port 
EXPOSE 7000
