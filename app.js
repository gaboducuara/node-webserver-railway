require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path') // ---> importe de metodo para funcionamiento del path en el numero 10

const app = express();
const PORT = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(path.join( __dirname, 'views' , 'partials'));
// Servir contenido estatico 'sirve para leer la carpeta public'
app.use(express.static('public'));

// Este es el controlador, el cual se mandara informacion al home.hbs para que sea renderizada
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Gabriel Mancilla D.',
    titulo: 'Curso node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Gabriel Mancilla D.',
    titulo: 'Curso node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Gabriel Mancilla D.',
    titulo: 'Curso node'
  });
});

// console.log(res)

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

// se agrega asterisco a la ruta con el fin de agregar un 
// a la hora de ir a la pagina 
app.get('*', (req, res) => {
  res.send('404 | page not found')
});

app.listen(PORT , () => {
  console.log(`Conexion en el puerto ${PORT}`)
});