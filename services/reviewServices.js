const Review = require("../models/Review");

exports.createReview = async (data) => {
  const newReview = new Review(data);
  return await newReview.save();
};

exports.getAllReviews = async () => {
  return await Review.find()
    .populate("customerId", "name email")
    .populate("restaurantId", "name location");
};

exports.getReviewById = async (id) => {
  return await Review.findById(id)
    .populate("customerId", "name email")
    .populate("restaurantId", "name location");
};

exports.updateReviewById = async (id, data) => {
  return await Review.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

exports.deleteReviewById = async (id) => {
  return await Review.findByIdAndDelete(id);
};
