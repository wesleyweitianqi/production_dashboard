import express from "express";
const Router = express.Router();
import WorkOrder from '../models/workOrder.js';


Router.get("/", async (req, res) => {
  const workOrders = await WorkOrder.find().sort({requiredDate: 1})
  res.json(workOrders)
});
export default Router;
