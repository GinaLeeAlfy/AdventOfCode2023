const fs = require("node:fs");
const path = require("path");

function solution(data) {
  const dataLineByLine = data.split("\n");

  let total = 0;

  dataLineByLine.forEach((line, index) => {
    let redCount = null;
    let greenCount = null;
    let blueCount = null;
    let power = null;

    const colonLocation = line.indexOf(": ");
    line = line.substring(colonLocation + 1);
    line = line.replaceAll(";", ",");
    line = line.replaceAll("\r", "");

    let numberColors = line.split(",");
    for (let index = 0; index < numberColors.length; index++) {
      const element = numberColors[index].trim();

      const [number, color] = element.split(" ");

      if (color === "red" && (Number(number) > redCount || redCount === null)) {
        redCount = Number(number);
      }
      if (
        color === "green" &&
        (Number(number) > greenCount || greenCount === null)
      ) {
        greenCount = Number(number);
      }
      if (
        color === "blue" &&
        (Number(number) > blueCount || blueCount === null)
      ) {
        blueCount = Number(number);
      }
    }
    power = redCount * blueCount * greenCount;
    total = total + power;
  });

  console.log(total);
}

fs.readFile(path.resolve(__dirname, "input.txt"), "utf8", (err, data) => {
  solution(data);
});
