# Stage 1: Build the Next.js application
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, pnpm-lock.yaml)
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for static export
# This assumes your `build` script in package.json runs `next build`
# and your next.config.js has `output: 'export'`.
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine AS runner

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static files from the build stage
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Commands
# Dev: docker compose up
# Build: docker build -t grooveshare-web .