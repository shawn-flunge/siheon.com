FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npx tailwindcss -i ./tailwind.css -o ./output.css

FROM nginx:alpine
COPY --from=build /app/index.html /usr/share/nginx/html/
COPY --from=build /app/output.css /usr/share/nginx/html/
COPY --from=build /app/public /usr/share/nginx/html/public
