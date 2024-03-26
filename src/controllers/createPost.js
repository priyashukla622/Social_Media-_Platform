const createPost = async (req, res) => {
    const { email } = req.body; 
    try {
      
      const existingUser = await userModel.findOne({email :email });
      console.log(existingUser)
      if (existingUser==null) {
       
        console.log('User not found');
        return res.status(404).json({ message: 'User not found'});
      }
      else{
       
      const newPost = {

        title:req.body.title,
        content: req.body.content,
        description:req.body.description,
        username:req.body.username,
        email:req.body.email,
        user: existingUser._id,
      };
      const createdPost = await postModel.create(newPost);
  
      res.status(201).json({ message: 'Post created successfully', post: createdPost });
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {createPost};