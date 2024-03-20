
// const followPost = async (req, res) => {
//     // const userToFollowId = req.params._id;
//     // const followerId = req.body.userId;
//     // const email = req.body.email; 
//     try {
//         const userToFollowId = req.params._id;
//         const followerId = req.body.userId;

//         // const existingUser = await userModel.findOne({ email });

//         // if (!existingUser) {
//         //     return res.status(404).json({ message: "User not found" });
//         // }
//         const userToFollow = await profileModel.findOne({userToFollowId});
//         const follower = await profileModel.findById(followerId);

//         if (!userToFollow || !follower) {
//             return res.status(404).json({ message: 'User profile not found' });
//         }

//         if (!userToFollow.follow.includes(followerId)) {
//             // If the user is not aling, add them to the 'follow' arrayready follow
//             await userToFollow.updateOne({ $push: { follow: followerId } });
//             await follower.updateOne({ $push: { following: userToFollowId } });
//             res.status(201).json({ message: 'User has follow ' });
//         } else {
//             // If the user is already following, remove them from the 'follow' array
//             await userToFollow.updateOne({ $pull: { follow: followerId } });
//             await follower.updateOne({ $pull: { following: userToFollowId } });
//             res.status(200).json({ message: 'User has unfollowed the profile' });
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Server Error' });
//     }
// };

// module.exports = { followPost };









// const followPost = async (req, res) => {
//     const userToFollowId = req.params._id;
//     const followerId = req.body.userId;
//     const email = req.body.email; 

//     try {
//         const existingUser = await userModel.findOne({ email });

//         if (!existingUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const userToFollow = await profileModel.findOne({userToFollowId});
//         const follower = await profileModel.findById(follower: followerId );


//         if (!userToFollow || !follower) {
//             return res.status(404).json({ message: 'User profile not found' });
//         }

//         if (!userToFollow.follow.includes(followerId)) {
//             await userToFollow.updateOne({ $push: { follow: followerId } });
//             await follower.updateOne({ $push: { following: userToFollowId } });
//             return res.status(201).json({ message: 'User has followed the profile' });
//         } else {
//             await userToFollow.updateOne({ $pull: { follow: followerId } });
//             await follower.updateOne({ $pull: { following: userToFollowId } });
//             return res.status(200).json({ message: 'User has unfollowed the profile' });
//         }
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({ error: 'Server Error' });
//     }
// };

// module.exports = { followPost };





const followPost = async (req, res) => {
    // const userToFollowId = req.params._id;
    // const followerId = req.body.userId;
    const email = req.body.email; 
    try {
        const userToFollowId = req.params._id;
        const followerId = req.body.userId;

        const existingUser = await userModel.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const userToFollow = await profileModel.findOne({userToFollowId});
        const follower = await profileModel.findById(followerId);

        if (!userToFollow || !follower) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        if (!userToFollow.follow.includes(followerId)) {
            // If the user is not aling, add them to the 'follow' arrayready follow
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


