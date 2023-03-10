import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/layouts/NavigationBar";
import { dataChair } from "../data/dataChair";
import { dataDate } from "../data/dataDate";

const ChoiceChair = () => {
  const [selectedChair, setSelectedChair] = useState(null);
  const [valueBtn, setValue] = useState(false);

  const handleClick = (chair) => {
    setSelectedChair(chair);
    setValue(true);
  };

  const styleContent = {
    height: "80vh",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('./images/poster/wide-bg2.png')`,
    marginTop: "-90px",
  };
  const imgStyle = {
    width: "300px",
    height: "390px",
    borderRadius: "10px",
  };

  return (
    <div>
      <NavigationBar />
      <div style={styleContent}></div>
      <div
        className="d-flex container justify-content-between"
        style={{ marginTop: "-300px" }}
      >
        <div>
          <img src="./images/poster/ant-man.jpeg" alt="" style={imgStyle} />
          {valueBtn && (
            <div
              className="card d-flex flex-row bg-transparent text-white px-3 justify-content-between mt-4"
              style={{ borderColor: "grey", height: "50px" }}
            >
              <p>
                <span className="fs-3">3</span>Row
              </p>
              <p>
                <span className="fs-3">2</span>th
              </p>
              <p className="mt-3">Rp.35.000</p>
            </div>
          )}
          <div className="d-flex justify-content-between mt-5">
            <button
              className="btn px-4"
              style={{
                color: "#C88623",
                border: "0.5px solid #C88623",
                borderRadius: "3px",
              }}
            >
              Cancel
            </button>
            <Link to={"/payment"}>
              <button
                className="btn text-white px-5"
                style={{ backgroundColor: "#C88623", borderRadius: "3px" }}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-5 px-5">
          <h1 className="w-50 text-white">ANT-MANT WASP QUANTUMANIA</h1>
          <h2 className="text-white mt-4">AUDI #1</h2>
          <div className="d-flex justify-content-between mt-5">
            {dataDate.map((data) => (
              <div>
                <p className="text-white text-center">{data.day}</p>
                <button className="btn text-white border-white ms-2">
                  {data.date}
                </button>
              </div>
            ))}
          </div>

          <img src="./images/screen.png" alt="" style={{ marginTop: "50px" }} />
          <div className="d-flex flex-wrap justify-content-center mt-5">
            {dataChair.map((data) => (
              <button
                key={data.chair}
                className="btn me-3 mb-5"
                style={{
                  width: "50px",
                  color: "white",
                  backgroundColor:
                    selectedChair === data.chair ? "#F10606" : "#898989",
                }}
                onClick={() => handleClick(data.chair)}
              >
                {data.chair}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceChair;
