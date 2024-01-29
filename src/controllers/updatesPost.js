const updatePost = async (req, res) => {
  const { username } = req.body; 
  const { title, content, description } = req.body; 

  try {
      const existingUser = await userModel.findOne({ username });

      if (!existingUser) {
          return res.status(404).json({ message: "User not found" });
      }

      const existingPost = await postModel.findOne({ username });

      if (!existingPost) {
          return res.status(404).json({ message: "Post is not found" });
      }

      // Update the post's 
      existingPost.title = title;
      existingPost.content = content;
      existingPost.description = description;

      await existingPost.save();

      res.status(200).json({ message: "Post updated successfully", existingPost });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { updatePost };
