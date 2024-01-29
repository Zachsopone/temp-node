//asynchronously a non-blocking or synchronously a blocking
const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/sub/first.txt", "utf8");
const second = readFileSync("./content/sub/second.txt", "utf8");

console.log(first, "\n", second);

writeFileSync(
  "./content/sub/result.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log('done with this task');
console.log("starting the next one");