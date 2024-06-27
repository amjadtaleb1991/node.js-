const express=require('express');
const mongoose=require('mongoose');
const body=require('body-parser');
const rout=require('./routerbook');

const app=express();

///using body-parser to get data from user
app.use(body.urlencoded({extended:false}));
app.use(body.json({}));


///connected to mongoose database
mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>console.log('connected to database')).catch((err)=>{console.log(err)});


///route from book
app.use('/books',rout.rout);


module.exports={app:app};