
const express=require("express");
const app = express();

const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose")
const port = process.env.PORT || 6000;
app.use(express.json());


app.use("/users", userRouter);

// mongoose.connect("mongodb+srv://priyashukla22:priya12345@cluster0.ooawcxp.mongodb.net/?retryWrites=true&w=majority")

 mongoose.connect('mongodb://127.0.0.1:27017/social')
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });