const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la página principal
});

app.get('/merch', (req, res) => {
    res.render('merch'); // Renderiza la página de merch
});

app.get('/contacto', (req, res) => {
    res.render('contacto'); // Renderiza la página de contacto
});

app.get('/contenido', (req, res) => {
    res.render('contenido'); // Renderiza la página de contenido
});

app.get('/secciones', (req, res) => {
    res.render('secciones'); // Renderiza la página de secciones
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
