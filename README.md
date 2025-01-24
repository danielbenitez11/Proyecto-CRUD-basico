# 📌 Proyecto CRUD Básico

## 📖 Descripción

Este es un proyecto **CRUD básico** desarrollado con **Angular** para el frontend y **Spring Boot** para el backend. Utiliza **MySQL** como base de datos y **Bootstrap** para el diseño responsivo. Permite realizar operaciones básicas como **Crear, Leer, Actualizar y Eliminar** registros.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** Angular, TypeScript, Bootstrap
- **Backend:** Spring Boot, Java
- **Base de Datos:** MySQL
- **Herramientas:** Git, Postman, Node.js, Maven

## 🚀 Instalación y Configuración

### 🔹 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalados:

1. **Node.js y npm** (para Angular) 👉 [Descargar aquí](https://nodejs.org/)
2. **Angular CLI** (si no lo tienes, instálalo con `npm install -g @angular/cli`)
3. **Java JDK 17+** 👉 [Descargar aquí](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
4. **Maven** 👉 [Descargar aquí](https://maven.apache.org/download.cgi)
5. **MySQL Server** 👉 [Descargar aquí](https://dev.mysql.com/downloads/installer/)

### 🔹 Configuración de la Base de Datos

1. Inicia MySQL Server.
2. Crea una base de datos con el siguiente comando:
   ```sql
   CREATE DATABASE proyecto_crud;
   ```
3. Modifica el archivo `application.properties` en el backend con tus credenciales de MySQL:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/proyecto_crud
   spring.datasource.username=tu_usuario
   spring.datasource.password=tu_contraseña
   ```

### 🔹 Instalación del Backend (Spring Boot)

```bash
cd proyecto_porfolio_back
mvn clean install
mvn spring-boot:run
```

El backend estará disponible en: `http://localhost:8080`

### 🔹 Instalación del Frontend (Angular)

```bash
cd proyecto_porfolio_front
npm install
ng serve
```

El frontend estará disponible en: `http://localhost:4200`

## 📌 Uso del Proyecto

- Para probar las APIs, usa **Postman** o **Swagger**.
- Accede a `http://localhost:4200` para usar la interfaz gráfica.
- Asegúrate de que el backend esté corriendo antes de iniciar el frontend.

## 📜 Licencia

Este proyecto está bajo la **MIT License**.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor abre un **Pull Request** o reporta un problema en la sección de **Issues**.

---

📌 *Desarrollado por **Daniel Benítez García** 💻*
