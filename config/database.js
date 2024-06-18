import mongoose from "mongoose";

const connect= async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("Connected to database")})
    .catch((error)=>{console.log("Error connecting to database",error)})
 }
    export default connect;
