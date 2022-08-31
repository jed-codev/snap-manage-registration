FROM node:14.15.0
RUN mkdir /backend_service
ADD . /backend_service
WORKDIR /backend_service
ENV DATABASE_URL=postgres://postgres:postgres@database-service:5432/postgres
RUN cd /backend_service && npm install
# RUN npx prisma migrate dev --name init
CMD ["npm", "start"]
