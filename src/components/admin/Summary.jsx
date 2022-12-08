import { useState, useEffects } from "react";
import styled from "styled-components";
import { FaUsers, FaChartBar, FaClipboard } from "react-icons/fa";
import Widget from "./summary-components/Widget";
import axios from "axios";
import { setHeaders, url } from "../../slices/api";
import Chart from "./summary-components/Chart";
import Transactions from "./summary-components/Transactions";
import AllTimeData from "./summary-components/AllTimeData";

const Summary = () => {
  // const [users,setUsers] = useState([]);
  // const [usersPrec,setUsersPrec] = useState(0);
  // const [orders,setOrders] = useState([]);
  // const [ordersPrec,setOrdersPrec] = useState(0);
  // const [income,setIncome] = useState([]);
  // const [incomePrec,setIncomePrec] = useState(0);

  // function compare(a,b){
  //   if(a._id<b._id){
  //     return 1;
  //   }
  //   if(a._id>b._id){
  //     return -1;
  //   }
  //   return 0;
  // }

  // useEffects(()=>{
  //   async function fetchData(){
  //     try{
  //       const res =await axios.get(`${url}/users/stats`,setHeaders());
  //       res.data.sort(compare)
  //       console.log("stats",res.data);
  //       setUsers(res.data);
  //       setUsersPrec((res.data[0].total = res.data[1].total)/res.data[1].total * 100);
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetchData()
  // },[]);

  // useEffects(()=>{
  //   async function fetchData(){
  //     try{
  //       const res =await axios.get(`${url}/users/stats`,setHeaders());
  //       res.data.sort(compare)
  //       console.log("stats",res.data);
  //       setOders(res.data);
  //       setOdersPrec((res.data[0].total = res.data[1].total)/res.data[1].total * 100);
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetchData()
  // },[]);
  const data = [
    {
      icon: <FaUsers />,
      digits: 50,
      isMoney: false,
      title: "Users",
      color: "rgb(102, 108, 255)",
      bgColor: "rgba(102, 108, 255, 0.12)",
    },
    {
      icon: <FaClipboard />,
      digits: 70,
      isMoney: false,
      title: "Orders",
      color: "rgb(38, 198, 149)",
      bgColor: "rgba(38, 198, 149, 0.12)",
    },
    {
      icon: <FaChartBar />,
      digits: 500,
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
            <p>How our online supermarket is performing</p>
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
