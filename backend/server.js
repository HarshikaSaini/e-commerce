const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose")

const userRouter = require("./routes/userRoute")
const categoryRouter = require("./routes/categoryRoute")
const productRouter = require("./routes/productRouter")
const tagRouter = require("./routes/tagRoute")



const cookieParser = require("cookie-parser")
const cors = require('cors');
const fileUpload = require('express-fileupload');
const corsOptions = {
  origin:["https://e-commerce-react-qdr8.onrender.com"],
  credentials:true
};




const app = express();
const port = process.env.PORT;
app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // use cookies-parser before router , parsed cookies are attached 
// to client request object.By moving this before the router, all routes will have access to parsed cookies.
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));// enable cors for all origins
app.use(fileUpload({
  useTempFiles:true
}));


app.use('/user', userRouter)
app.use('/api' , categoryRouter)
app.use('/api' , productRouter)
app.use('/api' , tagRouter)



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
