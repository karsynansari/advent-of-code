
const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8").toString();
  const newData = data.split(/\r?\n|\r|\n/g);
  let numbersArray = [];
  let sum = 0;

  for (let i = 0; i < newData.length; i++) {
    if (newData[i] !== "") {
      sum += parseInt(newData[i]);
      numbersArray.push(sum);
    } else {
      sum = 0;
    }
  }

  const top1 = numbersArray.sort((a, b) => b - a)[0];
  const top3 = numbersArray
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);
  console.log(top1);
  console.log(top3);
} catch (e) {
  console.log("Error:", e.stack);
}
