import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import User from "./models/user.js";
import userRouter from "./Routes/user.js";


dotenv.config();
const { PORT, MONGO_URL } = process.env
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));
app.use(cors())

app.use("/user", userRouter)

mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => {
   console.log("mongodb connected")
}).catch((err) => console.error(err))


app.listen(PORT, () => {
   console.log(`server is listening to port ${PORT}`)
})
