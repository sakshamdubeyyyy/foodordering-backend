const Order = require("../models/Order");

exports.createOrder = async (data) => {
  const order = new Order(data);
  return await order.save();
};

exports.getAllOrders = async () => {
  return await Order.find()
    .populate("customerId", "name email")
    .populate("restaurantId", "name")
    .populate("items.menuItemId", "name price");
};

exports.getOrderById = async (id) => {
  return await Order.findById(id)
    .populate("customerId", "name email")
    .populate("restaurantId", "name")
    .populate("items.menuItemId", "name price");
};

exports.updateOrder = async (id, data) => {
  return await Order.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

exports.deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};
