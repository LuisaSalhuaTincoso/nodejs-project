 const express = require('express');
 const app = express();

//  app.use('/',(req,res,next)=>{
//    console.log("siemprese ejecuta");//dependiendo de la ruta podria entrar aqui y luego a la ruta especifica
//    next()
// })
//  app.use('/users',(req,res,next)=>{
//     console.log("probando route user");
//     res.send('HOLA user path');
//  })

app.use('/users',(req,res,next)=>{
   console.log("test route user");
   res.send('<h2>Hola es user path</h2>');
})
app.use('/',(req,res,next)=>{
   console.log("forever run");//dependiendo de la ruta podria entrar aqui y luego a la ruta especifica
   res.send('<h1>Hola es inicial path</h1>');
  
})

app.listen(3000)
