FROM node:22.6.0-alpine AS newsaggregator

# Declaring env
ENV NODE_ENV=production
ENV DISABLE_ESLINT_PLUGIN=true

WORKDIR /news-aggregator

COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN rm -rf node_modules

RUN npm install

COPY . .


# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=newsaggregator /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf