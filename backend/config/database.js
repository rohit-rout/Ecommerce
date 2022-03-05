const mongoose=require("mongoose");

const database=()=>{mongoose.connect(process.env.DB_URL).then(()=>{
   console.log("mongo db connected");
})
 
}
module.exports=database;