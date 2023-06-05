require("dotenv").config();
const cors = require("cors");
const Port = process.env.PORT || 5000;
const express = require("express");
const connectToMongo = require("./db");
// const morgan = require('morgan');
const app = express();
app.use(cors());

const productRouter = require("./routes/product");
// console.log("env", process.env.DB_PASSWORD);

// connectToMongo
connectToMongo();

//bodyParser
app.use(express.json());
// app.use(morgan('default'));

app.use(express.static("public"));
app.use("/products", productRouter.router);


app.listen(Port, () => {
  console.log("app started on ", Port);
});
