import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/admin/AdminDashboard";
import Register from "./pages/Register/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import ShowProdducts from "./pages/ShowProducts";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/admin/EditProduct";
import UserProfile from "./pages/profile/UserProfile";
import Cart from "./pages/profile/Cart";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./PrivateRoute/AuthContext";
import ProtectedRoute from "./PrivateRoute/ProtectedRoute";

import TestComp from "./TestComp";
import "./styles/styles.css";
function App() {
  return (
    <>
      <Header />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/products" element={<ShowProdducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/admin/edit/:id"
            element={
              <ProtectedRoute>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userprofile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
      <TestComp />
      <CopyRight />
    </>
  );
}

export default App;
