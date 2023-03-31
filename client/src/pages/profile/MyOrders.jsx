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
      <h1 className="text-center">My Orders</h1>

      {orders.length === 0 && (
        <p style={{ textAlign: "center" }}>No orders yet</p>
      )}
      <div className="row m-5">
        {orders.map((order) => (
          <div key={order._id}>
            <MDBCard className="mb-3  shadow-2-strong">
              <MDBCardBody>
                <MDBCardTitle>Order Number: {order._id}</MDBCardTitle>
                <MDBCardText>
                  Delivery Address: {order.deliveryAddress.street},{" "}
                  {order.deliveryAddress.city},{" "}
                  {order.deliveryAddress.postalCode}
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
                    <span className="text-danger fw-bold">
                      {order.orderEtat}
                    </span>
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
                <MDBCardText className="text-center mt-4 fw-bold text-black">
                  <hr />
                  Total Price: {order.totalPrice} DT
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
                    <h5
                      class="modal-title"
                      id={`exampleModalLabel${order._id}`}
                    >
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
    </div>
  );
}
