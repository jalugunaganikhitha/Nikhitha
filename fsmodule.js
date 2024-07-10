//import {readFileSync,writeFileSync} from 'fs';
const {readFileSync}=require("fs");
let fileContent=readFileSync('./msg.txt','utf-8');
console.log(fileContent);