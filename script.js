// let n=5;

// for(let i=0;i<n;i++){
//     console.log("hello", i);
// }

// console.log(process.argv);

// for(let i=2; i<process.argv.length;i++){
//     console.log("hello to", process.argv[i]);
// }


// const math = require("./math");

// console.log(math.sum(7,9));
// console.log(math.mul(7,9));

// const fruits = require("./fruits");

// console.log(fruits);
// console.log(fruits[2].color);

// const figlet = require("figlet");

// figlet("Ansh Mani", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });


import { generate } from "random-words";
import { sum } from "./math.js";
console.log(generate());

console.log(sum(6,5));


