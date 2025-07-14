# -------- Build Stage --------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy app source and build
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build


# -------- Production Stage --------
FROM nginx:alpine

# Copy build output from previous stage
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose app port
EXPOSE 80

# Start NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
