FROM mcr.microsoft.com/playwright:v1.39.0-jammy

WORKDIR /app
COPY . /app/

RUN npm install

CMD ["npm", "run", "test:e2e"]