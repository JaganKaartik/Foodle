FROM node:10

# Create work directory
WORKDIR /app

# Install runtime dependencies
RUN npm install yarn 

COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy app source to work directory
COPY . .

# Build Files
RUN yarn Build

# Expose Port 
EXPOSE 7000

CMD ["yarn","dev"]
