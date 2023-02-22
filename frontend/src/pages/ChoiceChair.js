import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Chair from "../components/ChoiceChair/Chair";
import { dataChair } from "../data/dataChair";

const ChoiceChair = () => {
  const [bgBtn, setBgBtn] = useState("#C44D4D");
  const [valueBtn, setValueBtn] = useState(false);

  const changeValue = () => {
    if (bgBtn === "#C44D4D") {
      setBgBtn("#4FA332");
      setValueBtn(true);
    }
  };
  return (
    <Container>
      <h5 className="bg-white py-2 my-5 rounded-bottom text-center">Screen</h5>
      <div className="d-flex justify-content-between text-white">
        <div>
          <p>
            <img src="./images/icon/red.png" alt="" /> unfilled
          </p>
          <p>
            <img src="./images/icon/grey.png" alt="" /> filled
          </p>
          <p>
            <img src="./images/icon/green.png" alt="" /> choice
          </p>
        </div>
        <select
          name=""
          id=""
          className="py-2 px-3 bg-dark text-white"
          style={{ height: "50px" }}
        >
          <option value="">14:00 - 16:00</option>
          <option value="">14:00 - 16:00</option>
          <option value="">14:00 - 16:00</option>
          <option value="">14:00 - 16:00</option>
        </select>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {dataChair.map((data) => (
          <Chair
            numberChair={data.chair}
            onClick={() => changeValue()}
            value={valueBtn}
          />
        ))}
      </div>

      {valueBtn === true && (
        <button className="text-white bg-success fw-bold w-100 border-0 py-2 mt-5 rounded-2">
          RP.35.0000
        </button>
      )}
    </Container>
  );
};

export default ChoiceChair;
