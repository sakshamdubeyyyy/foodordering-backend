const Restaurant = require("../models/Restaurant");

const createRestaurant = async (data) => {
  const { ownerId, name, address, cuisineType, rating, isOpen } = data;
  const newRestaurant = new Restaurant({
    ownerId,
    name,
    address,
    cuisineType,
    rating,
    isOpen,
  });
  return await newRestaurant.save();
};

const getAllRestaurants = async () => {
  return await Restaurant.find().populate("ownerId", "name email");
};

const getRestaurantById = async (id) => {
  return await Restaurant.findById(id).populate("ownerId", "name email");
};

const updateRestaurant = async (id, updateData) => {
  return await Restaurant.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true }
  );
};

const deleteRestaurant = async (id) => {
  return await Restaurant.findByIdAndDelete(id);
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
