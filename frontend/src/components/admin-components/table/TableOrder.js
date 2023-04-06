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
  Tr,
} from "./TableElements.jsx";

function TabelOrder(props) {
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
