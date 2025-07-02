FROM node:20-slim

WORKDIR /app

# Copiar package.json primero para aprovechar el cache de Docker
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

EXPOSE 3000
CMD ["npm", "test"]