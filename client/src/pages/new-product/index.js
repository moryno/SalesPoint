import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss"
import { upload } from "_helpers";
import { INITIAL_STATE, productReducer, useAuthUser, useCreateService } from "_hooks";
import { AffiliateQueryEnums, MY_PRODUCT_ROUTE } from "_constants";
import { productService } from "_services";

const NewProduct = () => {
    const { user } = useAuthUser();
    const [singleFile, setSingleFile] = useState(undefined);
    const { createProduct } = productService;
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const mutation = useCreateService(
        createProduct,
        AffiliateQueryEnums.PRODUCTS
      );
  
    const [state, dispatch] = useReducer(productReducer, {...INITIAL_STATE, userId: user?._id});
  
    const handleChange = (e) => {
      dispatch({
        type: "CHANGE_INPUT",
        payload: { name: e.target.name, value: e.target.value },
      });
    };
    const handleFeature = (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_FEATURE",
        payload: e.target[0].value,
      });
      e.target[0].value = "";
    };
  
    const handleUpload = async () => {
      setUploading(true);
      try {
        const cover = await upload(singleFile);
  
        const images = await Promise.all(
          [...files].map(async (file) => {
            const url = await upload(file);
            return url;
          })
        );
        setUploading(false);
        dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
      } catch (err) {
        console.log(err);
      }
    };
  
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      mutation.mutate(state);
      navigate(MY_PRODUCT_ROUTE)
    };
  
    return (
      <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="sections">
            <div className="info">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. I will do something I'm really good at"
                onChange={handleChange}
              />
              <label htmlFor="category">Category</label>
              <select name="category" id="category" onChange={handleChange}>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Mobile Phones</option>
                <option value="furniture">Furnitures</option>
                <option value="vehicles">Vehicles</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="music">Music & Audio</option>
                <option value="design">Graphics & Design</option>
                <option value="video">Video & Animation</option>
                <option value="writing">Writing & Translation</option>
                <option value="marketing">Digital Marketing</option>
                <option value="ai">AI Services</option>
                <option value="technology">Programming & Technology</option>
                <option value="business">Business</option>
              </select>
              <div className="images">
                <div className="imagesInputs">
                  <label htmlFor="cover">Cover Image</label>
                  <input
                    type="file"
                    onChange={(e) => setSingleFile(e.target.files[0])}
                  />
                  <label htmlFor="images">Upload Images</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </div>
                <button onClick={handleUpload}>
                  {uploading ? "uploading" : "Upload"}
                </button>
              </div>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id=""
                placeholder="Brief descriptions to introduce your service to customers"
                cols="0"
                rows="16"
                onChange={handleChange}
              ></textarea>
              <button onClick={handleSubmit}>Create</button>
            </div>
            <div className="details">
              <label htmlFor="shortTitle">Service Title</label>
              <input
                type="text"
                name="shortTitle"
                placeholder="e.g. One-page web design"
                onChange={handleChange}
              />
              <label htmlFor="shortDescription">Short Description</label>
              <textarea
                name="shortDescription"
                onChange={handleChange}
                id="shortDescription"
                placeholder="Short description of your service"
                cols="30"
                rows="10"
              ></textarea>
              <label htmlFor="deliveryTime">Delivery Time (e.g. 3 days)</label>
              <input type="number" name="deliveryTime" onChange={handleChange} />
              <label htmlFor="warranty">Warrany</label>
              <input
                type="number"
                name="warranty"
                onChange={handleChange}
              />
              <label htmlFor="features">Add Features</label>
              <form className="add"
               onSubmit={handleFeature}
               >
                <input type="text" placeholder="e.g. page design" />
                <button type="submit">add</button>
              </form>
              <div className="addedFeatures">
                {state?.features?.map((f, i) => (
                  <div className="item" key={i}>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FEATURE", payload: f })
                      }
                    >
                      {f}
                      <span>X</span>
                    </button>
                  </div>
                ))}
              </div>
              <label htmlFor="price">Price</label>
              <input type="number" onChange={handleChange} name="price" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default NewProduct