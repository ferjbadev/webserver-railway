require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


app = express();
puerto = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

// Servidor estatico
app.use(express.static('public'));

app.get('/', (req, res)=> {
  res.render('home', {
    nombre: 'Fernando Barrera',
    titulo: 'Practica de Node'
  });
});

app.get('/', (req, res)=> {
  res.render('generic', {
    nombre: 'Fernando Barrera',
    titulo: 'Practica de Node'
  });
});


app.get('/', (req, res)=> {
  res.render('elements', {
    nombre: 'Fernando Barrera',
    titulo: 'Practica de Node'
  });
});

app.listen(puerto,()=>{
  console.log('El servidor esta conectado en el puerto: ', puerto);
})