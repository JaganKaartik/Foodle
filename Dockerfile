FROM node:latest

# Create work directory
WORKDIR /app

# Install runtime dependencies
RUN npm install yarn -g

# Copy app source to work directory
COPY . .

# Install app dependencies
RUN yarn install

# Build and run the app
RUN yarn build

CMD yarn start

