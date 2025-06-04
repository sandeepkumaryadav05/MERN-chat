const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allchats=[
    {
      from:"mohit",
      to:"rohit",
      msg:"send me your exam sheets",
      created_at:new Date(),//new Date() fuction create by js which create new date and time.... 
    },
    {
        from:"tony",
        to:"adam",
        msg:"what are you doing",
        created_at:new Date(),  
    },
    {
        from:"vivek",
      to:"ritesh",
      msg:"will you go to collage ?",
      created_at:new Date(),
    },
    {
        from:"ankit",
      to:"ajeet",
      msg:"how are you",
      created_at:new Date(),
    }
];
Chat.insertMany(allchats);
    