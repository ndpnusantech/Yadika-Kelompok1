import React from "react";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import AddMovie from "../buttons/AddMovie";
import { AiOutlineSearch } from "react-icons/ai";
import {
  WrapTable,
  ContentTable,
  input,
  Button,
  WrapInput,
  WrapTabelOrder,
  TableOrder,
  Th,
  Td,
  Tr,
  PosterFilm,
  DetailFilm,
} from "./TableListElements";

function TableList() {
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
