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
  console.log(name);
  console.log(quantity);
  console.log(price);
});

app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
});

//call to edit form
app.get('/edit/:id', (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.render('edit.ejs', {item: results[0]});
    }
  );
});

//save edited items
app.post('/update/:id', (req, res) => {
  const name = req.body.itemName;
  const quantity= req.body.itemQuantity;
  const price = req.body.itemPrice
  connection.query(
    'UPDATE items SET name = ?, quantity=?, price=? WHERE id = ?',
    [name, quantity, price, req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
});


app.listen(3000);
