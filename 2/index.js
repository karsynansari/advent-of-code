const fs = require("fs");

const data = fs.readFileSync("input.txt").toString();
const newData = data.split(/\r?\n|\r|\n/g);
console.log(newData);
let newerData = [];

for (const element of newData) {
  let obj = {};

  if (element.split(" ")[0] === "A") {
    obj.opponent = 1;
  }

  if (element.split(" ")[0] === "B") {
    obj.opponent = 2;
  }

  if (element.split(" ")[0] === "C") {
    obj.opponent = 3;
  }

  if (element.split(" ")[1] === "X") {
    obj.you = 1;
  }

  if (element.split(" ")[1] === "Y") {
    obj.you = 2;
  }

  if (element.split(" ")[1] === "Z") {
    obj.you = 3;
  }

  newerData.push(obj);
}

let sumArray = [];
let sum = 0;
for (const element of newerData) {
  if (element.opponent === element.you) {
    sum += 3 + element.you;
    sumArray.push(sum);
  }
  if (
    (element.opponent === 1 && element.you === 3) ||
    (element.opponent === 3 && element.you === 2) ||
    (element.opponent === 2 && element.you === 1)
  ) {
    sum += element.you;
    sumArray.push(sum);
  }

  if (
    (element.opponent === 1 && element.you === 2) ||
    (element.opponent === 2 && element.you === 3) ||
    (element.opponent === 3 && element.you === 1)
  ) {
    sum += 6 + element.you;
    sumArray.push(sum);
  }
  sum = 0;
}
console.log(sumArray);

const thesum = sumArray.reduce((total, item) => total + item);

console.log(thesum);
