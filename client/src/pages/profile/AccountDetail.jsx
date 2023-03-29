import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import axios from "axios";
export default function AccountDetail() {
  const [userData, setuserData] = useState([]);

  const userId = useSelector((state) => state.userId);

  const getUserData = () => {
    axios
      .get(`http://localhost:5000/users/${userId}`)
      .then((res) => {
        setuserData(res.data.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="MyDetails">
      <h2>My details</h2>

      <div className="userInformation">
        <h4>Personal information</h4>
        <div>
          <label>user name : </label>
          <input type="text" value={userData.userName} readOnly />
        </div>
        <div>
          <label>user email : </label>
          <input type="text" value={userData.email} readOnly />
        </div>
        <div>
          <label>user type : </label>
          <input type="text" value={userData.typeOfUser} readOnly />
        </div>
      </div>
    </div>
  );
}
