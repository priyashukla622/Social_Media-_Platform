


const { postModel } = require("../models/user");

const likePost = async (req, res) => {
    try {
        const user = await postModel.findById(req.body.userId);
        console.log("User:", user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const postId = req.query._id;
        console.log("Post ID:", postId);

        const post = await postModel.findById(postId);
        console.log("Post:", post);

        if (!post) {
            console.log("Post not found with ID:", postId);
            return res.status(404).json({ message: 'Post not found' });
        }

        if (!post.like.includes(req.body.userId)) {
            await post.updateOne({ $push: { like: req.body.userId } });
            return res.status(201).json({ message: 'User has liked the post' });
        } else {
            await post.updateOne({ $pull: { like: req.body.userId } });
            return res.status(200).json({ message: 'User has unliked the post' });
        }
    } catch (error) {
        console.error("Error in likePost:", error.message);
        return res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { likePost };






