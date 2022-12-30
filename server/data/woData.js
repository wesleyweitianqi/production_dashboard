import child_process from 'child_process';
import { query } from 'express';
import WorkOrder from '../models/workOrder.js';
import path from 'path';
import url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const spawn = child_process.spawn

const myPromise = new Promise((resolve, reject) => {
  const spawn = child_process.spawn;
  const xpath = path.join(__dirname, "..", "..", "selenium/workData.py")
  const process = spawn("python", [xpath]);
  process.stdout.on("data", (data) => {
    const formattedData = data.toString();
    resolve(formattedData);
  });
});

myPromise.then(data => console.log(typeof(data)))
export default myPromise





