﻿
# 📰 Scraper del Blog de Angular con Puppeteer

Este proyecto realiza scraping del blog oficial de Angular ([blog.angular.dev](https://blog.angular.dev)) para extraer información de sus artículos recientes. Los datos obtenidos se exportan automáticamente en formatos **JSON**, **CSV** y **XLSX**.

---

## 📌 Tecnologías utilizadas

- [Node.js]
- [Puppeteer]
- [json2csv]
- [xlsx]

---

## ⚙️ ¿Qué hace este scraper?

1. Abre el blog de Angular con Puppeteer.
2. Extrae información relevante de cada artículo:
   -  Título
   -  Autor
   -  Fecha de publicación
   -  Avatar del autor
   -  Reacciones (likes)
   -  Comentarios
3. Exporta automáticamente los datos en los siguientes formatos:
   - JSON (`datos.json`)
   - CSV (`datos.csv`)
   - Excel (`datos.xlsx`)

---

## 📁 Estructura del proyecto

```
.
├── app.js               # Código principal
├── datos.json           # Datos exportados en JSON
├── datos.csv            # Datos exportados en CSV
├── datos.xlsx           # Datos exportados en Excel
```

---

## ▶️ Cómo ejecutar

1. Instala las dependencias necesarias:
   ```bash
   npm install puppeteer json2csv xlsx
   ```

2. Ejecuta el script:
   ```bash
   node app.js
   ```

3. Los archivos exportados aparecerán en el mismo directorio donde está el script.

---

## 📝 Notas adicionales

- El navegador se abre en modo visible (`headless: false`) para que puedas ver el proceso.
- El timeout de carga de página se ha extendido a 60 segundos para evitar errores.
- Se usa `try/catch` para manejo de errores y asegurar el cierre del navegador en caso de fallos.

---

## 🧑‍💻 Autor

- 📧 [Sergio Monter Lara]( dazer.mc1397@gmail.co. / 2020704@utsh.edu.mx)
- 💼 Proyecto académico para prácticas de extracción de conocimiento en bases de datos
