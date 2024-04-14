import { REVIEWS_API } from "_constants";
import { request } from "utils";

const createReview = (data) => {
  return request.post(REVIEWS_API, data);
};

const getReviews = (id) => {
  return request.get(`${REVIEWS_API}/${id}`);
};

export const reviewService = {
  getReviews,
  createReview,
};
