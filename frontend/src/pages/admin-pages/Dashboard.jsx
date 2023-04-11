import React from "react";
import styled from "styled-components";
import LineChart from "../../components/admin-components/chart/LineChart";
import Sidebar from "../../components/admin-components/sidebar/Sidebar";
import AdminProfile from "../../components/admin-components/Adminprofile";
import InfoTicket from "../../components/admin-components/Card/InfoTicket";

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
        <div className="d-flex justify-content-center">
          <InfoTicket
            bgPattern="jumlah-terjual"
            title="Jumlah Ticket Terjual"
            jumlah="2000"
            totalPrice="Total : Rp 1.200.000"
            loader="money-animate"
          />
          <InfoTicket
            bgPattern="jumlah-tersisa"
            title="Jumlah Ticket Tersisa"
            jumlah="2000"
          />
          <InfoTicket
            bgPattern="jumlah-ticket"
            title="Jumlah Ticket"
            jumlah="4000"
          />
        </div>
        <LineChart />
      </Sidebar>
    </SectionAdmin>
  );
};

export default Dashboard;
