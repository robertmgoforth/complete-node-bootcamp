
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

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8"); // __dirname returns the full file path of the current working directory
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);  // returns: /fooBar from https://website.com/fooBar
    const pathName = req.url;
    switch (pathName) {
        case "/":
            res.end("Hello from the server and welcome to the home page! This goes to the browser!");
            break;
        case "/home":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const homePage = "./templates/home.html"
            res.end(homePage);
            break;
        case "/product":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const prodPage = "./templates/product.html"
            res.end(prodPage);
            break;
        case "/api":
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(data);
            break;
    }
    if (pathName === '/') {
        res.end("Hello from the server and welcome to the home page! This goes to the browser!");
    } else if ( pathName === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const homePage = "./templates/home.html"
        res.end(homePage);
    } else if (pathName === '/product') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const prodPage = "./templates/product.html"
        res.end(prodPage);
    } else if (pathName === "/api") {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(data);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>Page not found</h1>");
    }
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Listening for requests on port ${port}`);
});

