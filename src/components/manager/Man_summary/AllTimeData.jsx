import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AllTimeData = () => {
  const { items } = useSelector((state) => state.products);
  const [report, setReport] = useState([]);

  useEffect(() => {
    async function fetchReport() {
      try {
        const res = await axios.get(
          `https://gada-electronics.up.railway.app/admin/reports`
        );
        setReport(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchReport();
  }, []);

  console.log(items);

  return (
    <Main>
      <h3>All Time</h3>
      <Info>
        <Title>Users</Title>
        <Data>{report.totalUsers}</Data>
      </Info>
      <Info>
        <Title>Products</Title>
        <Data>{report.totalProducts}</Data>
      </Info>
      <Info>
        <Title>Orders</Title>
        <Data>{report.totalOrders}</Data>
      </Info>
      <Info>
        <Title>Earnings</Title>
        <Data>₹{report.totalSales}</Data>
      </Info>
    </Main>
  );
};

export default AllTimeData;

const Main = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 2555, 0.87);
  margin-top: 1.5rem;
  border-radius: 5px;
  padding: 1rem;
  font-size: 14px;
`;

const Info = styled.div`
display: flex;
margin-top: 1rem;
padding: 0.3rem;
border-radius: 3px;
background: rgba(38, 198, 249, 0.12);
&: nth-child:(even){
    background: rgba(102, 108, 255, 0.12);
}
`;

const Title = styled.div`
  flex: 1;
`;

const Data = styled.div`
  flex: 1;
  font-weight: 700;
`;
