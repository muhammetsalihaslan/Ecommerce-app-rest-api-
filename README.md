# Ecommerce-app-rest-api-

İts a Node.js e-commerce app rest api with mongo db

if we get an api user we should look at import side and forget any slender and punctuation

localhost:5000/api/auth/register(auth is main file register is determined title its follow each other )

we have to  encript all of our pasword in this tutorial we are gonna use cryptoJs for this use code: yarn add crypto-js // const CryptoJS = require("crypto-js"); its a import part 


password is to much importand we can send every information but password in auth part using this 

code:  const { password, ...others} =user;
       res.status(200).json(others);


but when we use the above code, mongo gives us everything, we need to use user._doc to prevent this.

we want to more secure and we are gonna use JWT
what is jwt: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.  install code: yarn add jsonwebtoken  import and use

next() is about jwt

we have to import User.js for delete update put and other staff in user.js

user.js part is comunicate and have to act in postman part 

in this tutorial always has 3 part and i comunicated this 3 part each other to work 

get user stats show us statistic of enter user 


we get assets name in modules and create function in routers, which is sent in postman, all routers have to import in index.js

if we get 500s problem in post man we could look at all const truly send or not 

//   app.get("/api/test", () => {
//     console.log('test is successfull')
//   })  //!create roots so i am creating rest api we are gonna use some endpoints  but here its not a good idea to write /api/test we sould to create routes folder


verifyTokenAndAdmin: its about who can react this data and use can change data 






