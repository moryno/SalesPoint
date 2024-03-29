import responseError from "../utils/responseError.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  if (!req.isSeller)
    return next(
      responseError(403, "You need a seller account to post a product!")
    );

  const newProduct = new Product({
    ...req.body,
    userId: req.userId,
  });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      if (product.userId !== req.userId)
        return next(responseError(403, "You can only delete your product"));

      await Product.findByIdAndDelete(req.params.id);
      res.status(200).send("Product has been deleted!");
    } else {
      return next(responseError(404, "Product not found!"));
    }
  } catch (error) {
    next(error);
  }
};
export const editProduct = async (req, res, next) => {
  if (!req.isSeller)
    return next(
      responseError(403, "You need a seller account to edit this product!")
    );

  const editedProduct = {
    ...req.body,
    userId: req.userId,
  };

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      if (product.userId !== req.userId)
        return next(responseError(403, "You can only edit your product"));

      const prod = await Product.findByIdAndUpdate(
        req.params.id,
        editedProduct,
        { new: true }
      );
      res.status(200).send(prod);
    } else {
      return next(responseError(404, "Product not found!"));
    }
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return next(responseError(404, "Product not found!"));

    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  const query = req.query;
  const filters = {
    ...(query.userId && { userId: query.userId }),
    ...(query.category && { category: query.category }),
    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gt: query.min }),
        ...(query.max && { $lt: query.max }),
      },
    }),
    ...(query.search && { title: { $regex: query.search, $options: "i" } }),
  };
  try {
    const products = await Product.find(filters);

    if (!products) return next(responseError(404, "Products not found!"));

    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};
