# Build Stage 1: Compiling React Application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package descriptors & install
# Ensure clean dependency install using package-lock.json if available
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Build Stage 2: Serving with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Need custom nginx layout to handle React Router push states properly
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Native NGINX exposes port 80 internally
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
