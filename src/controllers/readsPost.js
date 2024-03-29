

const readPost = async (req, res) => {
  try {
    let posts;
    const email = req.query.email;
    if (email) {
      posts = await postModel.find({ email: email });
      if (posts.length === 0) {
        return res.status(404).json({ message: "No posts found for the email provided" });
      }
      return res.status(200).json({ message: "Posts found successfully", posts: posts });
    } 
    else {
      posts = await postModel.find({});
      if (posts) {
        return res.status(200).json({ message: "All posts found successfully", posts: posts });
       
      }
    }

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { readPost };

