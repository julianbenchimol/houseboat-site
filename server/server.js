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
//gets homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/pages/index.html'));
})
//gets modern models
app.get('/modern-models', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/pages/modern-models.html'));
})
//gets apartment models
app.get('/apartment-models', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/pages/apartment-models.html'));
})

//API call for houseboat models
app.get('/api/models', (req, res)=>{
    db.query('SELECT * FROM models', function(err, results){
        res.json(results);
    })
})

app.listen(PORT, ()=>{
    console.log(`App listening at ${PORT}`);
})