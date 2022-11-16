//! which is created instead of user.js best practise is this 

const router = require('express').Router();
const User = require("../models/User")


//REGİSTER

router.post("/register", async (req, res)=>{
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
   });


})




module.exports = router