import React from "react";
import TransactionBtn from "../buttons/TransactionBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import { GoSearch } from "react-icons/go";
import {
  WrapTable,
  ContentTable,
  WrapInput,
  input,
  Button,
  WrapTabelOrder,
  TableOrder,
  Th,
  Td,
  Tr
} from "./TableElements.jsx";
import styled from "styled-components";
function TabelOrder(props) {
  const WrapTable = styled.div`
    max-width: max-content;
    padding: 0 10px;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    background-color: #f8f6ee;
    margin: auto;
    font-size: 13px;
  `;
  const ContentTable = styled.div`
    padding: 10px;
    border-radius: 13px 13px 0 0;
    background-color: #414141;
    border: 1px solid black;
    margin-top: -20px;
    width: 102.4%;
    margin-left: -10px;
  `;
  const WrapInput = styled.div`
    height: max-content;
    width: max-content;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
  `;

  const input = {
    type: "text",
    size: "1em",
    padding: "0px 10px",
    width: "200px",
    border: "0px",
    outline: "none",
    borderRadius: "5px",
  };

  const Button = styled.button`
    border: none;
    background-color: #ededed;
    padding: 5px 8px;
    border-radius: 0 5px 5px 0;

    :hover {
      background-color: rgb(195, 195, 195);
    }
  `;

  const WrapTabelOrder = styled.div`
    height: 15.7rem;
    overflow: scroll;
    padding: 0 10px;
    max-width: 57rem;
    margin-top: 10px;
    /* background-color: #4b4b4b; */
    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      background: #c8c8c8;
      border-radius: 20px;
    }
  `;

  const TableOrder = styled.table`
    text-align: center;
    border-radius: 13px 13px 0 0;
    border-spacing: 0;
    overflow: hidden;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
  `;
  const Th = styled.th`
    background-color: #c44d4d;
    color: white;
    padding: 11px;
    height: 20px;
    padding: 5px 14px;
    width: 150px;
    :nth-child(1) {
      width: 20px;
    }
    :nth-child(2) {
      width: 150px;
    }
    :nth-child(3) {
      width: 150px;
    }
    :nth-child(4) {
      width: 50px;
    }

    :nth-child(5) {
      width: 70px;
    }
    :nth-child(6) {
      width: 120px;
    }

    :nth-child(7) {
      width: 200px;
    }
  `;

  const Td = styled.td`
    border: 1px solid rgb(176, 176, 176);
    padding: 5px 4px;

    :nth-child(3) {
      width: max-content;
    }
  `;
  const Tr = styled.tr`
    background-color: #fcfcfc;
  }
  
  :nth-child(odd) {
    background-color: #c8c8c8;
  }
  
  `;

function TabelOrder() {
  return (
    <WrapTable>
      <ContentTable>
        <WrapInput>
          <input type="text" placeholder="Search" style={input} />
          <Button>
            <GoSearch />
          </Button>
        </WrapInput>
      </ContentTable>
      <WrapTabelOrder>
        <TableOrder>
          <Tr>
            <Th>No</Th>
            <Th>Nama customers</Th>
            <Th>Movie</Th>
            <Th>Jumlah</Th>
            <Th>Tanggal</Th>
            <Th>Total harga</Th>
            <Th>action</Th>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>sandi ramdani</Td>
            <Td>Ant-man and the Wasp : Quantumania </Td>
            <Td>1</Td>
            <Td>Monday, 2/17/2023</Td>
            <Td>45.000</Td>
            <Td>
              <TransactionBtn onClick={props.show} />
              <DeleteBtn />
            </Td>
          </Tr>
        </TableOrder>
      </WrapTabelOrder>
    </WrapTable>
  );
}

export default TabelOrder;
