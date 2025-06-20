const express =require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postRoute=require('./routes/post');//
app.use('/servicios', postRoute);

mongoose.connect('mongodb+srv://sena2225:N7OxCaUtjvW7KVH2@formacion.nxr7elr.mongodb.net/post?retryWrites=true&w=majority&appName=formacion', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection; // creo conexion a la base de datos
connection.once('open', () => {
    console.log('MongoDB conexion de base de datos establecida');
});

app.listen(10000);// puerto de escucha