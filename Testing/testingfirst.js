const express = require('express');
const app = express();
var port = 5000;


app.get('/testingfirst',(req,res)=>{
    app.send("home page")
})

app.listen(port,()=>{
    console.log('okay not')
})