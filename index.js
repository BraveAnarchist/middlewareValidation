import express from "express";
import validation from "./Validation.js";

const app = express();
const port = 8888;
const hostname = "127.0.0.1";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connected to server");
});

app.post("/register", validation, (req, res) => {
  const { firstName, lastName, password, email, phone } = req.body;

  res.status(201).json({
    message: "User registered successfully",
    user: {
      firstName,
      lastName,
      email,
      phone,
    },
  });
  console.log({
    message: "User registered successfully",
    user: {
      firstName,
      lastName,
      email,
      phone,
    },
  })
});

app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(err.status || 400).json({ error: err.message });
  } else {
    next();
  }
});

app.listen(port, hostname, () => console.log("Server started at " + port));
