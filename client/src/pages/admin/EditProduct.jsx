import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function EditProduct() {
  //get product id from url
  const { id } = useParams();
  // initialize properties from product data
  const [productData, setProductData] = useState({
    category: "",
    disponibilte: true,
    productDescription: "",
    productImage: "",
    productName: "",
    productPrice: 0,
  });
  // get product data from server
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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    /*  console.log(" name " + productData.productName);
    console.log(" price " + productData.productPrice);
    console.log(" description " + productData.productDescription);
    console.log(" disponibilte " + productData.disponibilte);
    console.log(" category " + productData.category);
    console.log(" image " + productData.productImage); */

    try {
      const res = await axios.patch(
        `http://localhost:5000/products/${id}`,
        productData
      );
      alert(res.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  /* console.log("Product Data", productData); */
  return (
    <div className=" my-5 container">
      <h2>Edit Product</h2>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Product id
            </label>
            <input
              disabled="true"
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={productData._id}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product price
            </label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              name="productPrice"
              value={productData.productPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Product Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="productDescription"
              name="productDescription"
              value={productData.productDescription}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disponibilte" className="form-label">
              Product disponibilité
            </label>

            <select
              className="form-select"
              id="disponibilte"
              name="disponibilte"
              value={productData.disponibilte}
              onChange={handleInputChange}
            >
              <option value="true">Disponible</option>
              <option value="false">Non disponible</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Product category
            </label>

            <select
              className="form-select"
              id="category"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
            >
              <option value="pc-portable">pc-portable</option>
              <option value="smartphone">smartphone</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
