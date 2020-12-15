// const User = require('../models/user')
// const bcrypt = require('bcrypt');


// const signup = async (request, response,next) => {
//     const {userName, email, password} = request.body;

//     const user = new User({
//         userName: userName,
//         email: email,
//     })


//     const new_password = bcrypt.hashSync(password, 10);
//     user.password = new_password;

//     await user.save()

//     response.status(201).send({message: "User Created Successful"})

// }


// const login = async (request, response) => {
  
//     await User.findOne({email: request.body.email}, (error, user)=> {
//         if (error) {
//             return response.status(500).send({error: "Internal Server Error"})
//         }

        
//         if (!user) {
//             return response.status(401).send({email: "No user with that email"})
//         }

//         const valid = bcrypt.compareSync(request.body.password, user.password);

//         if (!valid) {
//             return response.status(401).send({password: "Invalid Password"})
//         }
        
//         return response.status(200).send({message: "Login Successfull"})
//     })

// }





// module.exports = {
//     signup,
//     login,
    
// }