import Review from "../models/review.model.js";
import Product from "../models/product.model.js";
import responseError from "../utils/responseError.js";

export const createReview = async (req, res, next) => {
  const newReview = new Review({
    userId: req.userId,
    productId: req.body.productId,
    description: req.body.description,
    star: req.body.star,
  });

  try {
    const ownProduct = await Product.findById(req.body.productId);
    if (ownProduct.userId === req.userId && req.isSeller)
      return next(responseError(403, "You cannot review your product!"));
    // TO DO
    // Check if userId is in Order
    const existingReview = await Review.findOne({
      productId: req.body.productId,
      userId: req.userId,
    });
    if (existingReview)
      return next(
        responseError(
          403,
          "You have already created a review for this product!"
        )
      );

    const review = await newReview.save();

    await Product.findByIdAndUpdate(req.body.productId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (review) {
      if (review.userId !== req.userId)
        return next(responseError(403, "You can only delete your review"));

      await Review.findByIdAndDelete(req.params.id);
      res.status(200).send("Review has been deleted!");
    } else {
      return next(responseError(404, "Review not found!"));
    }
  } catch (error) {
    next(error);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });

    if (reviews.length === 0)
      return next(responseError(404, "Reviews not found!"));

    res.status(200).send(reviews);
  } catch (error) {
    next(error);
  }
};
