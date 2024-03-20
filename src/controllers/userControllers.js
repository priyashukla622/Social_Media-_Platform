// const {userModel,profileModel,postModel} = require("../models/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const SECRET_KEY = "NOTESAPI";

// const signup = async (req, res) => {
// //   const { username, email, password } = req.body;
//     //  const username=req.body;
//      const username=req.body.username;
//      const email=req.body.email;
//      const password=req.body.password;
//      console.log(req.body)

//     //  const email=req.body;
//     //  const password=req.body;
     
//     //  console.log(username,email,password,)
//     //  console.log(typeof(username))
//     //  console.log(typeof(email))
//     //  console.log(typeof(password))
//   try {
//     const existingUser = await userModel.findOne({ email:email });
//     console.log(existingUser)
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//      const hashedPassword = await bcrypt.hash(password, 10);

//     // const hashedPassword = await bcrypt.hash(password, 11);

//     const result = await userModel.create({
//       email: email,
//       password: hashedPassword,
//       username: username,
//     });
//     // console.log(result)
//     const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
//     res.status(201).json({ user: result, token: token });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };


// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const existingUser = await userModel.findOne({ email: email });
//     if (!existingUser) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const matchPassword = await bcrypt.compare(password, existingUser.password);

//     if (!matchPassword) {
//       return res.status(404).json({ message: "Invalid password" });
//     }
//     const token = jwt.sign(
//       { email: existingUser.email, id: existingUser._id },
//       SECRET_KEY
//     );
//     res.status(200).json({ user: existingUser, token: token });
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };
 
// module.exports = { login, signup};



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const {userModel,profileModel,postModel} = require("../models/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const SECRET_KEY = "NOTESAPI";

// const signup = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const existingUser = await userModel.findOne({ email: email });
//     console.log(existingUser)
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await userModel.create({
//       email: email,
//       password: hashedPassword,
//       username: username,
//     });
//     console.log(result)
//     const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
//     res.status(201).json({ user: result, token: token });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const existingUser = await userModel.findOne({ email: email });
//     if (!existingUser) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const matchPassword = await bcrypt.compare(password, existingUser.password);

//     if (!matchPassword) {
//       return res.status(404).json({ message: "Invalid password" });
//     }
//     const token = jwt.sign(
//       { email: existingUser.email, id: existingUser._id },
//       SECRET_KEY
//     );
//     res.status(200).json({ user: existingUser, token: token });
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// module.exports = { login, signup};



const {userModel,profileModel,postModel} = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const SECRET_KEY = "NOTESAPI";

const signup=async(req,res)=>{
  const {email,password,username}=req.body;
  if(!email ||!password){
    return res.status(400).json({'error':"email and password are required"})
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });

  }
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password)) {
  return res.status(400).json({ error: "Invalid password format" });
  }

  const usernameRegex = /^[A-Za-z\s]+[0-9]*$/;

  if (!usernameRegex.test(username)){
  return res.status(400).json({error: "Invalid username format"});
}

  try {
    const existingUser=await userModel.findOne({email:email});
    console.log(existingUser)
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });
    console.log(result)
    // const token = jwt.sign({ email: result.email, id: result._id },process.env.SECRET_KEY);
   res.status(201).json({user:result});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body; 
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(404).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
    process.env.SECRET_KEY
    );
    res.status(200).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Something went wrong" });
  }
};
 
module.exports={login,signup};