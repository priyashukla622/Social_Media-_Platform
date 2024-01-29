const updateProfile = async (req, res) => {
    const { email } = req.body; // Assuming you use the user's email for identification
    const { bio,contect } = req.body; // Add other fields as needed
  
    try {
      // Find the user based on the email
      const existingUser = await userModel.findOne({ email });
  
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const existingProfile= await profileModel.findOne({email})
      if (!existingProfile) {
        return res.status(404).json({ message: "Profile is  not found" });
      }
  
      // Update the user's profile details
      existingProfile.bio = bio;
      existingProfile.contect = contect;
  
  
      // Save the updated user data
      await existingProfile.save();
  
      res.status(200).json({ message: "Profile updated successfully", existingProfile });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
module.exports = {updateProfile};