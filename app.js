const mysql = require('mysql') 
const express = require('express');
const connection = require('./database');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs', {items: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  const name = req.body.itemName;
  const quantity= req.body.itemQuantity;
  const price = req.body.itemPrice
  connection.query(
    'INSERT INTO items(name, quantity, price) VALUES (?, ?, ?)',
    [name, quantity, price],
    (err, results)=>{
      if(err){throw err}
      else{res.redirect('/index')}
    }
  )
});


app.listen(3000);
