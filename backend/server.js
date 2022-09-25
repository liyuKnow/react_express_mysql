import express, { response } from "express"
import mysql from "mysql"

// express server
const app = express()

// connect to db
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "react_node_mysql"
})

app.get('/', (req, res) => {
    res.json({
        message : "hello this is the server"
    })
})

// Get all data
app.get('/books', (req, res) => {
    const q = "SELECT * FROM books";

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        
        res.json({
            message : "hello this is the server",
            data : data
        })
    })
})

// server port
app.listen(8080, () => {
    console.log("app is running on http://localhost:8080")
})