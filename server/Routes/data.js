import express from "express";
const Router = express.Router();
import WorkOrder from '../models/workOrder.js';


Router.get("/", async (req, res) => {
  const workOrders = await WorkOrder.find().sort({requiredDate: 1})
  res.json(workOrders)
});

Router.post("/post", async(req, res) => {
  const data = req.body
  console.log("🚀 ~ file: data.js:13 ~ Router.post ~ data", data)
})
export default Router;


