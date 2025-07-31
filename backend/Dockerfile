# -------- Build Stage --------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install all dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# -------- Production Stage --------
FROM node:18-alpine AS production

# Set working directory
WORKDIR /usr/src/app

# Copy only production dependencies
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy only application code (no dev tooling)
COPY --from=builder /usr/src/app .

# Set environment to production
ENV NODE_ENV=production

# Expose app port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
