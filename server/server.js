const express = require("express");
// require(dotenv).config();
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
// const mongoose = require("mongoose");
// const connect = require('./db/conn');
const connectDB = require("./db/conn");

const app = express();

app.use(cors({
  origin: ['https://netflix-clone-evangadi-bt7f9ma7n-henoks-projects-385ca9f9.vercel.app'],
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

app.use("/api/user", userRoutes);

connectDB();

app.listen(5000, () => {
  console.log("server started on port 5000");
});
