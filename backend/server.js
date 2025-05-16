import mysql from 'mysql';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lms'
});

db.connect((err) => {
    if (err) {
        console.log("Failed to connect to MySQL DB:", err);
    } else {
        console.log("Connection succeeded to MySQL DB");
    }
});

///////////////////// BOOK ROUTES /////////////////////

// Display all books
app.get('/displaybooks', (req, res) => {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ message: "Failed to fetch books", error: err });
        return res.status(200).json(result);
    });
});

// Add a new book
app.post('/addbook', (req, res) => {
    const { bookname, borrowername, publisher } = req.body;
    const sql = "INSERT INTO books(bookname, borrowername, publisher) VALUES (?, ?, ?)";
    db.query(sql, [bookname, borrowername, publisher], (err, result) => {
        if (err) return res.status(400).json({ message: "Failed to add book", error: err });
        return res.status(200).json({ message: "Book added successfully", result });
    });
});

///////////////////// BORROWER ROUTES /////////////////////

// Display all borrowers
app.get('/displayborrower', (req, res) => {
    const sql = "SELECT * FROM borrower";
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ message: "Failed to fetch borrowers", error: err });
        return res.status(200).json(result);
    });
});

// Add a new borrower
app.post('/addborrower', (req, res) => {
    const { borrowername, b_date, return_d } = req.body;
    const sql = "INSERT INTO borrower(borrowername, b_date, return_d) VALUES (?, ?, ?)";
    db.query(sql, [borrowername, b_date, return_d], (err, result) => {
        if (err) return res.status(400).json({ message: "Failed to add borrower", error: err });
        return res.status(200).json({ message: "Borrower added successfully", result });
    });
});

// Delete a borrower by ID
app.delete('/deleteborrower/:bid', (req, res) => {
    const { bid } = req.params;
    const sql = "DELETE FROM borrower WHERE bid = ?";
    db.query(sql, [bid], (err, result) => {
        if (err) return res.status(400).json({ message: "Failed to delete borrower", error: err });
        return res.status(200).json(result);
    });
});

// Update a borrower
app.put('/updateborrower/:bid', (req, res) => {
    const { bid } = req.params;
    const { borrowername, b_date, return_d } = req.body;
    const sql = "UPDATE borrower SET borrowername = ?, b_date = ?, return_d = ? WHERE bid = ?";
    db.query(sql, [borrowername, b_date, return_d, bid], (err, result) => {
        if (err) return res.status(400).json({ message: "Failed to update borrower", error: err });
        return res.status(200).json(result);
    });
});

// Get a borrower for updation
app.get('/getborrower/:bid', (req, res) => {
    const { bid } = req.params;
    const sql = "SELECT * FROM borrower WHERE bid = ?";
    db.query(sql, [bid], (err, result) => {
        if (err) return res.status(400).json({ message: "Failed to fetch borrower", error: err });
        return res.status(200).json(result[0]);
    });
});

/////////////////////ADMIN/////////////////////////////////////////
// app.use(express.json()); // Ensure body parsing middleware is included

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM admin WHERE name = ? AND password = ?";
  const { name, password } = req.body;

  db.query(sql, [name, password], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json("Internal server error");
    }
    if (result.length === 0) {
      return res.status(401).json("Wrong credentials");
    }
    return res.status(200).json(`Logged in as ${name}`);
  });
});


app.post('/addadmin', (req, res) => {
  const sql = "INSERT INTO admin (name,password) VALUES(?,?)";
  const { name, password } = req.body;

  db.query(sql, [name, password], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json("Internal server error");
    }
//     if (result.length === 0) {
//       return res.status(401).json("Wrong credentials");
//     }
    return res.status(200).json(result);
  });
});











///////////////////// SERVER RUNNING ON SPECIFIED PORT  /////////////////////
//////////////////////////////// Cool And defined port/////////////////////////////////////////////

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});
