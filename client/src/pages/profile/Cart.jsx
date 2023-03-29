import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };
  const getCartProducts = async () => {
    try {
      const requests = cart.map((productId) =>
        axios.get(`http://localhost:5000/products/${productId}`)
      );
      const responses = await Promise.all(requests);
      const products = responses.map((res) => res.data.data);
      setCartProducts(products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCartProducts();
  }, []);

  const removeProduct = (productId) => {
    const updatedCart = cart.filter((id) => id !== productId);
    dispatch({ type: "UPDATE_CART", cart: updatedCart });
    setCartProducts(
      cartProducts.filter((product) => product._id !== productId)
    );
  };

  const getTotal = () => {
    let total = 0;
    for (const product of cartProducts) {
      total += product.productPrice;
    }
    return total.toFixed(2);
  };

  return (
    <div>
      <h2>Cart</h2>

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
          {cartProducts.map((product) => (
            <tr key={product._id}>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img
                    src={product.productImage}
                    width={"50px"}
                    alt={product.productName}
                  />
                  <p>{product.productName}</p>
                </div>
              </td>
              <td>
                <input type={"number"} min={1} max={100} />
              </td>
              <td>{product.productPrice} DT</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <h5>Total: {getTotal()} DT</h5>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <div>
          <button className="btn btn-success ">Proceed to Checkout</button>
          <br></br> <br />
          <button className="btn btn-danger ml-3" onClick={emptyCart}>
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
}
