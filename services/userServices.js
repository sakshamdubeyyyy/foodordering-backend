const User = require("../models/User");

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

exports.getAllUsers = async () => {
  return await User.find().select("-password");
};

exports.updateUserById = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");
};

exports.deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};

exports.getUserWithPassword = async (email) => {
  return await User.findOne({ email }).select("+password");
};
