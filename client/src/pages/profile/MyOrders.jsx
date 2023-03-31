import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const loggedInClientID = useSelector((state) => state.userId);

  const getOrders = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/orders?clientID=${loggedInClientID}`
      );
      setOrders(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <h1>My Orders</h1>

      {orders.length === 0 && (
        <p style={{ textAlign: "center" }}>No orders yet</p>
      )}

      {orders.map((order) => (
        <MDBCard key={order._id} className="mb-3">
          <MDBCardBody>
            <MDBCardTitle>Order Number: {order._id}</MDBCardTitle>
            <MDBCardText>
              Delivery Address: {order.deliveryAddress.street},{" "}
              {order.deliveryAddress.city}, {order.deliveryAddress.postalCode}
            </MDBCardText>

            <MDBCardText>Order Status: {order.orderEtat}</MDBCardText>
            <MDBCardText>
              Order Date: {new Date(order.createdAt).toLocaleDateString()}
              <button type="button" class="btn btn-primary ms-5">
                order details
              </button>
            </MDBCardText>
            <MDBCardText className="text-center mt-4">
              <hr />
              Total Price: {order.totalPrice} DT
            </MDBCardText>
            <MDBCardText>
              <hr></hr>
              <button type="button" class="btn btn-warning ms-5">
                Mark as Pending
              </button>
              <button type="button" class="btn btn-success ms-5">
                Accept
              </button>
              <button type="button" class="btn btn-danger ms-5">
                Decline
              </button>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}
