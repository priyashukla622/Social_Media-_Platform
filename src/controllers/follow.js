
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

