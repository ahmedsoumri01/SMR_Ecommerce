import React from "react";

export default function Login() {
  return (
    <>
      <div className="login container my-5">
        <h1 className="text-center">Loginn</h1>
        <input
          type="text"
          className="form-control m-4"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control m-4"
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary m-3">Login</button>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger m-3">Connect with Google</button>
        </div>
      </div>
    </>
  );
}
