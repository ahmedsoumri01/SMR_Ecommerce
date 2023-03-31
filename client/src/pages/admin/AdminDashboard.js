import React, { useState } from "react";
import "../../styles/Admin.css";
import HomePanel from "./HomePanel";
import AddProduct from "./AddProduct";
import ManageProducts from "./ManageProducts";
import SpecialPromo from "./SpecialPromo";
import ManageUsers from "./ManageUsers";
import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const [showMenu, setshowMenu] = useState("");
  const [interfaceSelected, setInterfaceSelected] = useState(0);
  const userType = useSelector((state) => state.userType);

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
    if (e.target.id === "SpecialPromo") {
      setInterfaceSelected(3);
    }
    if (e.target.id === "ManageUsers") {
      setInterfaceSelected(4);
    }
  };
  const showSection = () => {
    switch (interfaceSelected) {
      case 1:
        return <AddProduct />;
      case 2:
        return <ManageProducts />;
      case 3:
        return <SpecialPromo />;
      case 4:
        return <ManageUsers />;
      default:
        return <HomePanel />;
    }
  };

  const showMenuHandler = () => {
    setshowMenu(!showMenu);
  };
  return userType === "admin" ? (
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
        <ul style={{ width: showMenu ? "200px" : "50px" }}>
          <li id="AdminDashboard" onClick={section}>
            <i class="fas fa-tachometer-alt" id="AdminDashboard"></i>
            {showMenu ? " admin dashboard" : ""}
          </li>
          <li id="AddNewProduct" onClick={section}>
            <i className="far fa-plus-square" id="AddNewProduct"></i>
            {showMenu ? " Add New Product" : ""}
          </li>
          <li id="ManageProducts" onClick={section}>
            <i className="fas fa-edit" id="ManageProducts"></i>
            {showMenu ? "  manage products" : ""}
          </li>

          <li id="SpecialPromo" onClick={section}>
            <i className="fas fa-hand-holding-usd" id="SpecialPromo"></i>
            {showMenu ? " Special Promo" : ""}
          </li>
          <li id="ManageUsers" onClick={section}>
            <i className="fas fa-user-friends" id="ManageUsers"></i>
            {showMenu ? " Manage Users" : ""}
          </li>
        </ul>
      </div>
      <div className="adminSectionDetails">{showSection()}</div>
    </div>
  ) : (
    window.location.replace("/userprofile")
  );
}
