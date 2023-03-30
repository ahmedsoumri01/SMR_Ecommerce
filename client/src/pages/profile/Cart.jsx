import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Cart() {
  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
    alert("cart is empty now ");
  };

  const removeProduct = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", productId: product._id });
  };

  const getTotal = () => {
    let total = 0;
    for (const product of cart) {
      const price =
        product.remise > 0
          ? product.productPrice - product.remise
          : product.productPrice;
      total += price;
    }
    return total.toFixed(2);
  };
  console.log(cart);
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center", height: "40vh", margin: "40px 0" }}>
          the cart is empty
        </p>
      ) : (
        <div>
          <table className="table container">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <img
                        src={product.productImage}
                        width={"50px"}
                        alt={product.productName}
                      />
                      <p>
                        {product.productName.length >= 40
                          ? product.productName.slice(0, 40) + "..."
                          : product.productName}
                      </p>
                    </div>
                  </td>
                  <td>
                    <input
                      type={"number"}
                      min={1}
                      max={100}
                      value={product.quantity}
                    />
                  </td>
                  <td>
                    {product.remise > 0 ? (
                      <s>{product.productPrice - product.remise} DT</s>
                    ) : (
                      <p>{product.productPrice} DT</p>
                    )}
                    {product.remise ? (
                      <p>{product.productPrice - product.remise} DT </p>
                    ) : null}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeProduct(product)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-end m-3">
            <h5>Total: {getTotal()} DT</h5>
          </div>
          <div className="d-flex justify-content-end m-3">
            <div>
              <button className="btn btn-success ">Proceed to Checkout</button>
              <br></br> <br />
              <button className="btn btn-danger m-3" onClick={emptyCart}>
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
