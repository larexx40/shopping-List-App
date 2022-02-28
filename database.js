const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',	
    database: 'shoppinglist'
});

connection.connect((err)=>{
    if(err){
      throw err;
    }else{
      console.log("connected succesfully");
    }
});



module.exports = connection;