require("dotenv").config();
const mongoose = require("mongoose");



const mongoURI = process.env.MONGO_URI
const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("hey your mongodb connected Successfully...");
    })
    .catch(() => {
      console.log("hey there is an error to connect XXXXXX");
    });
};

// connectToMongo();
module.exports = connectToMongo;
