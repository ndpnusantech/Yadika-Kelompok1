import React from "react";

const Ticket = () => {
    return(
        <div style={{backgroundColor:"grey", width:"600px", height:"240px", marginLeft:"200px",}}>
            <div style={{display:"flex"}}>
         <div>
            <img src="./images/poster/ant-man.jpeg" style={{width:"130px",marginLeft:"15px",marginTop:"20px", }} />
         </div>
            <div style={{marginLeft:"20px",}}>
                <h3>CINEMA TICKET</h3>
                <p>Ant-Man and The Wasp: <br/>
                    Quantumania <br/>
                </p>
                <p>
                   Date: mm/dd/yy <br />
                   Time : 00:00 <br />
                   Row : A Seat: 3
                </p>    
            </div>
            <div> 
                <img src="./images/logo/cgv.png" alt="" style={{ width: "150px", marginTop:"100px" }} />
            </div>
            </div>
            <h5 style={{marginLeft:"20px"}}>CODE PEMBAYARAN</h5>

        </div>
       
    )
}

export default Ticket