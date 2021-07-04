const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const cors = require('cors');

const port = process.env.APP_PORT;

// app.get("/api", (req, res) => {

//     res.json({
//         success:1 ,
//         message: "yo its working"

//     });
// });

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(port, ()=>{

console.log("server up and running: ", process.env.APP_PORT);

});