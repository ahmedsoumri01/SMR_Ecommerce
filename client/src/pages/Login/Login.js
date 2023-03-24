import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", Email);
    console.log("Password: ", Password);
    // handle form submission
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        alert("Success");
        const user = userCredential.user;
        console.log(user);
        if (user.email === "ahmedsoumri01@gmail.com") {
          dispatch({ type: "LOGIN", userType: "admin" });
          window.location.replace("/userprofile");
        } else {
          dispatch({ type: "LOGIN", userType: "client" });
          window.location.replace("/userprofile");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
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
        console.log("User is signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => SetEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  >
                    Login
                  </button>
                </form>
                <div className="mt-3">
                  don't have an account?
                  <Link to="/register">create new account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={logout}>log out</button> <br></br>
        <br></br> <button onClick={checkuser}>check</button>
      </div>
    </>
  );
}
