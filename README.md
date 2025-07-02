# Calculator App - TDD y Docker

Este proyecto es un ejemplo práctico de cómo implementar **Test-Driven Development (TDD)** usando **Jest** y containerización con **Docker**. Es una calculadora simple que implementa las operaciones básicas: suma, resta, multiplicación y división.

## 🎯 Objetivos del Proyecto

- Aprender y aplicar metodología **TDD (Test-Driven Development)**
- Configurar y usar **Jest** para testing en JavaScript con ES Modules
- Containerizar la aplicación usando **Docker**
- Implementar buenas prácticas de desarrollo y testing

## 🏗️ Estructura del Proyecto

```
calculator-app/
├── src/
│   ├── calculator.js      # Funciones de la calculadora
│   └── index.mjs         # Archivo principal (legacy)
├── test/
│   └── calculator.test.js # Tests unitarios
├── jest.config.js        # Configuración de Jest
├── package.json          # Dependencias y scripts
├── dockerfile            # Configuración de Docker
└── README.md             # Documentación
```

## 🧪 Test-Driven Development (TDD)

Este proyecto sigue la metodología TDD con el ciclo **Red-Green-Refactor**:

1. **Red**: Escribir un test que falle
2. **Green**: Escribir el código mínimo para que el test pase
3. **Refactor**: Mejorar el código manteniendo los tests verdes

### Tests Implementados

```javascript
// Funciones testadas:
- add(a, b)        // Suma
- subtract(a, b)   // Resta  
- multiply(a, b)   // Multiplicación
- divide(a, b)     // División (con manejo de división por cero)
```

## ⚙️ Configuración de Jest con ES Modules

Una de las principales lecciones fue configurar Jest para trabajar con **ES Modules**:

### jest.config.js
```javascript
const config = {
  verbose: true,
  transform: {},
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".js"],
  globals: {
    global: true
  }
};
```

### package.json
```json
{
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  }
}
```

## 🐳 Docker

### Dockerfile Optimizado

```dockerfile
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
```

**Lecciones aprendidas sobre Docker:**
- Copiar `package.json` antes que el resto del código para optimizar el cache
- Usar imágenes slim para reducir el tamaño
- Estructurar las capas de manera eficiente

## 🚀 Cómo Usar

### Prerequisitos
- Node.js 20+
- Docker (opcional)

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/manuelguirado/calculator-app.git
cd calculator-app

# Instalar dependencias
npm install

# Ejecutar tests
npm test
```

### Usando Docker

```bash
# Construir la imagen
docker build -t calculator-app .

# Ejecutar los tests en contenedor
docker run calculator-app
```

### Con Docker Compose

```bash
# Si tienes docker-compose.yml configurado
docker compose up
```

## 📝 Lo Que Aprendí

### 1. **TDD (Test-Driven Development)**
- Escribir tests antes que el código de producción
- Los tests actúan como documentación viva
- Refactoring seguro con cobertura de tests
- Mayor confianza en el código

### 2. **Jest con ES Modules**
- Configuración específica para ES Modules en Node.js
- Uso de `--experimental-vm-modules` flag
- Configuración de `extensionsToTreatAsEsm`
- Resolución de conflictos entre `jest.config.js` y configuración en `package.json`

### 3. **Docker**
- Optimización del Dockerfile para aprovechar el cache
- Importancia del orden de las instrucciones COPY
- Uso de imágenes base optimizadas (node:slim)
- Separación de dependencias y código fuente

### 4. **Buenas Prácticas**
- Estructura de proyecto clara y organizada
- Separación de concerns (tests vs código)
- Manejo de errores (división por cero)
- Documentación completa

## 🔧 Scripts Disponibles

```bash
npm test          # Ejecutar todos los tests
npm test -- --watch  # Ejecutar tests en modo watch
```

## 🐛 Problemas Resueltos

1. **Error de ES Modules**: Configuración correcta de Jest para ES6 imports
2. **Docker build fails**: Orden correcto de COPY en Dockerfile
3. **Multiple Jest configs**: Resolución de conflictos de configuración

## 📚 Recursos Útiles

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Jest ES Modules](https://jestjs.io/docs/ecmascript-modules)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [TDD Best Practices](https://testdriven.io/test-driven-development/)

## 📄 Licencia

ISC

---

Este proyecto sirvió como base para entender los fundamentos de TDD y la containerización con Docker en un entorno de desarrollo JavaScript moderno. 