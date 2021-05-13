const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nana_db"
})


app.get('/a', (req, res) => {
    db.query("SELECT * FROM video", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/:title', (req, res) => {
    const title = req.params.title;
    db.query("SELECT * FROM video WHERE title = ?", title, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen('3001', () => {
    console.log('Server running on port 3001');
})

