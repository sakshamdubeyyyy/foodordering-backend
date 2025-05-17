const menuItemService = require("../services/menuItemServices");

// Create a new MenuItem
exports.createMenuItem = async (req, res) => {
  try {
    const menuItem = await menuItemService.createMenuItem(req.body);
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all MenuItems (optionally by restaurantId)
exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await menuItemService.getMenuItems(
      req.query.restaurantId
    );
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single MenuItem by ID
exports.getMenuItemById = async (req, res) => {
  try {
    const menuItem = await menuItemService.getMenuItemById(req.params.id);
    if (!menuItem) return res.status(404).json({ error: "MenuItem not found" });
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a MenuItem
exports.updateMenuItem = async (req, res) => {
  try {
    const updatedMenuItem = await menuItemService.updateMenuItem(
      req.params.id,
      req.body
    );
    if (!updatedMenuItem)
      return res.status(404).json({ error: "MenuItem not found" });
    res.json(updatedMenuItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a MenuItem
exports.deleteMenuItem = async (req, res) => {
  try {
    const deletedMenuItem = await menuItemService.deleteMenuItem(req.params.id);
    if (!deletedMenuItem)
      return res.status(404).json({ error: "MenuItem not found" });
    res.json({ message: "MenuItem deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
