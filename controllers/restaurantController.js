const restaurantService = require("../services/restaurantServices");

const createRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurant(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Failed to create restaurant", error });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantService.getAllRestaurants();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch restaurants", error });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await restaurantService.getRestaurantById(req.params.id);
    if (!restaurant)
      return res.status(404).json({ message: "Restaurant not found" });

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch restaurant", error });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const updated = await restaurantService.updateRestaurant(
      req.params.id,
      req.body
    );
    if (!updated)
      return res.status(404).json({ message: "Restaurant not found" });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update restaurant", error });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const deleted = await restaurantService.deleteRestaurant(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Restaurant not found" });

    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete restaurant", error });
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
