const fs = require("node:fs");
const path = require("path");

function solution(data) {
  const dataLineByLine = data.split("\n");
  let firstLastNumbers = [];

  for (let line of dataLineByLine) {
    let numbers = line.replace(/[^0-9]/g, "");
    firstLastNumbers.push(
      Number(`${numbers[0]}${numbers[numbers.length - 1]}`)
    );
  }

  let solution = firstLastNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(solution);
}

fs.readFile(path.resolve(__dirname, "input.txt"), "utf8", (err, data) => {
  solution(data);
});
