import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { storage } from "../../firebase-config"; //import firebase config
import { ref, deleteObject } from "firebase/storage";

export default function ManageProducts() {
  const [productsData, setproductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedcategory, setSelectedCategory] = useState("");
  const getProductsData = () => {
    let url = "http://localhost:5000/products?category=";

    axios
      .get(url)
      .then((res) => {
        setproductsData(res.data.data);
      })
      .catch((error) => console.error(error));
  };
  const searchFunc = (e) => {
    e.preventDefault();
    /*   console.log("searchQuery", searchQuery);
    console.log(selectedcategory) */
    if (selectedcategory && selectedcategory != "") {
      axios
        .get(
          `http://localhost:5000/products?productName=${searchQuery}&category=` +
            selectedcategory
        )
        .then((res) => {
          setproductsData(res.data.data);
        })
        .catch((error) => console.error(error));
    } else {
      axios
        .get(`http://localhost:5000/products?productName=${searchQuery}`)
        .then((res) => {
          setproductsData(res.data.data);
        })
        .catch((error) => console.error(error));
    }
  };

  const deleteProduct = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    const desertRef = ref(storage, e.target.name);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        console.log("File deleted successfully");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    axios
      .delete(`http://localhost:5000/products/${e.target.value}`)
      .then((res) => {
        console.log("deleteProduct", res.data);
        alert(res.data.message);
        getProductsData();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProductsData();
  }, []);
  console.log("Products Data", productsData);
  return (
    <div className="ManageProducts">
      <h3>Manage Products</h3>

      <div class="d-flex justify-content-center">
        <input
          className="form-control w-75 m-1"
          type="text"
          placeholder="Search products by name"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="form-select w-auto  m-1"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="pc-portable">pc-portable</option>
          <option value="smartphone">smartphone</option>
        </select>
        <button className="btn  btn-success m-1" onClick={searchFunc}>
          Search
        </button>
      </div>

      <table class="table container">
        <thead>
          <tr>
            {/*   <th scope="col">ID</th> */}
            <th scope="col">Product Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">product Price </th>
            <th scope="col">Category</th>
            <th scope="col">product Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product._id}>
              {/* <th scope="row">{product._id}</th> */}
              <td>
                <img src={product.productImage} width={"70px"} />
              </td>
              <td className="text-dark ">{product.productName}</td>
              <td className="text-dark">{product.productPrice} DT</td>
              <td className="text-dark">{product.category}</td>
              <td className="text-dark">
                {product.productDescription.split(0, 5)} ...
              </td>
              <td>
                <button
                  className="btn btn-danger m-1"
                  value={product._id}
                  name={product.imageLocation}
                  onClick={deleteProduct}
                >
                  Delete
                </button>
                <Link to={`/admin/edit/${product._id}`}>
                  <button className="btn btn-warning m-1">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
