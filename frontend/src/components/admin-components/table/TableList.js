import React from "react";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import styled from "styled-components";
import AddMovie from "../buttons/AddMovie";
import { AiOutlineSearch } from "react-icons/ai";

function TableList() {
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
    display: flex;
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
    padding: "3px 10px",
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
    height: 25.9rem;
    overflow: scroll;
    padding: 0 10px;
    max-width: 70rem;
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
      width: 80px;
    }
    :nth-child(3) {
      width: 150px;
    }
    :nth-child(4) {
      width: 150px;
    }

    :nth-child(5) {
      width: 150px;
    }
    :nth-child(6) {
      width: 120px;
    }

    :nth-child(7) {
      width: 100px;
    }
    :nth-child(8) {
      width: 100px;
    }
    :nth-child(9) {
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

  const PosterFilm = styled.img`
    width: 50px;
  `;

  const DetailFilm = styled.a`
    color: grey;

    hover: {
      color: black;
    }
  `;

  return (
    <WrapTable>
      <ContentTable>
        <WrapInput>
          <input type="text" placeholder="Search" style={input} />
          <Button>
            <AiOutlineSearch />
          </Button>
        </WrapInput>
        <AddMovie />
      </ContentTable>
      <WrapTabelOrder>
        <TableOrder>
          <Tr>
            <Th>No</Th>
            <Th>Id film</Th>
            <Th>Nama film</Th>
            <Th>Poster film</Th>
            <Th>Location</Th>
            <Th>Durasi film</Th>
            <Th>Harga tiket</Th>
            <Th>Stok</Th>
            <Th>action</Th>
            <Th>Detail film</Th>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>201</Td>
            <Td>Ant-man and the Wasp : Quantumania </Td>
            <Td>
              <PosterFilm src="./images/poster/ant-man.jpeg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 4 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilm href="/detailFilm">detail</DetailFilm>
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>201</Td>
            <Td>Ant-man and the Wasp : Quantumania </Td>
            <Td>
              <PosterFilm src="./images/poster/ant-man.jpeg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 4 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilm href="/detailFilm">detail</DetailFilm>
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>201</Td>
            <Td>Ant-man and the Wasp : Quantumania </Td>
            <Td>
              <PosterFilm src="./images/poster/ant-man.jpeg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 4 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilm href="/detailFilm">detail</DetailFilm>
            </Td>
          </Tr>
        </TableOrder>
      </WrapTabelOrder>
    </WrapTable>
  );
}

export default TableList;
