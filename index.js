const express = require('express'); //its a import a exprees library 
const app = express();
const mongoose = require('mongoose'); //its a import mongoose library
const dotenv = require('dotenv');// its a import dotenv 
const userRoute = require('./routes/user');

dotenv.config(); //configuration is nedden othervise i cant useit

mongoose.connect(process.env.MONGO_URL).then(() => console.log('DBconnection Succesfull')).catch((err) => {
    console.log(err);
});

app.use(express.json());  //if we donst write this kod our postman doesnt work with json file 
app.use("/api/users", userRoute); //whenever we go to api/user our application will use userRoute (code mean)

//   app.get("/api/test", () => {
//     console.log('test is successfull')
//   })  //!create roots so i am creating rest api we are gonna use some endpoints  but here its not a good idea to write /api/test we sould to create routes folder

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!")
});

