const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();

app.use( express.static('public') );


app.listen(process.env.PORT, () => {
    console.log('El servidor ' +  process.env.PORT  + ' http://localhost:3000 esta funcionando');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})


app.get('/login' , (req , res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/registro' , (req , res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

