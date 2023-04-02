import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState("");
  const getOrders = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/orders`);
      setOrders(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const filterOrders = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/orders?orderStatus=${orderStatusFilter}`
      );
      setOrders(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateOrderStatus = async (orderId, status) => {
    try {
      /* console.log(orderId, status); */
      const res = await axios.put(`http://localhost:5000/orders/${orderId}`, {
        orderEtat: status,
      });
      const updatedOrder = res.data;
      const updatedOrders = orders.map((order) =>
        order._id === updatedOrder._id ? updatedOrder : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <h1 className="text-center"> Orders</h1>

      <div className="justify-content-end  align-items-center">
        <label htmlFor="orderStatusFilter" className="form-label">
          Order Status:
        </label>
        <select
          className="form-select"
          id="orderStatusFilter"
          value={orderStatusFilter}
          onChange={(e) => setOrderStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="accepted">Accepted</option>
          <option value="declined">Declined</option>
          <option value="attend">Pending</option>
        </select>
        <button className="btn btn-primary m-3" onClick={filterOrders}>
          filter
        </button>
        <hr></hr>
      </div>

      {orders.length === 0 && (
        <p style={{ textAlign: "center" }}>No orders yet</p>
      )}

      {orders.map((order) => (
        <div key={order._id}>
          <MDBCard className="mb-3">
            <MDBCardBody>
              <MDBCardTitle>Order Number: {order._id}</MDBCardTitle>
              <MDBCardText key={order.clientInformation._id}>
                {/*  {console.log(order.clientInformation._id)} */}
                client information:
                <div className="ms-5">
                  <p>first name : {order.clientInformation.firstName}</p>
                  <p>last name : {order.clientInformation.lastName}</p>
                  <p>phone number : {order.clientInformation.phoneNumber}</p>
                </div>
              </MDBCardText>
              <MDBCardText>
                Delivery Address:
                <div className="ms-5">
                  <p> street : {order.deliveryAddress.street}</p>
                  <p> city : {order.deliveryAddress.city}</p>
                  <p> postalCode : {order.deliveryAddress.postalCode}</p>
                </div>
              </MDBCardText>

              <MDBCardText>
                Order Status:
                {order.orderEtat === "accepted" && (
                  <span className="text-primary fw-bold">
                    {order.orderEtat}
                  </span>
                )}
                {order.orderEtat === "attend" && (
                  <span className="text-warning fw-bold">
                    {order.orderEtat}
                  </span>
                )}
                {order.orderEtat === "declined" && (
                  <span className="text-danger fw-bold">{order.orderEtat}</span>
                )}
              </MDBCardText>
              <MDBCardText>
                Order Date: {new Date(order.createdAt).toLocaleDateString()}
                <button
                  type="button"
                  class="btn btn-primary ms-5"
                  data-mdb-toggle="modal"
                  data-mdb-target={`#exampleModal${order._id}`}
                >
                  order details
                </button>
              </MDBCardText>
              <MDBCardText className="text-center mt-4">
                <hr />
                Total Price: {order.totalPrice} DT
              </MDBCardText>
              <MDBCardText>
                <hr></hr>
                <button
                  type="button"
                  class="btn btn-warning ms-5"
                  onClick={() => updateOrderStatus(order._id, "attend")}
                >
                  Mark as Pending
                </button>
                <button
                  type="button"
                  class="btn btn-success ms-5"
                  onClick={() => updateOrderStatus(order._id, "accepted")}
                >
                  Accept
                </button>
                <button
                  type="button"
                  class="btn btn-danger ms-5"
                  onClick={() => updateOrderStatus(order._id, "declined")}
                >
                  Decline
                </button>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          {/*   <!-- Modal --> */}
          <div
            class="modal fade"
            id={`exampleModal${order._id}`}
            tabindex="-1"
            aria-labelledby={`exampleModalLabel${order._id}`}
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id={`exampleModalLabel${order._id}`}>
                    order id : {order._id}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.orderDetails.map((orderDetail) => (
                        /*  console.log(orderDetail.productName), */
                        <tr key={orderDetail._id}>
                          <td>{orderDetail._id}</td>
                          <td>{orderDetail.quantity}</td>
                          <td>{orderDetail.productPrice} dt</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
