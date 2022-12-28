import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";

import userRouter from "./Routes/user.js";
import dataRouter from "./Routes/data.js";
import WorkOrder from "./models/workOrder.js";
import myPromise from "./data/woData.js";
import data from "../woList.json" assert {type:"json"};

dotenv.config();
const { PORT, MONGO_URL } = process.env
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));
app.use(cors())

app.use("/user", userRouter)
app.use("/data", dataRouter)

mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => {
   try {
         data.map(async (item) => {
           const query = await WorkOrder.findOne({"wo#":item.wo})
           console.log("🚀 ~ file: woData.js:25 ~ workOrderList.map ~ query", query)
           
           if (!query){
             const list1 =await new WorkOrder({
               "wo#": item.wo,
               "catalog#":item.catalogNum,
               "PO#":item.po,
               "description": item.description,
               "customer":item.customer,
               "ps":item.packingslip,
               "qty":item.qty,
               "orderDate":item.order_date,
               "requiredDate":item.require_date,
               "shippingStatus":item.shipping_date
             })
             list1.save()
           }
         })
      } catch(err) {
      console.error(err)
   }
   console.log("mongodb connected")
}).catch((err) => console.error(err))


app.listen(PORT, () => {
   console.log(`server is listening to port ${PORT}`)
})
