import express from "express";
const Router = express.Router();
import WorkOrder from '../models/workOrder.js';
// import { db } from "../index.js";

Router.get("/", async (req, res) => {
  const workOrders = await WorkOrder.find()
  res.json(workOrders)
});
export default Router;
