# -------- Build Stage --------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy only package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy application source code
COPY . .

# Optional: Build the app (uncomment if needed)
# RUN npm run build


# -------- Production Stage --------
FROM node:18-alpine AS production

# Set working directory
WORKDIR /usr/src/app

# Only copy production dependencies
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy application source (or just /dist if built)
COPY --from=builder /usr/src/app ./

# Expose app port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
