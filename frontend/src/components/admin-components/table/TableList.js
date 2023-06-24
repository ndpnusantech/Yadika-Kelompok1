import React, { useEffect, useState } from "react";
import axios from "axios";
import EditBtn from "../buttons/EditBtn";
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
import AddMovie from "../buttons/AddMovie";
import BtnFilter from "../buttons/BtnFilter";

function TableList() {
  // interact with api
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const movie = await axios.get("http://localhost:4000/movies");
      setMovies(movie.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/movies/${id}`);
      getMovie();
    } catch (error) {
      console.log(error);
    }
  };

  // style option
  return (
    <WrapTable>
      <ContentTable>
        <WrapInput>
          <input type="text" placeholder="Search" style={input} />
          <Button>
            <AiOutlineSearch />
          </Button>
        </WrapInput>
        <div className="ms-auto d-flex">
          {/* filter */}
          <BtnFilter />
          {/* end */}

          {/* Add Movie */}
          <AddMovie />
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
            <Th>Status Show</Th>
            <Th>Durasi film</Th>
            <Th>Harga tiket</Th>
            <Th>Stok</Th>
            <Th>action</Th>
            <Th>Detail film</Th>
          </Tr>
          {movies.map((data, index) => (
            <Tr>
              <Td>{index}</Td>
              <Td>{data.uuid}</Td>
              <Td>{data.title}</Td>
              <Td>
                <PosterFilm src={data.poster_url} alt="" />
              </Td>
              <Td>{data.is_show ? "Now Showing" : "Up Coming"}</Td>
              <Td>{data.duration}</Td>
              <Td>{`${data.normal_price}.000`}</Td>
              <Td>{data.stok_ticket}</Td>
              <Td>
                <EditBtn />
                <button
                  className="DeleteBtn"
                  onClick={() => deleteMovie(data.id)}
                >
                  Delete
                </button>
              </Td>
              <Td>
                <DetailFilm href="/detailFilm">detail</DetailFilm>
              </Td>
            </Tr>
          ))}
        </TableOrder>
      </WrapTabelOrder>
    </WrapTable>
  );
}

export default TableList;
