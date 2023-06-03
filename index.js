require("dotenv").config();
const express = require("express");
const connectToMongo = require("./db");
// const morgan = require('morgan');
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
// console.log("env", process.env.DB_PASSWORD);

// connectToMongo
connectToMongo();

//bodyParser
app.use(express.json());
// app.use(morgan('default'));
app.use(express.static("public"));
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

app.listen(process.env.PORT, () => {
  console.log("app started on ", process.env.PORT);
});
