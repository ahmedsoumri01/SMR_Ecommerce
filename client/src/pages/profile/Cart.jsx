import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Cart() {
  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const clientID = useSelector((state) => state.userId);

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [showcheckout, setShowcheckout] = useState(false);
  //infoemation of checkout
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
    alert("cart is empty now ");
  };

  const removeProduct = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", productId: product._id });
  };
  const updateQuantity = (product, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      productId: product._id,
      quantity: quantity,
    });
  };
  const getTotal = () => {
    let total = 0;
    for (const product of cart) {
      const price =
        product.remise > 0
          ? (product.productPrice - product.remise) * product.quantity
          : product.productPrice * product.quantity;
      total += price;
    }
    return total.toFixed(2);
  };
  const checkOut = () => {
    if (isLoggedIn == false) {
      alert("You must be logged in");
      return;
    } else if (isLoggedIn == true) {
      alert("ordered successfully");
      setShowcheckout(true);
    }
  };
  const confirmOrder = async () => {
    const deliveryAddress = {
      street: street,
      city: city,
      postalCode: postalCode,
    };
    const clientInformation = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };
    const orderDetails = cart;
    const totalPrice = getTotal();
    const newOrder = {
      clientID: clientID,
      clientInformation,
      deliveryAddress: deliveryAddress,
      orderDetails: orderDetails,
      totalPrice: totalPrice,
      orderEtat: "attend",
    };
    axios
      .post("http://localhost:5000/orders", newOrder)
      .then((res) => {
        console.log(res.data);
        alert("ordered successfully");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setStreet("");
        setCity("");
        setPostalCode("");
        emptyCart();
        setShowcheckout(false);
      })
      .catch((error) => console.error(error));
  };
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
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          updateQuantity(product, product.quantity - 1)
                        }
                        disabled={product.quantity === 1 ? true : false}
                      >
                        -
                      </button>
                      <span
                        className="mx-2"
                        style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                      >
                        {product.quantity}
                      </span>
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          updateQuantity(product, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
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
              <button className="btn btn-success" onClick={checkOut}>
                Proceed to Checkout
              </button>
              <br></br> <br />
              <button className="btn btn-danger m-3" onClick={emptyCart}>
                Empty Cart
              </button>
            </div>
          </div>
          {showcheckout && (
            <div>
              <div className="d-flex justify-content-center">
                <form>
                  <p>Your information</p>
                  <div className="d-flex justify-content-center">
                    <div className="form-group m-2">
                      <input
                        placeholder="First name"
                        className="form-control "
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                    </div>
                    <div className="form-group m-2 ">
                      <input
                        placeholder="Last name"
                        className="form-control  "
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                    </div>
                  </div>
                  <div className="form-group  mt-4">
                    <input
                      placeholder="Phone number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="form-control"
                      value={phoneNumber}
                    />
                  </div>
                  <hr />
                  <div className="form-group  mt-4">
                    <input
                      placeholder="Street"
                      className="form-control"
                      onChange={(e) => setStreet(e.target.value)}
                      value={street}
                    />
                  </div>
                  <div className="form-group  mt-4 ">
                    <input
                      placeholder="City"
                      className="form-control"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    />
                  </div>
                  <div className="form-group  mt-4 mb-4">
                    <input
                      placeholder="Postal code"
                      className="form-control"
                      onChange={(e) => setPostalCode(e.target.value)}
                      value={postalCode}
                    />
                  </div>
                </form>
              </div>
              <div className="d-flex justify-content-center mb-5">
                <button className="btn btn-danger me-2 ">cancel</button>
                <button className="btn btn-primary ms-2" onClick={confirmOrder}>
                  {" "}
                  confirm
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
