FROM node:18-alpine
WORKDIR /app
COPY . .
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USER=root
ENV DB_PASSWORD=new-shoot
ENV DB_NAME=new-db
RUN yarn install --production
CMD ["node", "index.js"]
EXPOSE 3000