const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const parserCss = require("./parserCss");
app.use(express.static(path.join(__dirname,'static')));
var parsedOld;
var parsedNew;

app.get("/",async (req,res) => {
    parsedOld = await parserCss.parseCss('./static/old/old.css');
    console.log(parsedOld);
    //parseNew = parseCss('./new/new.css');
});

app.listen(3000, () => console.log("Node server staeted at 3000!"));