const MenuItem = require("../models/MenuItem");

exports.createMenuItem = async (data) => {
  const menuItem = new MenuItem(data);
  return await menuItem.save();
};

exports.getMenuItems = async (restaurantId) => {
  const filter = restaurantId ? { restaurantId } : {};
  return await MenuItem.find(filter);
};

exports.getMenuItemById = async (id) => {
  return await MenuItem.findById(id);
};

exports.updateMenuItem = async (id, data) => {
  return await MenuItem.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

exports.deleteMenuItem = async (id) => {
  return await MenuItem.findByIdAndDelete(id);
};
