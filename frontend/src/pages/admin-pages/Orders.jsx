import React from "react";
import TableOrder from "../../components/admin-components/table/TableOrder";
import TransactionInfo from "../../components/admin-components/transaction/TransactionInfo";
import Profile from "../../components/admin-components/Adminprofile";
// import '../../styles/admin-css/Orders.css'
// import '../../styles/admin-css/admin.css'
import styled from "styled-components";
import Sidebar from "../../components/admin-components/sidebar/Sidebar";

const Orders = () => {
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
        <Profile />
        <TableOrder />
        <TransactionInfo />
      </Sidebar>
    </SectionAdmin>
  );
};

export default Orders;
