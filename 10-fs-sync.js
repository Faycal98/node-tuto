const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");
writeFileSync("./result-sync.txt", `Here is the result:${first}, ${second}`, {
  flag: 'w',
});
console.log('done with this task')