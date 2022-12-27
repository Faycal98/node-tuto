const names = require("./intro");
require("./7-mind-grenade");
//console.log(names)
//console.log(module);
/* const os = require('os')
const user = os.userInfo();
console.log(user)
 */

const path = require("path");
console.log(path.sep);

const filepath = path.join("/content", "subfolder", "text.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

console.log(path.resolve('/admin/text.js'));
/* 
const absolute = path.resolve("text.txt");
console.log(absolute);
console.log(__dirname);


const p2 = path.resolve('w','a','b','../c')
const p3 = path.resolve('w','/b/a')
console.log(p2,p3) */


const ff = path.resolve('/foo/bar', '/tmp/file/');
console.log(ff)
