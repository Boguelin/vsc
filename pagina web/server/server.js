const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API: contenido principal (huecos para que el profesor lo cambie)
app.get('/api/content', (req, res) => {
  res.json({
    intro: 'La ciberseguridad es el conjunto de prácticas y herramientas destinadas a proteger sistemas, redes y datos. Aquí lo explico con rigor académico pero con ejemplos y lenguaje claro para alumnos de 4º ESO.',
    tools: [
      'Antivirus y antimalware',
      'Firewalls (cortafuegos)',
      'Copias de seguridad (backups)',
      'Gestores de contraseñas',
      'VPNs y cifrado'
    ],
    images: ['/api/images/1','/api/images/2']
  });
});

// Endpoint con más detalle para la subpágina de herramientas
app.get('/api/tools', (req, res) => {
  res.json({
    title: 'Herramientas de Ciberseguridad',
    description: 'Explicación más detallada para estudiantes: qué hacen, ejemplos y buenas prácticas.',
    items: [
      {name: 'Antivirus', why: 'Detectan y eliminan malware común; mantener actualizados.'},
      {name: 'Firewalls', why: 'Controlan tráfico entre redes para bloquear accesos no deseados.'},
      {name: 'Backups', why: 'Copias regulares permiten recuperar datos tras fallos o ataques.'},
      {name: 'Gestores de contraseñas', why: 'Generan y almacenan contraseñas seguras para evitar reutilización.'},
      {name: 'VPN y cifrado', why: 'Protegen la privacidad y la integridad de las comunicaciones.'},
      {name: 'Actualizaciones', why: 'Instalar parches cierra vulnerabilidades conocidas.'}
    ]
  });
});

// Endpoint avanzado para la subpágina secundaria
app.get('/api/advanced', (req, res) => {
  res.json({
    title: 'Ciberseguridad — Nivel Avanzado',
    topics: [
      {topic: 'Modelos de amenaza', desc: 'Cómo identificar actores, vectores y activos críticos.'},
      {topic: 'Criptografía básica', desc: 'Principios de cifrado simétrico y asimétrico, uso práctico.'},
      {topic: 'Algoritmos modernos', desc: 'AES, RSA, hash y cómo se usan en la práctica.'},
      {topic: 'Seguridad en redes', desc: 'Segmentación, IDS/IPS y monitorización.'},
      {topic: 'Buenas prácticas para desarrolladores', desc: 'Validación, autenticación y gestión de sesiones.'}
    ]
  });
});

// Rutas para imágenes: actualmente son huecos no funcionales.
app.get('/api/images/:id', (req, res) => {
  // Hueco: devolver 204 No Content para indicar que aquí se puede subir/servir imágenes luego
  res.status(204).end();
});

// Servir frontend estático desde la carpeta raíz del proyecto
app.use(express.static(path.join(__dirname, '..')));

app.listen(port, () => {
  console.log('Servidor backend escuchando en http://localhost:' + port);
});
