const fs = require("fs");

const data = fs.readFileSync("input.txt").toString();
const newData = data.split(/\r?\n|\r|\n/g);

let newerData = [];

for (let i = 0; i < newData.length; i++) {
  let obj = {};

  if (newData[i].split(" ")[0] === "A") {
    obj.opponent = 1;
  }

  if (newData[i].split(" ")[0] === "B") {
    obj.opponent = 2;
  }

  if (newData[i].split(" ")[0] === "C") {
    obj.opponent = 3;
  }

  if (newData[i].split(" ")[1] === "X") {
    obj.you = 1;
  }

  if (newData[i].split(" ")[1] === "Y") {
    obj.you = 2;
  }

  if (newData[i].split(" ")[1] === "Z") {
    obj.you = 3;
  }

  newerData.push(obj);
}

let sumArray = [];
let sum = 0;
for (let j = 0; j < newerData.length; j++) {
  if (newerData[j].opponent === newerData[j].you) {
    sum += 3 + newerData[j].you;
    sumArray.push(sum);
    sum = 0;
  }
  if (
    (newerData[j].opponent === 1 && newerData[j].you === 3) ||
    (newerData[j].opponent === 3 && newerData[j].you === 2) ||
    (newerData[j].opponent === 2 && newerData[j].you === 1)
  ) {
    sum += newerData[j].you;
    sumArray.push(sum);
    sum = 0;
  }

  if (
    (newerData[j].opponent === 1 && newerData[j].you === 2) ||
    (newerData[j].opponent === 2 && newerData[j].you === 3) ||
    (newerData[j].opponent === 3 && newerData[j].you === 1)
  ) {
    sum += 6 + newerData[j].you;
    sumArray.push(sum);
    sum = 0;
  }
}
console.log(sumArray);

const thesum = sumArray.reduce((total, item) => total + item);

console.log(thesum);
//{oponent: you: score: }
// 0 if you lose, 3 if a draw, 6 if you win
//
//a = rock (1)
//b = paper (2)
//c = scissors (3)

//x = rock (1)
//y = paper (2)
//z = scissors (3)

// if oponent = 1 and you = 2
// 6 + you.score

// if oponent = 2 and you = 3
// 6 + you.score

// if oponent = 3 and you = 1
// 6 + you.score

//if opponent === you
// 3 + you.score

//if oponent = 1 and you = 3
//you.score

// if oponent = 2 and you = 1
//you.score

//if oponent = 3 and you = 2
// you.score
