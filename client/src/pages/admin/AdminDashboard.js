import React, { useEffect, useState } from "react";
import "../../styles/Admin.css";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import ManageProducts from "./ManageProducts";
export default function AdminDashboard() {
  const [showMenu, setshowMenu] = useState("");

  const showMenuHandler = () => {
    setshowMenu(!showMenu);
  };
  return (
    <div className="adminPanel">
      <div className="adminSection">
        <button
          type="button"
          className="btn btn-primary"
          onClick={showMenuHandler}
        >
          {showMenu ? (
            <i class="fas fa-long-arrow-alt-left"></i>
          ) : (
            <i class="fas fa-long-arrow-alt-right"></i>
          )}
        </button>
        <ul>
          <li>
            <i className="far fa-plus-square"></i>
            {showMenu ? " Add New Product" : ""}
          </li>
          <li>
            <i className="fas fa-edit"></i> {showMenu ? "manage products" : ""}
          </li>
          {/*  <li>
            <i className="fas fa-shopping-cart"></i>{" "}
            {showMenu ? "manage orders" : ""}
          </li>
          <li>
            <i className="fas fa-user-alt"></i> {showMenu ? "manage users" : ""}
          </li> */}
        </ul>
      </div>
      <div className="adminSectionDetails">
        <h1>Admin Dashboard</h1>
        {/*  <AddProduct /> */}

        <ManageProducts />
      </div>
    </div>
  );
}
