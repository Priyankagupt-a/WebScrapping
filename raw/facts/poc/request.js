//install through npm//npm init -y
//npm install request cheerio
//npm install

let request = require("request");
request("https://www.google.com", cb)

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        console.log(html);
    }
}

function extracthtml() {
    let selectorTool = cheerio.load(html); //loads the html file
    let selectlem = selectorTool()
        //console.log(selectlem.txt()) //converts to txt 
}
console.log("after")