const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "ems-database.cxkw0ou2kwbs.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "eXELa54zZYcaH78axhW7",
  database: "ems-db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// -------------------- REGISTER ROUTES --------------------
// Fetch all registered users
app.get("/register", (req, res) => {
  db.query("SELECT * FROM registration", (err, data) => {
    if (err) {
      console.error("Error fetching registration data");
      console.log(err)
      return res.status(500).send("Error fetching data");
    }
    res.json(data);
  });
});

// Register a new user
app.post("/register", (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const query = "INSERT INTO registration (name, email, password, confirm_password) VALUES (?,?,?,?)";

  db.query(query, [name, email, password, confirm_password], (err) => {
    if (err) {
      console.log(err)
      return res.status(500).send("Error inserting data");
    }
    res.status(200).send("Success");
  });
});

// -------------------- OUTDOOR ROUTES --------------------
// Fetch all outdoor entries
app.get("/outdoor", (req, res) => {
  db.query("SELECT * FROM outdoor", (err, data) => {
    if (err) {
      console.error("Error fetching outdoor data");
      return res.status(500).send("Error fetching data");
    }
    res.json(data);
  });
});

// Insert new outdoor entry
app.post("/outdoor", (req, res) => {
  const { id, venue, address, type, baseprice } = req.body;
  const query = "INSERT INTO outdoor (id, venue, address, type, baseprice) VALUES (?,?,?,?,?)";

  db.query(query, [id, venue, address, type, baseprice], (err) => {
    if (err) {
      console.error("");
      return res.status(500).send("Error inserting data");
    }
    res.status(200).send("Success");
  });
});

// Delete an outdoor entry by ID
app.delete("/outdoor/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM outdoor WHERE id = ?";

  db.query(query, [id], (err) => {
    if (err) {
      console.error("Error deleting outdoor data");
      return res.status(500).send("Error deleting data");
    }
    res.status(200).send("Deleted successfully");
  });
});

// -------------------- INDOOR ROUTES --------------------
// Fetch all indoor entries
app.get("/indoor", (req, res) => {
  db.query("SELECT * FROM indoor", (err, data) => {
    if (err) {
      console.error("Error fetching indoor data" + err);
      return res.status(500).send("Error fetching data");
    }
    res.json(data);
  });
});

// Insert new indoor entry
app.post("/indoor", (req, res) => {
  const { id, venue, address, type, baseprice } = req.body;
  const query = "INSERT INTO indoor (id, venue, address, type, baseprice) VALUES (?,?,?,?,?)";

  db.query(query, [id, venue, address, type, baseprice], (err) => {
    if (err) {
      console.error("Error inserting indoor data");
      return res.status(500).send("Error inserting data");
    }
    res.status(200).send("Success");
  });
});

// Delete an indoor entry by ID
app.delete("/indoor/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM indoor WHERE id = ?";

  db.query(query, [id], (err) => {
    if (err) {
      console.error("Error deleting indoor data");
      return res.status(500).send("Error deleting data");
    }
    res.status(200).send("Deleted successfully");
  });
});

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
