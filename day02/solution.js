const fs = require("node:fs");
const path = require("path");

function solution(data) {
  const dataLineByLine = data.split("\n");
  const MAX_RED = 12;
  const MAX_GREEN = 13;
  const MAX_BLUE = 14;
  let total = 0;

  dataLineByLine.forEach((line, index) => {
    let isValidGame = false;
    const colonLocation = line.indexOf(": ");
    line = line.substring(colonLocation + 1);
    // console.log(line);
    line = line.replaceAll(";", ",");
    line = line.replaceAll("\r", "");

    let numberColors = line.split(",");
    for (const iterator of numberColors) {
      let removedIterator = iterator.substring(1);
      let singleNumberColor = removedIterator.split(" ");
      if (
        (singleNumberColor[1] === "red" &&
          Number(singleNumberColor[0]) > MAX_RED) ||
        (singleNumberColor[1] === "green" &&
          Number(singleNumberColor[0]) > MAX_GREEN) ||
        (singleNumberColor[1] === "blue" &&
          Number(singleNumberColor[0]) > MAX_BLUE)
      ) {
        return;
      } else {
        isValidGame = true;
      }
    }
    if (isValidGame === true) {
      total = total + index + 1;
    }
  });
  console.log(total);
}

fs.readFile(path.resolve(__dirname, "input.txt"), "utf8", (err, data) => {
  solution(data);
});
