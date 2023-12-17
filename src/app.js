import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({
    limit: "16kb"
})); //To get data from JSON

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
})); // To get data from URL

app.use(express.static("public")); //To store temp files
app.use(cookieParser());

export default app;