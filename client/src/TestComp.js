import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TestComp() {
  // Access state variables from the Redux store
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userType = useSelector((state) => state.userType);

  // Dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userType}!</p>
        </div>
      ) : null}
    </div>
  );
}
