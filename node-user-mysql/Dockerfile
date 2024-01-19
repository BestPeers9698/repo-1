FROM node:18-alpine
WORKDIR /app
COPY . .
ENV DB_HOST
ENV DB_PORT
ENV DB_USER
ENV DB_PASSWORD
ENV DB_NAME
RUN yarn install --production
CMD ["node", "index.js"]
EXPOSE 3000