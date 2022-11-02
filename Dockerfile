FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY store-frontend/ ./store-frontend/
RUN cd store-frontend && npm install && npm run build

FROM node:14 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/store-frontend/dist ./store-frontend/dist
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/server.js ./api/

EXPOSE 80

CMD ["node", "./api/server.js"]