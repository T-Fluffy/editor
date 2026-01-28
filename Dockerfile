# Use Node 24 LTS
FROM node:24-alpine

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy the rest
COPY . .

# Vite default port
EXPOSE 5173

# Run in host mode so you can access it from your Windows browser
CMD ["npm", "run", "dev", "--", "--host"]