const express = require("express");
let requests=[];
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(function(req,res,next){
    let json={method:req.method,url:req.url,body:req.body}
    requests.push(json)
    next();
})
var port = process.env.PORT||2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let arr=[];

app.post("/allRequest",function(req,res){
    let body=req.body;
    arr.push(body);
    res.send("Data entered Successfully")
});

app.get("/allRequest",function(req,res){
    res.send(arr);
})