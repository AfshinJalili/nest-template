# ---- Base Node ----
FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install
COPY . .

# ---- Build ----
FROM dependencies AS build
RUN npm run build

# ---- Release ----
FROM node:lts-alpine AS release
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/config.yaml ./
COPY --from=build /app/package*.json ./
RUN npm install
EXPOSE 3000
CMD ["node", "dist/main"]
