import { useQuery } from "@tanstack/react-query";
import React from "react";
import "./Review.scss";
import { useGetById } from "_hooks";
import { AffiliateQueryEnums } from "_constants";
import { userService } from "_services";
const Review = ({ review }) => {
  const { getUser } = userService;

  const { isLoading, error, data } = useGetById(
    getUser,
    AffiliateQueryEnums.USERS,
    review?.userId
  );

  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img
            className="pp"
            src={data?.data?.image || "/img/noavatar.jpg"}
            alt=""
          />
          <div className="info">
            <span>{data?.data?.username}</span>
            <div className="country">
              <span>{data?.data?.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.description}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
