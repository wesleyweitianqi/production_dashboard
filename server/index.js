import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import {Server} from "socket.io";
import http from "http";

import userRouter from "./Routes/user.js";
import dataRouter from "./Routes/data.js";
import WorkOrder from "./models/workOrder.js";
import workData from "../woList.json" assert {type: "json"};



dotenv.config();
const { PORT, MONGO_URL } = process.env
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', socket => {
   console.log("socket connected")
})
io.on('message', socket => {
   console.log(socket.handshake)
})

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
}).then( () => {
   // populate work order data into mongo db
   // try {
   //       workData.map(async (item) => {
   //         const query = await WorkOrder.findOne({"wo":item.wo})
   //       //   console.log("🚀 ~ file: woData.js:25 ~ workOrderList.map ~ query", query)
           
   //         if (!query){
   //           const list1 =await new WorkOrder({
   //             "wo": item.wo,
   //             "catalog":item.catalogNum,
   //             "PO":item.po,
   //             "description": item.description,
   //             "customer":item.customer,
   //             "ps":item.packingslip,
   //             "qty":item.qty,
   //             "orderDate":item.order_date,
   //             "requiredDate":item.require_date,
   //             "isProducing":item.isProducing,
   //             "shippingStatus":item.shipping_state
   //           })
   //           list1.save()
   //         }
   //       })
   //    } catch(err) {console.error(err)}
   console.log("mongodb connected")
})

server.listen(PORT, () => {
   console.log(`server is listening to port ${PORT}`)
})
