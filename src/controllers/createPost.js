const createPost = async (req, res) => {
    const { username } = req.body; 

  
    try {
      // Check if the user exists
      const existingUser = await userModel.findOne({username :username });
      console.log(existingUser)
      if (existingUser==null) {
        // return res.status(404).json({ message: "User not found" });
        console.log('User not found');
        return res.status(404).json({ message: 'User not found'});
      }
      else{
        // Create a new post
      const newPost = {
        title:req.body.title,
        content: req.body.content,
        description:req.body.description,
        username:req.body.username,
        user: existingUser._id,
      };
      //you have a postModel with a create method
      const createdPost = await postModel.create(newPost);
  
      res.status(201).json({ message: 'Post created successfully', post: createdPost });
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {createPost};