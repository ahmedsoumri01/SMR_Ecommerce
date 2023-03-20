import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function EditProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    category: "",
    productDescription: "",
    productImage: "",
  });
  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProductData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProductData();
  }, [id]);
  console.log(productData);
  return (
    <div className=" my-5 container">
      <h3>Edit Product</h3>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productData.productName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              value={productData.productPrice}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={productData.category}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              type="text"
              className="form-control"
              id="productDescription"
              value={productData.productDescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage">Product Image</label>
            <input
              type="text"
              className="form-control"
              id="productImage"
              value={productData.productImage}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
