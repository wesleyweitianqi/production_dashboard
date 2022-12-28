import child_process from 'child_process';
import { query } from 'express';
import WorkOrder from '../models/workOrder.js';


const spawn = child_process.spawn

const myPromise = new Promise((resolve, reject) => {
  const spawn = child_process.spawn;
  const process = spawn("python", ["../selenium/workData.py"]);
  process.stdout.on("data", (data) => {
    const formattedData = JSON.stringify(data.toString());
    resolve(formattedData);
  });
});

export default myPromise


const workOrders = myPromise.then(data=> {
  const workOrderString = JSON.parse(data)
  return workOrderString
})

console.log(workOrders)

