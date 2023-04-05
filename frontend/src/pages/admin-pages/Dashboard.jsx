import React from "react";
import styled from "styled-components";
import BarChart from "../../components/admin-components/chart/BarChart";
import PieChart from "../../components/admin-components/chart/PieChart";
import Sidebar from "../../components/admin-components/sidebar/Sidebar";
import AdminProfile from "../../components/admin-components/Adminprofile";

const Dashboard = () => {
  const SectionAdmin = styled.section`
    background-color: #fff;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;
  `;

  return (
    <SectionAdmin>
      <Sidebar>
        <AdminProfile />
        <PieChart />
      </Sidebar>
    </SectionAdmin>
  );
};

export default Dashboard;
