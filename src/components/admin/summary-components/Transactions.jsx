import styled from "styled-components";
import { useEffect, useEffects, useState } from "react";
import { setHeaders, url } from "../../../slices/api";
import axios from "axios";
import { FaMonument } from "react-icons/fa";
import moment from "moment";

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(orders);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://gada-electronics.up.railway.app/orders/all`
        );

        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <StyledTransactions>
      {isLoading ? (
        <p>Transactions loading...</p>
      ) : (
        <>
          <h3>Latest Transactions</h3>
          {orders?.map(
            (orders, index) =>
              index < 5 &&
              (console.log("hi"),
              (
                <Transaction key={index}>
                  <p>{orders.user.name}</p>
                  <p>₹{orders.totalPrice.toLocaleString()}</p>
                  <p>{orders.products.name}</p>

                  {/* <p>{moment(orders.createdAt).fromNow()} </p> */}
                </Transaction>
              ))
          )}
        </>
      )}
    </StyledTransactions>
  );
};

export default Transactions;

const StyledTransactions = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  padding: 1rem;
  border-radius: 5px;
`;

const Transaction = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  background: rgba(38, 198, 249, 0.12);
  p {
    flex: 1;
  }
  &: nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`;
