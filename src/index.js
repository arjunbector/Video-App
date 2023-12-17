import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


const PORT = process.env.PORT || 8000;

dotenv.config({path: "/.env"});
connectDB()
.then(()=>{
    app.on("error", (err)=>{
        console.log("Express app error ", err);
        throw err;
    })
    app.listen(PORT, ()=>{
        console.log(`Server is running at port ${PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed." + err)
});












// ;( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     }
//     catch (error) {
//         console.log("ERROR: " + error );
//         throw error;
//     }
// })()