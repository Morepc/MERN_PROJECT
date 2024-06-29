const { DB_NAME } = require("../../frontend/src/Constant");

const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`\n mongodb connected! DB HOST:${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongodb connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require("mongoose")

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,

//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit();
//   }
// };

// module.exports= connectDB;
