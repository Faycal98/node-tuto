const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/subfolder/first.txt','utf8');
console.log(first)


// Node.js program to demonstrate the
// fs.writeFileSync() method
 
// Import the filesystem module

 
// Writing to the file 5 times
// with the append file mode
for (let i = 0; i < 5; i++) {
  writeFileSync("movies.txt",
    "Movie " + i + "\n",
    {
      encoding: "utf8",
      flag: "a",
      mode: 0o666
    });
}
 