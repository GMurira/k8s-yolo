# -------- Build Stage --------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Install dependencies and build in one layer
COPY package*.json ./
RUN npm ci

# Copy app source and build the project
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build


# -------- Production Stage --------
FROM nginx:alpine

# Copy build output and NGINX config in a single layer
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose app port and run NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
