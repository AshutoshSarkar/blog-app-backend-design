import express from "express";
import { config } from "dotenv";
import connect from "./config/database.js";
import blog from "./Routes/blog.js";
//create instance of dotenv
config();

//create app using express
const app = express();

//midleware
app.use(express.json());

//Now , we will create a server
app.get("/", (req, res) => {
  res.send("Hii this is my blog application server");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});

//Routes
app.use("/api/v1",blog);
//connect to database
connect();
