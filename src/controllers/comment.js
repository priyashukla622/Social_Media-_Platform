
// const commentPost = async (req, res) => {
//     try {

//         const post = await postModel.findOne(req.params._id);

//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }

//         if (!post.comment.includes(req.body.userId)) {
//             await post.updateOne({ $push: { comment: req.body.userId } });
//             res.status(201).json({ message: 'User has comment the post' });
//         } else {
//             await post.updateOne({ $pull: { comment: req.body.userId } });
//             res.status(200).json({ message: 'User has uncomment the post' });
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Server Error' });
//     }
// };

// module.exports = { commentPost };




const commentPost = async (req, res) => {
    const email = req.body.email; 
    try {
        const existingUser = await userModel.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const post = await postModel.findOne(req.params._id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (!post.comment.includes(req.body.userId)) {
            await post.updateOne({ $push: { comment: req.body.userId } });
            res.status(201).json({ message: 'User has comment the post' });
        } else {
            await post.updateOne({ $pull: { comment: req.body.userId } });
            res.status(200).json({ message: 'User has uncomment the post' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { commentPost };




