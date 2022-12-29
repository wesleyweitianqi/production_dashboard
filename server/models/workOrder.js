import mongoose from "mongoose";

const workOrderSchema = new mongoose.Schema(
  {
    "wo#": {
      type: String,
      required: true,
      min:6,
    },
    "catalog#": {
      type: String,
      required:true,
    },
    "PO#": {
      type:String,
      required:true,
    },
    "description": {
      type:String,
      required:true,
    },
    "customer": {
      type:String,
      required:true,
    },
    "ps": {
      type:String,
      required:true,
    },
    "qty": {
      type:Number,
      required:true,
    },
    "orderDate": {
      type:Date,
      required:true,
    },
    "requiredDate": {
      type:Date,
      required:true,
    },
    "shippingStatus": {
      type:Boolean,
      required:true,
    }
  }, 
  {timestamps: true}
);

const WorkOrder = mongoose.model("WorkOrder", workOrderSchema);
export default WorkOrder;