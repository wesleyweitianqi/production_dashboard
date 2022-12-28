import excelToJson from "convert-excel-to-json";
import fs from "fs";
import path, { dirname } from "path";
import url from "url";


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const result = excelToJson({
    source: fs.readFileSync("./data.xls")
})

let woObjList = result.Sheet1.slice(5, -2);
let woList = [];
woObjList.forEach(woObj=> woList.push(woObj.A) )
const data = JSON.stringify(Object.assign({}, woList))
fs.writeFileSync("../selenium/data.json", data, (err)=> {
    if (err) throw err
})

