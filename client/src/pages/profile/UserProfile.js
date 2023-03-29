import React, { useState } from "react";

import "../../styles/profile.css";
import Orders from "./Orders";
import Cart from "./Cart";
import AccountSettings from "./AccountSettings";
import AccountDetail from "./AccountDetail";
export default function UserProfile() {
  const [interfaceSelected, setInterfaceSelected] = useState(0);
  const section = (e) => {
    if (e.target.id === "profile") {
      setInterfaceSelected(0);
    }
    if (e.target.id === "Orders") {
      setInterfaceSelected(1);
    }
    if (e.target.id === "Cart") {
      setInterfaceSelected(2);
    }

    if (e.target.id === "AccountSettings") {
      setInterfaceSelected(3);
    }
  };
  const showSection = () => {
    switch (interfaceSelected) {
      case 1:
        return <Orders />;
      case 2:
        return <Cart />;
      case 3:
        return <AccountSettings />;

      default:
        return <AccountDetail />;
    }
  };

  return (
    <div className="userprofile">
      <div id="userprofileNav">
        <ul>
          <li id="profile" onClick={section}>
            <i class="far fa-user-circle"></i> profile
          </li>
          <li id="Orders" onClick={section}>
            <i class="fas fa-truck-loading"></i>My Orders
          </li>
          <li id="Cart" onClick={section}>
            <i class="fas fa-shopping-cart"></i>My Cart
          </li>
          <li id="AccountSettings" onClick={section}>
            <i class="fas fa-cog"></i>Account Settings
          </li>
        </ul>
      </div>
      <div>{showSection()}</div>
    </div>
  );
}
