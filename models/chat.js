const mongoose=require("mongoose");  //when the multiple db is present in app then creat new js file then create db schema....

//here we create schema for chat:(id,from,message,created_at).//id already generate to mongoose db...

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true,//constraint from can't empty 
    },
    to:{
        type:String,
        required:true,//constraint
    },
    msg:{
        type:String,
        maxLength:50,//constraint msg length less than 50
    },
    created_at:{
        type:Date,
        required:true,//constraint 
    },
});

const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;