const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.model.js");
const productRoute = require("./routes/product.route.js");
const path = require("path");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(express.static("public"));
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

mongoose
  .connect(
    "mongodb+srv://rvidyasulaiman:bUkK5GvyEAWDqRow@backend.wkykpll.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
