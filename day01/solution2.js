const fs = require("node:fs");
const path = require("path");

function solution(data) {
  const dataLineByLine = data.split("\n");
  let firstLastNumbers = [];
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
  const regex = new RegExp(Object.keys(mapObj).join("|"), "gi");

  for (let line of dataLineByLine) {
    line = line.replace(regex, function (matched) {
      return mapObj[matched];
    });

    console.log(line);
    line = line.replace(/[^0-9]/g, "");
    firstLastNumbers.push(Number(`${line[0]}${line[line.length - 1]}`));
  }
  console.log(firstLastNumbers);

  let solution = firstLastNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(solution);
}

fs.readFile(path.resolve(__dirname, "input.txt"), "utf8", (err, data) => {
  solution(data);
});
