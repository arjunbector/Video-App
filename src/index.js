import connectDB from "./db/index.js";
import dotenv from "dotenv";
// require("dotenv").config({path:"/.env"})


dotenv.config({path: "/.env"});
connectDB();












// ;( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     }
//     catch (error) {
//         console.log("ERROR: " + error );
//         throw error;
//     }
// })()