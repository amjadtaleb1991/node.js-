////router for book 



const express=require('express');
const books=require('./bookmode');
const mongoose = require('mongoose');
const rout=express();



///add book to mongoose
rout.post('/addnewbook',(req,res,next)=>{
///using bookmode
    const book=new books({
     name:req.body.name,
     types:req.body.types,
     autor:req.body.autor,
     review:req.body.review
    });
    
    book.save().then(doc=>{
     console.log(doc),
       res.status(200).json({
           book:doc
           })

    }).catch((err)=>{
       console.log(err),
       res.status(400).json({
           error:err
           })});
 
   });





/// get all book from mongoose  database
rout.get('/allbook',(req,res,next)=>{
    books.find().select('name Types autor review').then(doc=>{
    console.log(doc)
    res.status(200).json({
        books:doc})

}).catch((err)=>{console.log(err)})


});




/// get  book by id  from mongoose  database
rout.get('/getbyid/:id',(req,res,next)=>{

    const id=req.params.id;
    books.findById(id).select('name Types autor review').then(doc=>{
        console.log(doc)
        res.status(200).json({
            books:doc})
    
    }).catch((err)=>{console.log(err)})
    
    
    });

/// get all book by name from mongoose  database
rout.get('/getbyname/:name',(req,res,next)=>{

    const name=req.params.name;
    books.findOne({name:name}).select('name Types autor review').then(doc=>{
            console.log(doc)
            res.status(200).json({
                books:doc})
        
        }).catch((err)=>{console.log(err)})
        
        
        });



/// get all book by author from mongoose  database
rout.get('/getbyautor/:autor',(req,res,next)=>{
    const autor=req.params.autor;
    books.findOne({autor:autor}).select('name types autor review').then(doc=>{
                console.log(doc)
                res.status(200).json({
                    books:doc})
            
            }).catch((err)=>{console.log(err)})
            
            
            });


       
/// delete  book by id from mongoose  database
rout.delete('/removebyid/:id',(req,res,next)=>{

    const id=req.params.id;
    books.deleteOne({_id:id}).then(doc=>{
            console.log(doc)
            res.status(200).json({
                books:doc})
        
        }).catch((err)=>{console.log(err)})
        
        
        });







module.exports={rout:rout};