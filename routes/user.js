const router = require('express').Router();

router.get("/usertest", (req, res) => {
    res.send("user test is successful");
});

//!post method

router.post("userposttest", (req, res) => {
    const username = req.body.username;
    console.log(username);
})  // we sould use postman to test it 





module.exports = router  //basically we are wxporting our user