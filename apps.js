const express = require('express');
const shields = require('shieldsio');
const { createCanvas, loadImage } = require('canvas'); // Usaremos la biblioteca Canvas para renderizar imágenes

const app = express();
const port = process.env.PORT || 3000;

// Ruta para generar badges
app.get('/badge', async (req, res) => {
  const { label, message, color } = req.query;

  // Genera el badge utilizando Shields.io
  const svg = shields.badge({
    label,
    message,
    color,
  });

  // Renderiza el badge en una imagen utilizando Canvas
  const canvas = createCanvas(150, 30);
  const ctx = canvas.getContext('2d');
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = color || 'blue';
  ctx.fillText(label, 10, 20);
  ctx.fillText(message, 80, 20);

  // Convierte la imagen a base64
  const imageBuffer = canvas.toBuffer();
  const base64Image = imageBuffer.toString('base64');

  // Devuelve el badge como respuesta
  res.set('Content-Type', 'image/svg+xml');
  res.send(svg);

  // Genera el código Markdown
  const markdownCode = `facebook`;
  console.log('Código Markdown:', markdownCode);
});

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación generadora de badges!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});