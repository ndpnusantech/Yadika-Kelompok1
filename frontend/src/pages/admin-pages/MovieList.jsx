import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/admin-components/sidebar/Sidebar";

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
        <h1>Movie list</h1>
      </Sidebar>
    </SectionAdmin>
  );
};

export default Dashboard;
