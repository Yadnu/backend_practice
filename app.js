const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send("<h1> Hi there </h1>");
}) 


function middleware1( req, res, next){
    if(req.query.age >15){
        next();
    }
    else{
        throw ErrorEvent("Age limit");
    }

}

app.get("/ride1",middleware1, function(req, res){
    console.log("res");
    res.json({message: "this is ride1"});
});
app.listen(3001, ()=>{ console.log("listeining on 3000")});