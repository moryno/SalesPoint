import React from "react";
import "./ProductCard.scss";
import { useGetById } from "_hooks";
import { AffiliateQueryEnums, PRODUCT_ROUTE } from "_constants";
import { userService } from "_services";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { getUser } = userService;
  const { isLoading, data } = useGetById(
    getUser,
    AffiliateQueryEnums.USERS,
    item?.userId
  );
  return (
    <Link to={`${PRODUCT_ROUTE}/${item?._id}`} className="productCard link">
      <img src={item?.cover} alt="productCard" />
      <div className="info">
        <div className="user">
          {isLoading ? (
            "Loading"
          ) : (
            <>
              <img src={data?.data?.image || "/img/noavatar.jpg"} alt="user" />
              <span>{data?.data?.username || data?.data?.fullName}</span>
            </>
          )}
        </div>
        <p>{item?.description}</p>
        {!isNaN(item?.totalStars / item?.starNumber) && (
          <div className="star">
            {Array(Math.round(item?.totalStars / item?.starNumber))
              .fill()
              .map((item, i) => (
                <img key={i} src="./img/star.png" alt="star" />
              ))}
            <span>{Math.round(item?.totalStars / item?.starNumber)}</span>
          </div>
        )}
      </div>
      <hr />
      <div className="detail">
        <img src="./img/heart.png" alt="detail" />
        <div className="price">
          <span>STARTING AT</span>
          <h2>$ {item?.price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
