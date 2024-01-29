const viewProfile = async (req, res) => {
    const { email } = req.body;
  
    try {
      // Find the existing user based on email
      const existingUser = await userModel.findOne({ email });
  
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the user already has a profile
      const existingProfile = await profileModel.findOne({ email });
  
      if (!existingProfile) {
        // If no profile exists, create a new one
        const { username, contact, bio, hobby, gender } = req.body; 
        const profileData = await profileModel.create({
          email,
          username,
          contact,
          bio,
          hobby,
          gender,
        });
        return res.status(201).json({ existingUser, profileData });
      }
  
      // If a profile already exists, return the existing profile
      res.status(200).json({ existingUser, existingProfile });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
module.exports = {viewProfile };