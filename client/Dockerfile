FROM node:alpine

# Create work directory
WORKDIR /app

COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --pure-lockfile

# Copy app source to work directory
COPY . .

# Expose Port 
EXPOSE 3000

CMD [ "yarn", "start" ]