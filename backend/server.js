const express = require("express");
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoute")
const categoryRouter = require("./routes/categoryRoute")
const productRouter = require("./routes/productRouter")
const cookieParser = require("cookie-parser")
const cors = require('cors');
const corsOptions = {
  origin:["http://localhost:5173"],
  credentials:true
};

require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // use cookies-parser before router , parsed cookies are attached 
// to client request object.By moving this before the router, all routes will have access to parsed cookies.
app.use(cors(corsOptions));// enable cors for all origins

app.use('/user' , userRouter)
app.use('/api' , categoryRouter)
app.use("/api" , productRouter)

app.get("/", (req, res) => {
  res.json({
    mess: "hi this is response",
  });
});

app.listen(port, () => console.log("Server Running..."));

//connect mongodb
const URL = process.env.MONGODB_URL;
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("mongodb connected");
  }).catch((err) => {
    console.log(err);
  });
