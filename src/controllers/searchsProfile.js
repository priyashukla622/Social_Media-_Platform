
  const Model = require("../models/user");

  const searchProfile = async (req, res) => {
    try {
      let profiles;
      const username = req.query.username;
      if (username) {
        profiles= await Model.profileModel.findOne({"username" : {$regex : username}});
        if (profiles.length === 0) {
          return res.status(404).json({ message: "No profile found for the email provided" });
        }
        return res.status(200).json({ message: "Profile found successfully", profiles: profiles });
      } 
      else {
        profiles = await Model.profileModel.find({});
        if (profiles) {
          return res.status(200).json({ message: "All profile  found successfully", profiles: profiles });
         
        }
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Server Error" });
    }
  };
  
  module.exports = { searchProfile };