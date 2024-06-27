const mongoose=require('mongoose');




const book=mongoose.Schema({

name:{type:String,required:true},
autor:{type:String,required:true},
review:{type:String,required:true}

});



module.exports=mongoose.model('bookmode',book);