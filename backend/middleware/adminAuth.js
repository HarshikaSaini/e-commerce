const users = require("../models/userModel");
const  authAdmin = async (req,res,next) => {
    try {
        const user = await users.findById(req.user.id);
        
        if(!user) return res.status(400).send("no user exist")
        if(user.role !== "admin") {
            return res.status(400).json({msg:"Admin access denied"});
        }
        
        next()
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}

module.exports =  authAdmin;
