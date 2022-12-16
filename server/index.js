import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import User from "./models/user.js";


dotenv.config();
const { PORT, MONGO_URL } = process.env
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));
app.use(cors())

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL, async () => {
   console.log("mongodb connnected")
   try {
      const user1 = await new User({ name: "wesley", email: "wesley@wei.ca", password: 123456 })
      user1.save((err, user) => {
         if (err) return console.error(err);
         console.log(`${user} saved to User collection`)
      })
   } catch (err) {
      console.error(err)
   }
})
   .then(() => {
      app.listen(PORT, () => {
         console.log(`server is listening to port ${PORT}`)
      })
   })