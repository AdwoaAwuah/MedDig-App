const express = require('express');
const mongoose = require('mongoose'); 
const config = require('./helpers/config');
const cors = require("cors");
const dotenv = require("dotenv")
const auth = require('./routes/auth')


// Mongoose Connection
mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTIONS)
.then(()=> {
    console.log(`MONGODB Connection successful`)
}).catch(exception=>{
    console.log("MONGODB Connection failed/n", exception)

})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth',auth);



const PORT = process.env.PORT || 1200;
app.listen(PORT, ()=> {
    console.log(`Server started on PORT: ${PORT}`)
})