
// FILE LESSON  -----------------------------------------------------------------------------------------------------------------------

// const fs = require('fs') 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8') // from Udemy class
// // const textIn = fs.readFileSync('./txt/input.txt').toString() // same as above but from AI
// console.log(textIn);  
// // console.log(); 
// const info = JSON.stringify({
//     "glossary": {
//         "title": "example glossary",
// 		"GlossDiv": {
//             "title": "S",
// 			"GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
// 					"SortAs": "SGML",
// 					"GlossTerm": "Standard Generalized Markup Language",
// 					"Acronym": "SGML",
// 					"Abbrev": "ISO 8879:1986",
// 					"GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
// 						"GlossSeeAlso": ["GML", "XML"]
//                     },
// 					"GlossSee": "markup"
//                 }
//             }
//         }
//     }
// })
// const textOut = `This is what we know about the avocado: ${textIn}`
// // writing JSON to a file, does not need a variable to store information the information is all being stored in the specified file
// fs.writeFileSync("./txt/output.JSON", info);
// console.log('File written')
// // reading from JSON made file
// const information = fs.readFileSync('./txt/output.JSON', 'utf-8')
// const stuff = JSON.parse(information)
// console.log(stuff.glossary.GlossDiv)




// SERVER LESSON  -----------------------------------------------------------------------------------------------------------------------

const fs = require('fs');
const http = require('http');
const url = require('url');

const port = 8040;

const server = http.createServer((req, res) => {
    console.log(req.url);  // returns: /fooBar from https://website.com/fooBar
    const pathName = req.url;
    if (pathName === '/' || pathName === '/home') {
        res.end("Hello from the server and welcome to the home page! This goes to the browser!");
    } else if (pathName === '/product') {
        res.end("This is the product page");
    }
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Listening for requests on port ${port}`);
});

