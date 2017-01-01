const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
  res.render('maintenance');
});

app.get('/',(req,res)=>{
  res.send("hahago");
});

app.get('/osho',(req,res)=>{
  res.render('osho',{
    myTitle:'Osho Prem',
    hello:'Hello Osho'
  });
});

app.listen(3000,(err)=>{
  if(!err) console.log("starting server at port 3000.....");
});
