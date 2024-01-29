// const followingPost = async (req, res) => {
//     try {
//         const post = await postModel.findById(req.params._id);

//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }

//         if (!post.like.includes(req.body.userId)) {
//             await post.updateOne({ $push: { like: req.body.userId } });
//             res.status(201).json({ message: 'User has liked the post' });
//         } else {
//             await post.updateOne({ $pull: { like: req.body.userId } });
//             res.status(200).json({ message: 'User has unliked the post' });
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Server Error' });
//     }
// };

// module.exports = { followingPost };