import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [sales, setSales] = useState([]);

  //     function compare(a,b){
  //   if(a._id<b._id){
  //     return 1;
  //   }
  //   if(a._id>b._id){
  //     return -1;
  //   }
  //   return 0;
  // }

  useEffect(() => {
    async function fetchSales() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://gada-electronics.up.railway.app/orders/all`
        );

        const newData = res.data.map((item) => {
          var cost = [0, 0, 0, 0, 0, 0, 0];
          const d = new Date(item.orderDate);
          let day = d.getDay();
          cost[day] += item.totalPrice;
          const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

          return {
            day: DAYS[day],
            amount: cost[day],
          };
        });
        console.log(newData);
        setSales(newData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    fetchSales();
  }, []);

  // const data = [
  //     {
  //       day: 'Mon',
  //       amount: 4000,
  //     },
  //     {
  //       day: 'Tue',
  //       amount: 3000,
  //     },
  //   ];

  return (
    <>
      {loading ? (
        <Loader>Loading Chart...</Loader>
      ) : (
        <StyledChart>
          <h3>Sales in the last 7 days (INR ₹)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={sales}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </StyledChart>
      )}
    </>
  );
};

export default Chart;

const StyledChart = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid rgba(48, 51, 78, 0.2);
  border-radius: 5px;
  h3 {
    margin-bottom: 1rem;
  }
`;

const Loader = styled.p`
  margin-top: 2rem;
`;
