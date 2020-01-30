const mongoose = require("mongoose");
const keys = require("../keys");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(keys.MONGOURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log("coonected to db:" + conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
