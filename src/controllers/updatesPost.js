const updatePost = async (req, res) => {
  const { username } = req.body; // Fix the typo here, it should be req.body.username
  const { title, content, description } = req.body; // Add other fields as needed

  try {
      // Find the user based on the username
      const existingUser = await userModel.findOne({ username });

      if (!existingUser) {
          return res.status(404).json({ message: "User not found" });
      }

      // Find the post based on the username
      const existingPost = await postModel.findOne({ username });

      if (!existingPost) {
          return res.status(404).json({ message: "Post is not found" });
      }

      // Update the post's fields
      existingPost.title = title;
      existingPost.content = content;
      existingPost.description = description;

      // Save the updated post data
      await existingPost.save();

      res.status(200).json({ message: "Post updated successfully", existingPost });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { updatePost };
