const deletePost = async (req, res) => {
    const username = req.body.username; 

    try {
        console.log('Username is deleted:', username);

        const posts = await postModel.deleteOne({ username });

        if (posts.deletedCount === 0) {
            console.log("post is not found")
            return res.status(404).json({ message: 'No posts found for the user' });
           
        }
        res.status(200).json({ message: 'Posts deleted for the user' });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { deletePost };
