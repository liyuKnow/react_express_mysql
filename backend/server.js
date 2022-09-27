import express, { response } from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// connect to db
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_node_mysql",
});

// home route
app.get("/", (req, res) => {
  res.json({
    message: "hello this is express server",
  });
});

// Get all data
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    res.json({
      message: "success",
      data: data,
    });
  });
});

// get one record
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const q = "SELECT * FROM books WHERE id = (?) LIMIT 1";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json({
      message: "success",
      data: data,
    });
  });
});

// insert into db
app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books(`title`, `description`, `price`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json({
      message: "success",
      data: data,
    });
  });
});

// update record
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// delete record
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// server port
app.listen(8080, () => {
  console.log("app is running on http://localhost:8080");
});
