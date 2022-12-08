import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser, FaStore, FaClipboard, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  function signout() {
    localStorage.removeItem("user-info");
  }
  // if (!auth.isAdmin) return <p>Access denied. Not an Admin!</p>;

  return (
    <StyledDashboard>
      <SideNav>
        <Shopify style={{ height: "75px", fontSize: "39px" }}>Shopify</Shopify>

        <h3 style={{ fontSize: "20px" }}>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/summary"
        >
          <FaTachometerAlt /> Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/products"
        >
          <FaStore /> Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/orders"
        >
          <FaClipboard /> Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/users"
        >
          <FaUser /> Users
        </NavLink>
        <Link to="/">
          <button className="btn btn-warning" onClick={signout}>
            Sign Out
          </button>
        </Link>
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
  );
};

export default Dashboard;

const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const Shopify = styled.div`
  color: rgb(251, 158, 0);
  background-color: rgb(13, 10, 5, 0.8);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 700;

    svg {
      margin-right: 0.5rem;
      font-size: 18px;
    }
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;
