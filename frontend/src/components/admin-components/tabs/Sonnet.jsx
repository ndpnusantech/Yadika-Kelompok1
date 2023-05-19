import React from "react";
import styled from "styled-components";
import  { HoursData } from '../../../data/HoursData'

const Sonnet = () => {
  const Sonnet = styled.div`
    font-size: 12px;
    font-weight: normal;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 20px;
    width : 750px ;
    min-width : 400px;

    @media only screen and (max-width: 990px) {
      width : 460px ;
    }
   
    @media only screen and (max-width: 574px) {
      width : 100% ;
    }
    
    
    .hour-btn{
        border : 0px;
        background-color : white ;
        box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
        border-radius : 20px;
        padding : 2px 15px;
        margin : 5px 10px;
    }
  `;


  const addHours = (e) => {
    e.preventDefault();
  }
  
  
  return <Sonnet>
    {HoursData.map((data) => (
        <button className="hour-btn" value={'10:00'}  onClick={addHours}>{data.Hour}</button>    

    ))}

  </Sonnet>;
};

export default Sonnet;
