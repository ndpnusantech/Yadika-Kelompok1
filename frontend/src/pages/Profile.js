import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";
import Ticket from "../components/Ticket";

const Profile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  return (
    <div>
      <NavigationBar />
      <div className="container d-flex py-5">
        <div className="d-flex flex-column me-3">
          <img
            src="./images/image-profil.png"
            alt=""
            style={{ width: "300px" }}
          />
          <button className="btn bg-success text-white w-50 mx-auto mt-5">
            Edit
          </button>
        </div>
        <div className="text-white ms-5 mt-5">
          <h5>Nama: {username}</h5>
          <h5>Email: {email}</h5>
          <button className="btn bg-danger text-white mt-4">Log Out</button>
        </div>
      </div>
      <hr className="text-white" />
      <h1 className="text-white" style={{textAlign:"center"}}>Riwayat Transaksi</h1>

      <div style={{backgroundColor:"white", width:"936px", height:"350px", margin:"0 auto",borderRadius:"5px", display:"flex"}}>
        <div>
          <div style={{marginLeft:"20px"}}>
          <img src="./images/logo/cgv.png" alt="" style={{ width: "100px", marginTop:"10px" }} />
           <h5>Nama : Sandi Ramdani</h5>
           <h5>Email : sandiRamdani@gmail.com</h5>
           <h5>Date : Selasa 2/17/2023</h5>
           <h5>Time : 14.00 WIB</h5>
           <h5>Studio : 1</h5>
           <h5>Seat : A</h5>
           <h5>Row : 3</h5> 
           <h5>Code Pembayaran</h5>
           <br />
          </div>
         </div>
         
         <div style={{backgroundColor:"grey", width:"500px", height:"240px", marginTop:"50px", marginLeft:"20px"}}>
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
                <img src="./images/logo/cgv.png" alt="" style={{ width: "100px", marginTop:"100px" }} />
              </div>
           </div>
           <h5 style={{marginLeft:"20px"}}>CODE PEMBAYARAN</h5>
         </div>
      </div>
      <br></br>
      
    </div>
  );
};

export default Profile;
