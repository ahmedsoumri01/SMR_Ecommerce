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
import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/products" element={<ShowProdducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
