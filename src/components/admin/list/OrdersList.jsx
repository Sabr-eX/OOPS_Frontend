import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
// import moment from "moment";

export default function OrdersList() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const getOrders = async () => {
      await axios
        .get("https://gada-electronics.up.railway.app/orders/all")
        .then((res) => {
          setOrders(res?.data);
        })
        .then((res) => console.log(res?.data));
    };
    getOrders();
  }, []);

  return (
    <div className="d-flex flex-column">
      <h1 className="text-white m-3">Orders</h1>
      <table className="table table-striped table-bordered table-hover table-xl m-3">
        <thead>
          <tr style={{ height: "5px", fontSize: "20px", fontStyle: "BOLD" }}>
            <th scope="col">Order ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>

            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantiy</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => {
            return (
              <tr style={{ height: "5px", fontSize: "17px" }}>
                <td>{order.id}</td>
                <td>{order.user.name}</td>
                <td>{order.products.id}</td>
                <td>{order.products.name}</td>
                <ImageContainer>
                  <img src={order.products.image} alt="" />
                </ImageContainer>
                <td>₹{order.totalPrice}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.status === "DELIVERED" ? (
                    <Delivered>DELIVERED</Delivered>
                  ) : order.status === "SHIPPED" ? (
                    <Shipped>SHIPPED</Shipped>
                  ) : order.status === "PENDING" ? (
                    <Pending>SHIPPED</Pending>
                  ) : (
                    <Cancelled>CANCELLED</Cancelled>
                  )}
                </td>
                {/* <td>
                <button type="button" class="btn btn-success btn-xsm me-2">
                  Add
                </button>
              </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Pending = styled.div`
  color: rgb(253, 181, 40);
  background-color: rgb(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;
const Shipped = styled.div`
  color: rgb(38, 198, 249);
  background-color: rgb(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;
const Delivered = styled.div`
  color: rgb(181, 253, 40);
  background-color: rgb(181, 253, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;
const Cancelled = styled.div`
  color: rgb(164, 50, 72);
  background-color: rgb(164, 50, 72, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;
