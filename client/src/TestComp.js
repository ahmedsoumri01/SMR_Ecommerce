import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TestComp() {
  // Access state variables from the Redux store
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userType = useSelector((state) => state.userType);

  // Dispatch actions to the Redux store
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOGIN", userType: "Admin" });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userType}!</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Log In as Client</button>
      )}
    </div>
  );
}
