// const { profileModel } = require("../models/user");

// const { profileModel } = require("../models/user");

const searchProfile = async (req, res) => {
    const username = req.body.username; 
  
    try {
      //   console.log('Username:', username);
        
        // Assuming userModel has a 'username' field
        const user = await profileModel.findOne({ username:username });
  
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
  
        console.log('User:', user);
  
        // // Assuming postModel has a 'userId' field referencing User model
        const posts = await profileModel.findOne({username:username });
  
        console.log('Posts:', posts);
  
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found for the user' });
        }
  
        res.status(200).json({ message: 'Posts found for the user', posts });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
  };
  
  module.exports = { searchProfile };