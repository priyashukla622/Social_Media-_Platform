
const searchProfile = async (req, res) => {
    const username = req.body.username; 
  
    try {
        // const user = await profileModel.findOne({ username:username });
        const user = await profileModel.findOne({"username" : {$regex : username}});
  
        if (!user) {
            return res.status(404).json({ message: 'Profile not found by this username' });
        }
        console.log('User:', user);

        res.status(200).json({ message: 'Profile found  by this username', user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
  };

  
  module.exports = { searchProfile };