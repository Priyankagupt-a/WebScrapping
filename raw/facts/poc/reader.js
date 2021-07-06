let fs = require("fs");
console.log("Before");

//let data = fs.readFileSync("f1.text");
fs.readFile("f11.txt", cb); //callback

function cb(err, data) {
    console.log("content" + data);
}

console.log("After")
console.log("other work")