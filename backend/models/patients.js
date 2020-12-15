const mongoose = require('mongoose')


const patientSchema = mongoose.Schema({
    username: {type: String,
         required: true},

    symptoms:{type:String, 
        required : true},

    disease:{type:String},

    days:{type:String}

})




const Patient= mongoose.model("Patient", patientSchema)


module.exports = Patient