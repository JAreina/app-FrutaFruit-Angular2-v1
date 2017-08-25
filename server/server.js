'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(cors());


app.get('/api/frutas', (req,res)=>{
  let frutas = [
    {
   id: 1,
   nombre: 'Manzana',
   descripcion: '',
   preciokg: 1.99,
   variedad:"Gold",
   origen: "España",
   calibre:"4/6"
},
{
  id: 2,
  nombre: 'Pera',
  descripcion: '',
  preciokg: 0.99,
  variedad:"Mediterránea",
  origen: "España",
  calibre:"3/6"
},
{
  id: 3,
  nombre: "Patatas",
  descripcion: '',
  preciokg: 0.89,
  variedad:"Nueva",
  origen: "España",
  calibre:"6/6"
}
  ];
  res.json(frutas);
})

app.listen(9999);
console.log('SERVIDOR EN --> localhost:9999');
