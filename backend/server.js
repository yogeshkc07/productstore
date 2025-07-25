const express = require("express");
const { connectDB } = require("./database/database");
const app = express();
require("dotenv").config();

const productRoute = require("./routes/productRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
