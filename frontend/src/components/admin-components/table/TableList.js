import React, { useState } from "react";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import DetailFilmButton from "./DetailFilm";
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

import "./style.css";

import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

function TableList() {
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  // end
  return (
    <WrapTable>
      <ContentTable>
        <WrapInput>
          <input type="text" placeholder="Search" style={input} />
          <Button>
            <AiOutlineSearch />
          </Button>
        </WrapInput>
        <div className="ms-auto">
          {/* filter */}
          <button
            className="btn bg-primary text-white "
            onClick={handleShowFilter}
          >
            Filter <i class="bi bi-sort-down"></i>
          </button>
          {/* modal */}
          <ModalFilter show={showFilter} close={handleCloseFilter} />
          {/* end */}

          {/* Add Movie */}
          <button
            className="btn AddMovie text-white bg-success ms-3"
            onClick={handleShowAdd}
          >
            Add Movie
          </button>
          {/* Modal */}

          <AddMovie show={showAdd} close={handleCloseAdd} />

          {/* End */}
        </div>
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
              <DetailFilmButton />
            </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>202</Td>
            <Td>IRONMAN 1</Td>
            <Td>
              <PosterFilm src="./images/poster/ironman 1.jpg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 6 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilmButton />
            </Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>203</Td>
            <Td>IRONMAN 2 </Td>
            <Td>
              <PosterFilm src="./images/poster/ironman 2.jpg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 10 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilmButton />
            </Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>204</Td>
            <Td>BLACK PANTHER </Td>
            <Td>
              <PosterFilm src="./images/poster/Black-panther.jpg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 3 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilmButton />
            </Td>
          </Tr>
        </TableOrder>
      </WrapTabelOrder>
    </WrapTable>
  );
}

export default TableList;
