import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";


const Profile = () => {
    return(

        <div>
            <NavigationBar />
            
            <p>Nama:Dry YUdho</p>
            <p>Email:jsdhuwie</p>
            <button>Logout</button>
            <button>Edit</button>
                <hr />
            <h1>Riwayat Transaksi</h1>
        </div>
    )
}

export default Profile