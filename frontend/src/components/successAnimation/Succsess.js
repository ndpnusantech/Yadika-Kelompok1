import React from "react";

import "./succsess.css";

const Succsess = (props) => {
  return (
    <div class="loading ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="124"
        height="124"
        viewBox="0 0 124 124"
      >
        <circle
          class="circle-loading"
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(271, 76%, 74%)"
          stroke-width="6px"
        ></circle>
        <circle
          class="circle"
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(271, 76%, 53%)"
          stroke-width="6px"
          stroke-linecap="round"
        ></circle>
        <polyline
          class="check"
          points="73.56 48.63 57.88 72.69 49.38 62"
          fill="none"
          stroke="hsl(271, 76%, 53%)"
          stroke-width="6px"
          stroke-linecap="round"
        ></polyline>
      </svg>
      <h4 className="text-white mt-4">Succsess To {props.succsess}</h4>
    </div>
  );
};

export default Succsess;
