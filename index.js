
const express=require("express");
const app = express();
require('dotenv').config({path:'./src/.env'})

const userRouter = require("./src/routes/userRoutes");
const mongoose = require("mongoose");

const port = process.env.port
app.use(express.json());


app.use("/users", userRouter);

// mongoose.connect("mongodb+srv://priyashukla22:priya12345@cluster0.ooawcxp.mongodb.net/?retryWrites=true&w=majority")

 mongoose.connect('mongodb://127.0.0.1:27017/social')

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });