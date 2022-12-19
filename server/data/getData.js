import excelToJson from "convert-excel-to-json";
import fs from "fs";

export const result = excelToJson({
    source: fs.readFileSync("./data.xls")
})
console.log("🚀 ~ file: getdata.js:7 ~ result", result.Sheet1.slice(5,-2))

let woObjList = result.Sheet1.slice(5, -2);
let woList = [];
woList.forEach(woObj=> woList.push(woObj.A) )
console.log("🚀 ~ file: getdata.js:11 ~ woList", woList)