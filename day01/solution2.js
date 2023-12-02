const fs = require("node:fs");
const path = require("path");

function solution(data) {
  const dataLineByLine = data.split("\n");
  let firstLastNumbers = [];
  let firstNumbers = [];
  let lastNumbers = [];

  const mapObj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const reverseMapObj = {
    eno: 1,
    owt: 2,
    eerht: 3,
    ruof: 4,
    evif: 5,
    xis: 6,
    neves: 7,
    thgie: 8,
    enin: 9,
  };

  const regex = new RegExp(Object.keys(mapObj).join("|"), "gi");
  const reverseRegex = new RegExp(Object.keys(reverseMapObj).join("|"), "gi");

  for (let line of dataLineByLine) {
    let frontLine = line.replace(regex, function (matched) {
      return mapObj[matched];
    });

    frontLine = frontLine.replace(/[^0-9]/g, "");
    firstNumbers.push(frontLine[0]);

    let backLine = reverseString(line);

    backLine = backLine.replace(reverseRegex, function (matched) {
      return reverseMapObj[matched];
    });

    backLine = backLine.replace(/[^0-9]/g, "");
    lastNumbers.push(backLine[0]);
  }
  firstLastNumbers = firstNumbers.map((e, i) => e + lastNumbers[i]);

  let solution = firstLastNumbers.reduce((accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue);
  }, 0);
  console.log(solution);
}

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

fs.readFile(path.resolve(__dirname, "input.txt"), "utf8", (err, data) => {
  solution(data);
});
