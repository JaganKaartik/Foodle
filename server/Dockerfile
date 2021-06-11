FROM node:alpine

# Create work directory
WORKDIR /app

COPY package.json yarn.lock ./

# Install app dependencies (no lockfile)
RUN yarn install --pure-lockfile

# Copy app source to work directory
COPY . .

# Build Files
RUN yarn build

# Expose Port 
EXPOSE 7000

# Command
CMD ["yarn","start:prod"]
