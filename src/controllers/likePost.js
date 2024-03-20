
const likePost = async (req, res) => {
    const email = req.body.email; 

    try {
        // Check if the user exists
        const existingUser = await userModel.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const user = await userModel.findById(req.body.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // If user exists, then find the post
        const post = await postModel.findOne(req.params._id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (!post.like.includes(req.body.userId)) {
            await post.updateOne({ $push: { like: req.body.userId } });
            res.status(201).json({ message: 'User has liked the post' });
        } else {
            await post.updateOne({ $pull: { like: req.body.userId } });
            res.status(200).json({ message: 'User has unliked the post' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};
module.exports = { likePost };








