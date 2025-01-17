const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : { type : String, required : true},
    email : { type : String, required : true, unique : true},
    password : { type : String, required : true}
});

//Hash password 
userSchema.pre('save',async function (next){
    console.log("$$$$$")
    const user = this;
    if(user,this.isModified('password')){
        user.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User',userSchema);

 

//     {
//         'username' : 'user1',
//     'email' : 'user1@this.com',
//     'passwaord' : 'user1'
// }
