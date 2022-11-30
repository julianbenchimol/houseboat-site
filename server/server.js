const urlencoded = require('body-parser');
const express = require('express');
const path = require('path');
const mysql = require('mysql');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ann131126!',
        database: 'houseboat_models'
    }
)

db.query('SELECT * FROM models', function(err, results){
    console.log(results);
})
app.listen(PORT, ()=>{
    console.log(`App listening at ${PORT}`);
})