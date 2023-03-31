import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Login() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log("Email: ", Email);
    console.log("Password: ", Password); */
    // handle form submission
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        console.log("Success");
        const user = userCredential.user;
        if (user != null) {
          axios
            .get(`http://localhost:5000/users/${Email}`)
            .then((res) => {
              /* console.log(res.data.data); */
              const user = res.data.data;
              /*  console.log(user.email);
              console.log(user.typeOfUser); */

              if (user.typeOfUser === "admin") {
                dispatch({
                  type: "LOGIN",
                  userType: "admin",
                  userId: user._id,
                });

                window.location.replace("/admin");
              } else {
                dispatch({
                  type: "LOGIN",
                  userType: "user",
                  userId: user._id,
                });
                window.location.replace("/");
              }
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
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
      </div>
    </>
  );
}
