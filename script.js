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
// // const clicktip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
// // };
// // const bills = [125, 555, 44];
// // const tips = [clicktip(bills[0]), clicktip(bills[1]), clicktip(bills[2])];
// // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(tips, bills, total);

// // object
// const adib = {
//   firstname: "Adib",
//   lastname: "Mansuri",
//   friends: ["michael", "peter", "steven"],
//   birthyear: 1996,
//   hasdriverlicense: true,
//   calcage: function () {
//     this.age = 2022 - this.birthyear;
//     return this.age;
//   },
// };
// adib.location = "india";
// adib["job"] = "teacher";
// // console.log(job);
// console.log(adib.calcage);
// console.log(adib);
// // challange
// console.log(adib.age);
// // console.log(
// //   `${adib.firstname}  has ${adib.friends.length} friends, and his bestfriend is ${adib.friends[0]}`
// // );

// console.log(
// hasdriverlicense == true{
//   ` ${adib.firstname} is ${adib.calcage}-year old ${adib.job} and he has a driving license.
// `}
// );

// // challange

// const mark = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcbmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const johan = {
//   fullname: "Johan Smith",
//   mass: 92,
//   height: 1.95,
//   calcbmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcbmi();
// johan.calcbmi();
// console.log(mark.bmi);
// console.log(johan.bmi);
// if (mark.bmi > johan.bmi) {
//   console.log(
//     `${mark.fullname}'s BMI ${mark.bmi} is higher than ${johan.fullname}'s BMI ${johan.bmi}`
//   );
// } else if (johan.bmi > mark.bmi) {
//   console.log(
//     `${johan.fullname}'s BMI ${johan.bmi} is higher than ${mark.fullname}'s BMI ${mark.bmi}`
//   );
// }

// for loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`I lift ${rep} repetition`);
}
