import React, { useEffect, useState } from "react";
import axios from "axios";
import DemoPie from "../../components/DemoPie";
export default function HomePanel() {
  const [productsData, setproductsData] = useState([]);
  const [usersData, setusersData] = useState([]);
  const [ordersData, setordersData] = useState([]);

  const getProductsData = async () => {
    let url = "http://localhost:5000/products";

    axios
      .get(url)
      .then((res) => {
        setproductsData(res.data.data);
      })
      .catch((error) => console.error(error));
    /* get users data */
    url = "http://localhost:5000/users";
    axios
      .get(url)
      .then((res) => {
        setusersData(res.data.data);
      })
      .catch((error) => console.error(error));
    /* get orders data */
    url = "http://localhost:5000/orders";
    axios
      .get(url)
      .then((res) => {
        setordersData(res.data.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const orders = [
    {
      type: "accepted",
      value: 50,
    },
    {
      type: "attend",
      value: 20,
    },
    {
      type: "denied",
      value: 5,
    },
  ];

  // Assuming your array of products is called 'productsData'
  const categories = productsData.reduce((acc, product) => {
    // Check if the current category already exists in the accumulator
    const categoryIndex = acc.findIndex((c) => c.type === product.category);

    // If the category exists, increment the value of the corresponding object
    if (categoryIndex !== -1) {
      acc[categoryIndex].value++;
    }
    // Otherwise, add a new object to the accumulator
    else {
      acc.push({
        type: product.category,
        value: 1,
      });
    }

    return acc;
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="homepanel">
        <div className="panel">
          <span>Products</span>
          <div>
            <i class="fas fa-laptop"></i>
            <p>{productsData.length}</p>
          </div>
        </div>

        <div className="panel">
          <span>Users</span>
          <div>
            <i class="fas fa-user-friends"></i>
            <p>{usersData.length}</p>
          </div>
        </div>
        <div className="panel">
          <span>Orders</span>
          <div>
            <i class="fas fa-truck-loading"></i>
            <p>45</p>
          </div>
        </div>
      </div>
      <div className="demopiegraph">
        <div>
          <p>products cetegories : </p>
          <DemoPie data={categories} />
        </div>
        <div>
          <p>orders : </p>
          <DemoPie data={orders} />
        </div>
      </div>
    </div>
  );
}
