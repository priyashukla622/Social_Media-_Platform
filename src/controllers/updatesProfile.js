const updateProfile = async (req, res) => {
    const { email } = req.body; 
    const { bio,contact,gender ,username} = req.body; 
  
    try {
      
      const existingUser = await userModel.findOne({ email });
  
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const existingProfile= await profileModel.findOne({email})
      if (!existingProfile) {
        return res.status(404).json({ message: "Profile is  not found" });
      }
  
      existingProfile.bio = bio;
      existingProfile.contact = contact;
      existingProfile.gender = gender;
      existingProfile.username = username;
  
      await existingProfile.save();
  
      res.status(200).json({ message: "Profile updated successfully", existingProfile });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
module.exports = {updateProfile};