FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Create public directory if it doesn't exist
RUN mkdir -p public

EXPOSE 3000

CMD ["npm", "start"] 