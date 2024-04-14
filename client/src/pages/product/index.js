import React from "react";
import "./Product.scss";
import { Slider } from "infinite-react-carousel";
import { useParams } from "react-router-dom";
import { useGetById } from "_hooks";
import { AffiliateQueryEnums } from "_constants";
import { productService } from "_services";
import { userService } from "_services";
import Reviews from "components/reviews/Reviews";

const Product = () => {
  const { id } = useParams();
  const { getProduct } = productService;
  const { getUser } = userService;
  const { isLoading, data } = useGetById(
    getProduct,
    AffiliateQueryEnums.PRODUCTS,
    id
  );

  const seller = useGetById(
    getUser,
    AffiliateQueryEnums.USERS,
    data?.data?.userId
  );

  return isLoading ? (
    "Loading"
  ) : (
    <div className="product">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            SALESPOINT {">"} GRAPHICS & DESIGN
          </span>
          <h1>{data?.data?.title}</h1>
          <div className="user">
            <img
              className="pp"
              src={seller?.data?.data?.image || "/img/noavatar.jpg"}
              alt="profile"
            />
            <span>Anna Bell</span>
            {!isNaN(data?.data?.totalStars / data?.data?.starNumber) && (
              <div className="stars">
                {Array(
                  Math.round(data?.data?.totalStars / data?.data?.starNumber)
                )
                  .fill()
                  .map((item, i) => (
                    <img key={i} src="/img/star.png" alt="star" />
                  ))}
                <span>
                  {Math.round(data?.data?.totalStars / data?.data?.starNumber)}
                </span>
              </div>
            )}
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            {data?.data?.images?.map((img, index) => (
              <img key={index} src={img} alt="product" />
            ))}
          </Slider>
          <h2>About This Product</h2>
          <p>{data?.data?.description}</p>
          {seller?.isLoading ? (
            "Loading"
          ) : (
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img
                  src={seller?.data?.data?.image || "/img/noavatar.jpg"}
                  alt="seller"
                />
                <div className="info">
                  <span>{seller?.data?.data?.username}</span>
                  {!isNaN(data?.data?.totalStars / data?.data?.starNumber) && (
                    <div className="stars">
                      {Array(
                        Math.round(
                          data?.data?.totalStars / data?.data?.starNumber
                        )
                      )
                        .fill()
                        .map((item, i) => (
                          <img key={i} src="/img/star.png" alt="star" />
                        ))}
                      <span>
                        {Math.round(
                          data?.data?.totalStars / data?.data?.starNumber
                        )}
                      </span>
                    </div>
                  )}
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{seller?.data?.data?.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{seller?.data?.data?.description}</p>
              </div>
            </div>
          )}
          <Reviews productId={id} />
        </div>
        <div className="right">
          <div className="price">
            <div className="title">
              <img
                className="pp"
                src={data?.data?.cover || "/img/noavatar.jpg"}
                alt="profile"
              />
              <h3>
                {data?.data?.shortTitle
                  ? data?.data?.shortTitle
                  : data?.data?.title}
              </h3>
            </div>

            <h2>{data?.data?.price}</h2>
          </div>
          <p>
            {data?.data?.shortDescription
              ? data?.data?.shortDescription
              : data?.data?.description}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data?.data?.deliveryTime} Delivery Day(s)</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data?.data?.warranty} Warranty</span>
            </div>
          </div>
          <div className="features">
            {data?.data?.features?.map((feature, index) => (
              <div key={index} className="item">
                <img src="/img/greencheck.png" alt="feature" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
