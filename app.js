 import fs from 'fs';
import convert from './convertor.js';

const inputPath = 'input.json';
const outputPath = 'output.xml';

 
 if(!inputPath || !outputPath){
    console.log("nothing exits")
    process.exit(1);
 }

 try{
    const jsontxt = fs.readFileSync(inputPath,'utf-8');
    const jsondata = JSON.parse(jsontxt);
 
    const output = convert(jsondata);
     fs.writeFileSync(outputPath,output,'utf-8');

   console.log("sucessfull vertri vertri");

 }
 catch(e){
    console.log("we lost the match coach",e);


 }