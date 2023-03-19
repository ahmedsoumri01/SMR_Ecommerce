import React from "react";
import "../../styles/Admin.css";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
export default function adminDashboard() {
  return (
    <div className="adminPanel">
      <div className="adminSection">
        <ul>
          <li>
            <Link to={"/"}>
              <i className="far fa-plus-square"></i>Add New Product
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <i className="fas fa-edit"></i>manage products
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <i className="fas fa-shopping-cart"></i>manage orders
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <i className="fas fa-user-alt"></i>manage users
            </Link>
          </li>
        </ul>
      </div>
      <div className="adminSectionDetails">
        <h1>Admin Dashboard</h1>
        <AddProduct />
      </div>
    </div>
  );
}
