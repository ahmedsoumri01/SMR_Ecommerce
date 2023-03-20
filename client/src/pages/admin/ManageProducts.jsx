import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ManageProducts() {
  const [productsData, setproductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const getProductsData = () => {
    let url = "http://localhost:5000/products?category=";

    axios
      .get(url)
      .then((res) => {
        setproductsData(res.data.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getProductsData();
  }, []);
  /* console.log("Products Data", productsData); */
  return (
    <div className="ManageProducts">
      <h3>Manage Products</h3>

      <div>
        <input type="text" placeholder="Search by name" />
        <button>Search</button>
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
              <td>{product.productName}</td>
              <td>{product.productPrice} DT</td>
              <td>{product.category}</td>
              <td>{product.productDescription.split(0, 5)} ...</td>
              <td>
                <button className="btn btn-danger">Delete</button>
                <Link to={`/admin/edit/${product._id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
