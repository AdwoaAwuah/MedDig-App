const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator")

let userSchema = new Schema({
    username: {type: String, 
        required: true},

    email: {type: String,
         required: true, 
        unique: true},

    password: {type: String,
         required: true},

    dateCreated: {type: Date,
         default: Date.now},

    active: {type: Boolean,
         default: true},

    isSuperuser: {type: Boolean,
         default: false}
}
)

userSchema.plugin(uniqueValidator,{message:"Email already exist"});


userSchema.set('toJSON', {
    transform: (doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user.__v
        delete user.password
    }
});



// userSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }


module.exports= mongoose.model("User", userSchema)


