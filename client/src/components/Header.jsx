import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
export default function Header() {
  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
  // Access state variables from the Redux store
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const cart = useSelector((state) => state.cart);

  const userType = useSelector((state) => state.userType);
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        dispatch({ type: "LOGOUT" });

        console.log("User is signed out");
        window.location.replace("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  /*  console.log(cart.length); */
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarLeftAlignExample"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  informatique
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href={"/products?category=pc-portable"}
                    >
                      pc portable
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  telephonie
                </Link>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href={"/products?category=smartphone"}
                    >
                      smartphone
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="22"
                    alt="Portrait of a Woman"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {isLoggedIn ? (
                    <li>
                      <Link className="dropdown-item" to={"/userprofile"}>
                        profile
                      </Link>
                    </li>
                  ) : null}
                  {!isLoggedIn ? (
                    <li>
                      <Link className="dropdown-item" to={"/login"}>
                        login
                      </Link>
                    </li>
                  ) : null}
                  {!isLoggedIn ? (
                    <li>
                      <Link className="dropdown-item" to={"/register"}>
                        register
                      </Link>
                    </li>
                  ) : null}
                  {isLoggedIn && userType == "admin" ? (
                    <li>
                      <Link className="dropdown-item" to={"/admin"}>
                        Admin Panel
                      </Link>
                    </li>
                  ) : null}

                  {isLoggedIn ? (
                    <li>
                      <Link className="dropdown-item" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <span className="badge badge-pill bg-danger">
                    {cart.length}
                  </span>
                  <span>
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
