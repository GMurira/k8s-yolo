# -------- Build Stage --------
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .

# -------- Production Stage --------
FROM node:18-alpine AS production
WORKDIR /usr/src/app

# Copy production dependencies and app code
COPY --from=builder /usr/src/app . 

# Ensure proper permissions
RUN chmod -R 755 /usr/src/app

# Set production environment
ENV NODE_ENV=production

EXPOSE 5000

CMD ["node", "server.js"]
