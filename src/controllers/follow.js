
const { profileModel } = require("../models/user");
const mongoose = require('mongoose');

const followPost = async (req, res) => {
    let userId = req.query._id;
    const currentUserId = req.body.userId;

    if (userId === currentUserId) {
        return res.status(400).json({ message: "You cannot follow yourself" });
    }

    try {
        console.log("User ID:", userId);
        console.log("Current User ID:", currentUserId);

        const user = await profileModel.findById(userId);
        const currentUser = await profileModel.findById(currentUserId);
        console.log("User:", user);
        console.log("Current User:", currentUser);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!currentUser) {
            return res.status(404).json({ message: "Current user not found" });
        }

        if (user.follow.includes(currentUserId)) {
            return res.status(400).json({ message: "You cannot follow again" });
        } else {
            await user.updateOne({ $push: { follow: currentUserId } });
            await currentUser.updateOne({ $push: { following: userId } });
            return res.status(201).json({ message: "You have followed this user" });
        }
    } catch (error) {
        console.error("Error in followPost:", error);
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

module.exports = { followPost };
