import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUsers, FaChartBar, FaClipboard, FaDropbox } from "react-icons/fa";
import Widget from "./summary-components/Widget";
import axios from "axios";
import Chart from "./summary-components/Chart";
import Transactions from "./summary-components/Transactions";
import AllTimeData from "./summary-components/AllTimeData";

const Summary = () => {
  const [report, setReport] = useState({});

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

  const data = [
    {
      icon: <FaUsers />,
      digits: report.totalUsers,
      isMoney: false,
      title: "Users",
      color: "rgb(102, 108, 255)",
      bgColor: "rgba(102, 108, 255, 0.12)",
    },
    {
      icon: <FaClipboard />,
      digits: report.totalOrders,
      isMoney: false,
      title: "Orders",
      color: "rgb(38, 198, 149)",
      bgColor: "rgba(38, 198, 149, 0.12)",
    },
    {
      icon: <FaDropbox />,
      digits: report.totalProducts,
      isMoney: false,
      title: "Products",
      color: "rgb(164, 50, 72)",
      bgColor: "rgba(164, 50, 72, 0.12)",
    },
    {
      icon: <FaChartBar />,
      digits: report.totalSales,
      isMoney: true,
      title: "Earnings",
      color: "rgb(258, 181, 40)",
      bgColor: "rgba(258, 181, 40, 0.12)",
    },
  ];
  return (
    <StyledSummary>
      <MainStats>
        <Overview>
          <Title>
            <h2>Overview</h2>
            <p>Performance of our online supermarket</p>
          </Title>

          <WidgetWrapper>
            {data?.map((data, index) => (
              <Widget key={index} data={data} />
            ))}
          </WidgetWrapper>
        </Overview>
        <Chart />
      </MainStats>
      <SideStats>
        <Transactions />
        <AllTimeData />
      </SideStats>
    </StyledSummary>
  );
};

export default Summary;

const StyledSummary = styled.div`
  width: 100%;
  display: flex;
`;

const MainStats = styled.div`
  flex: 2;
  width: 100%;
`;

const Title = styled.div`
  p {
    font-size: 14px;
    color: rgba(234, 234, 255, 0.68);
  }
`;

const Overview = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  width: 100%;
  padding: 1.5rem;
  height: 170px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WidgetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SideStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;
`;
