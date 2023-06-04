const express = require("express");
const os = require("os");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.json({msg: "Hello world"});
});

//help: https://fullstackopen.com/en/part3/node_js_and_express
app.get("/echo/:id", (req, res)=>{
    let value = String(req.params.id)
    let echo = {id: value};
    res.json(echo);
});

//help:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
app.post("/sum", (req, res)=>{
    const numbers = req.body.numbers;
    const summary = numbers.reduce((acc, curr) => acc + curr, 0);
    res.json({sum: summary});
});

const list=[];
app.post("/list", (req, res)=>{

    const listText= req.body.text;
    list.push(listText);

    res.json({list: list})
})


app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => console.log(`Server listening a port ${port}!`));