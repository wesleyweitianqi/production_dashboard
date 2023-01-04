import express from "express";
const Router = express.Router();
import WorkOrder from '../models/workOrder.js';


Router.get("/", async (req, res) => {
  const workOrders = await WorkOrder.find().sort({requiredDate: 1})
  res.json(workOrders)
});

Router.post("/post", async(req, res) => {
  const data = req.body;
  const ordernumber =data.wo
  
  await WorkOrder.updateOne({"wo":ordernumber}, {
    $set: { "isProducing":data.isProducing  },
    $currentDate: { lastModified: true }
  })
  const newworkOrder = await WorkOrder.find({"wo": ordernumber})
  res.json(newworkOrder)
})
export default Router;


