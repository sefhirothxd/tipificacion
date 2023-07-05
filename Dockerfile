# Establece la imagen base de Node.js con la versión 16
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Compila el proyecto Next.js
RUN npm run build

# Expone el puerto 3000 (o el puerto que estés utilizando en tu proyecto Next.js)
EXPOSE 3000

# Ejecuta el comando para iniciar el servidor Next.js
CMD ["npm", "start"]
