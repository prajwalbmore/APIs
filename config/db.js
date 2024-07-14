const mongoose = require('mongoose');

async function connectdb(){
    try{
        await mongoose.connect("mongodb+srv://moreprajwal37:prajwal07@cluster0.v8j66zy.mongodb.net/ECommerce");
        console.log("connected to mongoDB");
    }catch(error){
        console.log("error in connection", error);
    }
}
module.exports = { connectdb };  