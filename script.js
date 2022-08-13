// "use strict";
// function logger() {
//   console.log("i am adib");
// }
// logger();

// // challange 1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 5, 5));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scorekoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scorekoalas);

// const checkwinner = function (avgdolphins, avgkoalas) {
//   if (avgdolphins >= 2 * avgkoalas) {
//     console.log(`Dolphins win`);
//   } else if (avgkoalas >= 2 * avgdolphins) {
//     console.log(`koalas win`);
//   } else {
//     console.log(`No team wins`);
//   }
// };
// checkwinner(scoreDolphins, scorekoalas);

//arrays
// const adib = ["adib", "mansuri", "23"];
// console.log(adib);
// // add element
// adib.push("happy");
// console.log(adib);

// // exercise
// const clicktip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [clicktip(bills[0]), clicktip(bills[1]), clicktip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, bills, total);

// object
const adib = {
  firstname: "adib",
  lastname: "mansuri",
  friends: ["michael", "peter", "steven"],
};
adib.location = "india";
adib["job"] = "teacher";
console.log(adib);
