const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', async(req, res) => {
    res.render('register.ejs')
})

app.post('/register', async(req, res) => {
    try{

    }catch{

    }
    req.body.email
})

app.post('/register', (req, res) => {

})

app.listen(3000);