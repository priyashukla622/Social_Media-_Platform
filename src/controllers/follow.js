// const followPost = async (req, res) => {
//     try {
//         const post = await postModel.findById(req.params._id);

//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }

//         if (!post.follow.includes(req.body.userId)) {
//             await post.updateOne({ $push: { follow: req.body.userId } });
//             res.status(201).json({ message: 'User has liked the post' });
//         } else {
//             await post.updateOne({ $pull: { follow: req.body.userId } });
//             res.status(200).json({ message: 'User has unliked the post' });
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Server Error' });
//     }
// };

// module.exports = { followPost };





// const followPost = async (req, res) => {
//     try {
//         const userFollow = await profileModel.findById(req.params._id);
//         const userFollowing= await profileModel.findById(req.body.userId);

//         if (!userFollow) {
//             return res.status(404).json({ message: 'Post not found' });
//         }

//         const userId = req.body.userId;

//         if (!userFollow.follow.includes(userId)) {
//             // If the user is not already following, add them to the 'follow' array
//             await userFollowing.updateOne({ $push: { follow: userId } });
//             await userFollow.updateOne({ $push: { following: _id } });
//             res.status(201).json({ message: 'User has started following the post' });
//         } else {
//             // If the user is already following, remove them from the 'follow' array
//             await userFollow.updateOne({ $pull: { follow: userId } });
//             res.status(200).json({ message: 'User has unfollowed the post' });
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Server Error' });
//     }
// };

// module.exports = { followPost };



const followPost = async (req, res) => {
    try {
        const userToFollowId = req.params._id;
        const followerId = req.body.userId;

        const userToFollow = await profileModel.findById(userToFollowId);
        const follower = await profileModel.findById(followerId);

        if (!userToFollow || !follower) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        if (!userToFollow.follow.includes(followerId)) {
            // If the user is not already following, add them to the 'follow' array
            await userToFollow.updateOne({ $push: { follow: followerId } });
            await follower.updateOne({ $push: { following: userToFollowId } });
            res.status(201).json({ message: 'User has follow ' });
        } else {
            // If the user is already following, remove them from the 'follow' array
            await userToFollow.updateOne({ $pull: { follow: followerId } });
            await follower.updateOne({ $pull: { following: userToFollowId } });
            res.status(200).json({ message: 'User has unfollowed the profile' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { followPost };

