import React, { useState } from "react";
import "./Reviews.scss";
import { useCreateService, useGetById } from "_hooks";
import { AffiliateQueryEnums } from "_constants";
import { reviewService } from "_services";
import Review from "components/review/Review";
const Reviews = ({ productId }) => {
  const [review, setReview] = useState(null);
  const { getReviews, createReview } = reviewService;
  const mutation = useCreateService(
    createReview,
    `${AffiliateQueryEnums.REVIEWS}.${productId}`
  );

  const { isLoading, error, data } = useGetById(
    getReviews,
    AffiliateQueryEnums.REVIEWS,
    productId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutateAsync({ productId, ...review });
    // setReview(null);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data?.data?.map((review) => (
            <Review key={review._id} review={review} />
          ))}
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            onChange={onChange}
            placeholder="write your opinion"
          />
          <select name="star" id="star" onChange={onChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
