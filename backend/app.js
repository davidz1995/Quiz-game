require('dotenv/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

//Import routers
const usersRouter = require('./routers/users');
const questionsRouter = require('./routers/questions');

//Enable CORS
app.use(cors());
app.options('*', cors());

//Middlewares
app.use(express.json());
app.use(morgan('tiny')); 

const api = process.env.API_URL;

//Routers
app.use(`${api}/users`, usersRouter);
app.use(`${api}/questions`, questionsRouter);

//Conexion con MongoDB
mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Database connection is ready');
})
.catch(()=>{
    console.log('Can not connect to database');
})

//Inicio de servidor
app.listen(4000, ()=>{
    console.log('Server is running in port 4000');
})