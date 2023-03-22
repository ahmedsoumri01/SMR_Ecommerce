import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SpecialPromo() {
  const [productsData, setproductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedcategory, setSelectedCategory] = useState("");
  const [remise, SetRemise] = useState("");
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

    if (selectedcategory && selectedcategory !== "") {
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
  const addRemise = async (e) => {
    /*  console.log("addRemise", remise);
    console.log("id", e.target.id); */
    const id = e.target.id;
    try {
      const res = await axios.patch(`http://localhost:5000/products/${id}`, {
        remise: remise,
      });
      alert("remise set successfully");
      SetRemise("");
      getProductsData();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  /*  console.log("Products Data", productsData); */
  return (
    <div>
      <h1>Special Promo</h1>
      <div className="ManageProducts">
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
              <th scope="col">Category</th>
              <th scope="col">product Price </th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => (
              <tr key={product._id}>
                {/* <th scope="row">{product._id}</th> */}
                <td>
                  <img
                    src={product.productImage}
                    alt={product.productImage}
                    width={"70px"}
                  />
                </td>
                <td className="text-dark ">{product.productName}</td>
                <td className="text-dark">{product.category}</td>
                <td className="text-dark">
                  {product.productPrice} DT
                  <div>
                    <p>old remise : {product.remise}</p>
                    <input
                      type="number"
                      placeholder="remise to product"
                      onChange={(e) => SetRemise(e.target.value)}
                    />
                    <button
                      class="btn  btn-info m-3"
                      id={product._id}
                      onClick={addRemise}
                    >
                      validate
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
