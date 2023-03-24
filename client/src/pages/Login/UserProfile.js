import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useDispatch } from "react-redux";

export default function UserProfile() {
  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
  const checkuser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        console.log("User is not signed out");
      }
    });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        dispatch({ type: "LOGOUT" });

        console.log("User is signed out");
        window.location.replace("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1>UserProfile</h1>
      <p>in this page you can find all the information of user </p>
      <button onClick={logout}>log out</button> <br></br>
      <br></br> <button onClick={checkuser}>check</button>
    </div>
  );
}
