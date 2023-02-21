import React from "react";

const ChoiceChair = () => {
  return (
    <div>
      <h5 className="bg-white py-2">Screen</h5>
      <div className="d-flex justify-content-between">
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
      </div>
    </div>
  );
};

export default ChoiceChair;
