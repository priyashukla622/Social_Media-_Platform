
const createProfile = async (req, res) => {
  const { email, contact, username, bio, hobby, gender } = req.body;
  console.log(username)
  try {
    const regexPattern = /^\+?\d{10}$/;
    if (!regexPattern.test(contact)) {
      return res.status(400).json({ message: "Invalid contact number format" });
    }
    // Find the existing user based on email
    const existingUser = await userModel.findOne({ email:email});
    // If no profile exists, create a new one
    const profileData = await profileModel.findOneAndUpdate(
      { username }, // Update the username
      { new: true, upsert: true } // Return the updated profile if found, create a new one if not found
    )
    // If a profile already exists, return the existing profile
   
    const existingProfile = await profileModel.findOne({ email });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile  already exists" });
    } else {
      // If no profile exists, create a new one
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
    res.status(200).json({ existingUser, existingProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = { createProfile };











