const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth =async (req,res,next) => {
    const token = req.headers.authorization 
    if (!token) return res.status(401).json({err:"token doesn't exist"})
    try {
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) return res.status(401).json('"unuthorized')
       else {
        let currentUser = await User.findById(decoded._id)
        req.user = currentUser
        res.send(currentUser)
        next()
       }

        
    } catch (error) {
        res.status(401).json({err:error.message})
    }
}
module.exports  = isAuth