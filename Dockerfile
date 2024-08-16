FROM node:22.6.0-alpine AS newsaggregator

# Declaring env
ENV NODE_ENV=production
ENV DISABLE_ESLINT_PLUGIN=true

# Set Working directory

WORKDIR /news-aggregator

COPY package.json package-lock.json ./

# Make sure to clear the NPM cache and also remove old node_modules to avoid any conflicts.
RUN npm cache clean --force
RUN rm -rf node_modules

# Install both development and production packages to avoid errors
RUN npm install --production=false

# Copy All the folders and files of the current directory to the docker

COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=newsaggregator /news-aggregator/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf