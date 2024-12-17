import express from "express";
// import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
