const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./config/connecDatabase");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const orders = require("./routes/order");

connectDatabase();

app.use(cors());
app.use(express.json());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `The sever is listened to ${process.env.PORT} port in ${process.env.NODE_ENV}`
  );
});
