import React from "react";
import styled from "styled-components";
import LineChart from "../../components/admin-components/chart/LineChart";
import Sidebar from "../../components/admin-components/sidebar/Sidebar";
import AdminProfile from "../../components/admin-components/Adminprofile";
import InfoTicket from "../../components/admin-components/Card/InfoTicket";

const Dashboard = () => {
  const SectionAdmin = styled.section`
    background-color: #fff;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;
  `;

  return (
    <SectionAdmin>
      <Sidebar>
        <AdminProfile />
        <div style={{height : "100%" , width : '85%' , margin : "auto"}}>
        <div className="d-flex justify-content-center " >
          <InfoTicket bg="43B262" title="Jumlah Ticket Terjual" jumlah="2000" />
          <InfoTicket bg="FD6464" title="Jumlah Ticket Tersisa" jumlah="2000" />
          <InfoTicket bg="886AFD" title="Jumlah Ticket" jumlah="4000" />
        </div>
        <LineChart />
        </div>
      </Sidebar>
    </SectionAdmin>
  );
};

export default Dashboard;
