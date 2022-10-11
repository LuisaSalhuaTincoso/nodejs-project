 const express = require('express');
 const app = express();

 app.use((req,res,next)=>{
    console.log("probando first middleware");
     next()
 })
 
 app.use((req,res,next)=>{
    console.log("probando 2nd middleware");
     res.send('HOLA JUAN');
 })

app.listen(3000)
