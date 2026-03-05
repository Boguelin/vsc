# Página de Ciberseguridad — Frontend + Backend skeleton

Proyecto de ejemplo: sitio con estilo sci‑fi para explicar ciberseguridad a alumnado de 4º ESO, con subpáginas y backend Express mínimo.

Estructura:

- index.html — página principal (interactiva, nivel básico)
- tools.html — subpágina con información ampliada sobre herramientas
- advanced.html — subpágina con contenido de mayor nivel y ejercicios interactivos
- server/server.js — backend Express que sirve contenido JSON y huecos para imágenes
- package.json — dependencias y script de inicio

Instalación y ejecución (Linux):

```bash
cd "pagina web"
npm install
npm start
```

El servidor se levantará en `http://localhost:3000` y sirve los archivos estáticos y las APIs:

- `GET /api/content` — contenido principal (JSON)
- `GET /api/tools` — detalles de herramientas (JSON)
- `GET /api/advanced` — contenido avanzado (JSON)
- `GET /api/images/:id` — hueco para imágenes (por ahora devuelve 204 No Content)

Las páginas contienen ahora contenido ampliado:

* La página principal incluye secciones adicionales sobre amenazas comunes y una herramienta interactiva para probar contraseñas.
* `tools.html` ofrece más herramientas y un pequeño quiz de situación.
* `advanced.html` incorpora ejercicios de cifrado (César, Vigenère, SHA‑256) y explicaciones de algoritmos modernos como AES y RSA.

Notas para el profesor:
- Los endpoints `/api/images/:id` están pensados como puntos donde más tarde puede integrarse un almacenamiento (filesystem, S3, etc.). Actualmente devuelven 204 para indicar hueco.
- Puede editar los JSON entregados en `server/server.js` para personalizar los textos, listas y rutas de imágenes.
