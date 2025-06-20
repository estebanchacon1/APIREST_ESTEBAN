const express =require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postRoute=require('./routes/matricula');//
app.use('/servicios', postRoute);

mongoose.connect('mongodb+srv://estebanluischacon47:Estebancar9no35-28@senaprojecto.2bspfwv.mongodb.net/?retryWrites=true&w=majority&appName=SENAPROJECTO', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection; // creo conexion a la base de datos
connection.once('open', () => {
    console.log('MongoDB conexion de base de datos establecida');
});

app.listen(10000);// puerto de escucha