import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link, redirect } from "react-router-dom";
import axios from "axios";

function Register() {
  const [EureurMsg, SetEureurMsg] = useState("");
  const [formData, setFormData] = useState({
    __id: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userFirebase: {},
    typeOfUser: "client",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      SetEureurMsg("Password and Confirm Password must be the same");
      return;
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;

          setFormData({
            ...formData,
            __id: user.uid,
            userFirebase: user.auth,
          });

          axios
            .post("http://localhost:5000/users", formData)
            .then((res) => {
              alert(res.data.message);
              signOut(auth)
                .then(() => {
                  window.location.replace("/login");
                })
                .catch((error) => {});
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    <div className="container m-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>userName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={formData.name}
                    required="true"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required="true"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required="true"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    required="true"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3 text-danger">
                  <label>{EureurMsg}</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                >
                  Register
                </button>
              </form>
              <div className="mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={logout}>log out</button> <br></br>
      <br></br> <button onClick={checkuser}>check</button>
    </div>
  );
}

export default Register;
