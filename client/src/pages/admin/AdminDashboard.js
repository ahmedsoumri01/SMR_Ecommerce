import React, { useState } from "react";
import "../../styles/Admin.css";
import HomePanel from "./HomePanel";
import AddProduct from "./AddProduct";
import ManageProducts from "./ManageProducts";
import SpecialPromo from "./SpecialPromo";
import ManageUsers from "./ManageUsers";
import ManageOrders from "./ManageOrders";
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
    if (e.target.id === "ManageOrders") {
      setInterfaceSelected(5);
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
      case 5:
        return <ManageOrders />;
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
            {showMenu ? (
              "admin dashboard "
            ) : (
              <p className="hidenIcon">
                <div>admin dashboard</div>
              </p>
            )}
          </li>
          <li id="AddNewProduct" onClick={section}>
            <i className="far fa-plus-square" id="AddNewProduct"></i>
            {showMenu ? (
              "Add New Product "
            ) : (
              <p className="hidenIcon">
                <div> Add New Product</div>
              </p>
            )}
          </li>
          <li id="ManageProducts" onClick={section}>
            <i className="fas fa-edit" id="ManageProducts"></i>
            {showMenu ? (
              " manage products "
            ) : (
              <p className="hidenIcon">
                <div> manage products</div>
              </p>
            )}
          </li>

          <li id="SpecialPromo" onClick={section}>
            <i className="fas fa-hand-holding-usd" id="SpecialPromo"></i>
            {showMenu ? (
              " Special Promo"
            ) : (
              <p className="hidenIcon">
                <div> Special Promo</div>
              </p>
            )}
          </li>
          <li id="ManageUsers" onClick={section}>
            <i className="fas fa-user-friends" id="ManageUsers"></i>

            {showMenu ? (
              "  Manage Users "
            ) : (
              <p className="hidenIcon">
                <div>Manage Users</div>
              </p>
            )}
          </li>
          <li id="ManageOrders" onClick={section}>
            <i class="fas fa-truck-loading" id="ManageOrders"></i>
            {showMenu ? (
              " Manage Orders "
            ) : (
              <p className="hidenIcon">
                <div> Manage Orders</div>
              </p>
            )}
          </li>
        </ul>
      </div>
      <div className="adminSectionDetails">{showSection()}</div>
    </div>
  ) : (
    window.location.replace("/userprofile")
  );
}
