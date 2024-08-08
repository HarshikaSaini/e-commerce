const users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userCtrl = {
  register: async (req, res) => {
    try {
      const { fname,lname, email, password,role, houseNumber,city,state,phone } = req.body;
      const user = await users.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "email already exist" });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Pssword should be atleast 6 characters" });
      }
      if(phone.length < 10 ){
        return res
        .status(400)
        .json({msg:"Phone number should be of atleast 10 digit."})
      }
    const phoneExists = await users.findOne({ phone });
     if (phoneExists) {
      return res.status(400).json({ msg: "Phone number already exists." });
    }
      

      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new users({
      fname,
      lname,
      email,
      password:passwordHash,
      role,
      houseNumber,
      city,
      state,
      phone
      });

      await newUser.save();// save in db
     
      const accesstoken = createAccessToken({id:newUser._id})
      const refreshtoken = createRefreshToken({id:newUser._id})

       res.cookie('refreshtoken', refreshtoken, {
        httpOnly:true,
        path:'/refresh_token'
      });

      res.json({ msg: "registeration successfull", accesToken : accesstoken });
      
    } 
    
    catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  refreshtoken : async(req,res)=> {
    try {
      console.log("cookies recieved" , req.cookies)
      const rf_token = req.cookies.refreshtoken;

      if(!rf_token) return res.status(400).json({msg:"please login or registers"})
    
      jwt.verify(rf_token,process.env.REFRESH_TOKEN,(err,user)=>{
      if(err) return res.status(400).json({msg:"please login or register"})

      const accesstoken = createAccessToken({id:user.id})
       res.json({user , accesstoken})
    })

    } catch (error) {
      res.status(500).json({msg: error.message})
    }
    
  },

  login: async(req,res)=>{
    try {
      const {email , password} = req.body;

     const userEmail = await users.findOne({email});
     if(!userEmail) return res.status(400).json({msg:"user does not exist"});

     const userPass = await bcrypt.compare(password , userEmail.password);
     if(!userPass) return res.status(400).json({msg:"incorrect password"});

      
       const refreshtoken = createRefreshToken({id:userEmail._id});
       res.cookie("refreshtoken", refreshtoken, {
        path:"/"
       })
     
     
     res.json({msg:"login successful" });
    } 
    catch (error) {
      return res.status(500).json({msg:error.message});
    }
     
  },

  logout: async(req,res) =>{
    try {
      res.clearCookie('refreshtoken' , {path:'/user/refreshtoken'});
      return res.json({msg:"logged out"})
    } catch (error) {
      return res.status(500)
    }
  },

  getUser: async(req,res)=>{
    try {
      const user = await users.findById(req.user.id).select('-password');
      if(!user) return res.status(400).json({msg:"user not found"});
      res.json({user});
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  } 
};




const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"1d"})
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn:"7d"})
}


module.exports = userCtrl;
