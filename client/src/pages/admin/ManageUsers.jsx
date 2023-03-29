import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ManageUsers() {
  const [UsersData, setUsersData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const getUsersData = () => {
    let url = "http://localhost:5000/users";

    axios
      .get(url)
      .then((res) => {
        setUsersData(res.data.data);
      })
      .catch((error) => console.error(error));
  };
  const searchFunc = (e) => {};

  const deleteUser = async (e) => {};

  useEffect(() => {
    getUsersData();
  }, []);
  /*  console.log(UsersData); */
  return (
    <div className="ManageProducts">
      <h1>Manage Users</h1>

      <div class="d-flex justify-content-center">
        <input
          className="form-control w-75 m-1"
          type="text"
          placeholder="Search products by name"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="btn  btn-success m-1" onClick={searchFunc}>
          Search
        </button>
      </div>

      <table class="table container">
        <thead>
          <tr>
            <th scope="col">user name</th>
            <th scope="col">Type of user</th>

            <th scope="col">email</th>

            <th scope="col">createdAt</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {UsersData.map((User) => (
            <tr key={User._id}>
              <td className="text-dark ">{User.userName}</td>
              <td className="text-dark ">{User.typeOfUser}</td>

              <td className="text-dark ">{User.email}</td>

              <td className="text-dark">{User.createdAt}</td>
              <td>
                <button
                  className="btn btn-danger m-1"
                  value={User._id}
                  onClick={deleteUser}
                  disabled={User.typeOfUser == "admin" ? "true" : null}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
