//Returns the ||  LAST CALL COMMENTARY ||

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary"
let request = require("request");

//The basic functionality of require is that it reads a JavaScript file, 
//executes the file, and then proceeds to return the exports object.

let cheerio = require("cheerio");
console.log("before")
request(url, cb) //Request is designed to be the simplest way possible to make http calls. 
    //It supports HTTPS and follows redirects by default.

function cb(error, response, html) //callback
//A callback function is a function passed into another function as an argument 
//which is then invoked inside the outer function to perform some kind of routine or action
{
    if (error) {
        console.log(error);
    } else {
        //console.log(html);
        extractHtml(html)
    }
}

function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let allComentaries =
        selectorTool(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    console.log(allComentaries.length);
    //rule->index,cheerioselector
    let lastComment = selectorTool(allComentaries[0]).text();
    console.log(lastComment)
}
console.log("after")