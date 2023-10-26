const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let PORT = 3000;


// Use EJS 
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Use body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/nossos_produtos', (req, res) => {
    res.render('products');
});

app.get('/download_app', (req, res) => {
    res.render('sign_it');
});

// Connect server
app.listen(PORT, (err) => {
    if(err){
        console.log('Error, is not loading server...');
    }
    else {
        console.log(`Server is runing, in port ${PORT}...`);
    }
});