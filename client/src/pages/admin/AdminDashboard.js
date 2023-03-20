import React, { useEffect, useState } from "react";
import "../../styles/Admin.css";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import ManageProducts from "./ManageProducts";
export default function AdminDashboard() {
  const [showMenu, setshowMenu] = useState("");
  const [interfaceSelected, setInterfaceSelected] = useState(0);
  const section = (e) => {
    if (e.target.id === "AdminDashboard") {
      setInterfaceSelected(0);
    }
    if (e.target.id === "AddNewProduct") {
      setInterfaceSelected(1);
    }
    if (e.target.id === "ManageProducts") {
      setInterfaceSelected(2);
    }
  };
  const showSection = () => {
    switch (interfaceSelected) {
      case 1:
        return <AddProduct />;
      case 2:
        return <ManageProducts />;
      default:
        return <h1>hello im an admin </h1>;
    }
  };

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
          <li id="AdminDashboard" onClick={section}>
            <i class="fas fa-tachometer-alt"></i>
            {showMenu ? " admin dashboard" : ""}
          </li>
          <li id="AddNewProduct" onClick={section}>
            <i className="far fa-plus-square"></i>
            {showMenu ? " Add New Product" : ""}
          </li>
          <li id="ManageProducts" onClick={section}>
            <i className="fas fa-edit"></i> {showMenu ? "manage products" : ""}
          </li>
        </ul>
      </div>
      <div className="adminSectionDetails">{showSection()}</div>
    </div>
  );
}
