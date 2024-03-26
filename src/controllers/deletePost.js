
const deletePost = async (req, res) => {
    const email = req.body.email; 
    const postText = req.body.post; // Assuming 'post' refers to the content of the post

    try {
        const existingUser = await userModel.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        // res.status(200).json({ message: 'existingUser user' });
        
  
        const existingPost = await postModel.findOne({ email, post: postText });
  
        if (!existingPost) {
            return res.status(404).json({ message: "Post is not found" });
        }
        const deletedPost = await postModel.deleteOne({ email, post: postText });
        
        if (deletedPost.deletedCount === 0) {
            console.log("Post not found");
            return res.status(404).json({ message: 'Post not found for the user' });
        }
        
        res.status(200).json({ message: 'Post deleted for the user' });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { deletePost };

