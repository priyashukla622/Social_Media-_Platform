
const { profileModel } = require("../models/user");

const followPost = async(req, res) => {
    if (req.body.userId == req.params._id) {
        return res.status(201).json({message:"you cannot follow yourself"});
    }else{
            try {
                const user = await profileModel.findById(req.params._id);
                const currentUser = await profileModel.findById(req.body.userId);

                if (!user.follow.includes(req.body.userId)) {
                    await user.updateOne({ $push: { follow: req.body.userId } });
                    await currentUser.updateOne({ $push: { following: req.params._id } });
                    return res.status(201).json({ message: "you have to followed this user" });
                } else {
                    // return res.status(404).json({ message: "You already followed " });
                    await user.updateOne({ $pull: { follow: req.body.userId} });
                    await currentUser .updateOne({ $pull: { following: req.params._id } });
                    res.status(200).json({ message: 'User has unfollowed the profile' });
                }
            } catch (error) {
                console.error(error);
                return res.status(404).json({ message: "Something went wrong" });
            }
        }
    }
module.exports = { followPost };









