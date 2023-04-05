import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/admin-components/sidebar/Sidebar";
import TableList from "../../components/admin-components/table/TableList";
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
        <AdminProfile/>
        <TableList />
      </Sidebar>
    </SectionAdmin>
  );
};

export default Dashboard;