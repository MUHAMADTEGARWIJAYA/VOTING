import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import voteRoutes from "./routes/voteRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import helmet from "helmet";
import ExpressMongoSanitize from 'express-mongo-sanitize'
dotenv.config();
const port = 3000
const app = express();


app.use(express.json());


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth", voteRoutes);
app.use("/api/v1/auth/admin", adminRoutes);

// middleware

app.use(express.json())
app.use(helmet())
app.use(ExpressMongoSanitize())
app.use(express.urlencoded({extended: true}))
// server
app.listen(port, () => {
  console.log(`Aplikasi jalan di port ${port}`)
})

// CONNECTION db
mongoose.connect(process.env.DATABASE,{
    
}).then(()=>{
    console.log("DATA BASE MASUK")
})

export default app;