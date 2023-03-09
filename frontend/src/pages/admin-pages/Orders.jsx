import React from "react";
import TableOrder from "../../components/admin-components/table/TableOrder";
import TransactionInfo from "../../components/admin-components/transaction/TransactionInfo";
import Profile from "../../components/admin-components/Adminprofile";
// import '../../styles/admin-css/Orders.css'
// import '../../styles/admin-css/admin.css'
import styled from "styled-components";

const Orders = () => {
  const SectionAdmin = styled.section`
    background-color: #fff;
    height: 100%;
    width : 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;


  `;

  return (
    <SectionAdmin>
      <Profile />
      <TableOrder />
      <TransactionInfo />
    </SectionAdmin>
  );
};

export default Orders;
