const User = require("../models/user.model");

const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({_id: { $ne: loggedInUserId }}).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = getUserForSidebar;
