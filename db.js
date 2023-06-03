const mongoose = require("mongoose");

const mongoURI =
  "mongodb://goodwaygiverlearnNodejs:NUcaq0Q2hPzT3RFB@ac-qfoyg0y-shard-00-00.kasemej.mongodb.net:27017,ac-qfoyg0y-shard-00-01.kasemej.mongodb.net:27017,ac-qfoyg0y-shard-00-02.kasemej.mongodb.net:27017/?ssl=true&replicaSet=atlas-4xaqen-shard-0&authSource=admin&retryWrites=true&w=majority";
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
