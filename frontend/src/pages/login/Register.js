import React from "react";
import './style/register.css'

const Register = () =>{
    return(
        <div class='card'>
            <div class='page-1'>
                <img src='./images/cinema.png' class='cinema'></img>
                <h1>Boking your ticket to <br/>
                     watch your favorite  <br/>
                            movie
                </h1>
            </div>
            <div class='page-2'>
                <input type='usename' placeholder='Username' class='username' /> <br />
                <input type='email' placeholder='Email' class='email' /> <br />
                <input type='password' placeholder='Password' class='password' /> <br/>
                <input type='password' placeholder='Password' class='password' /> <br/>
                <button type='submit'>Register</button>
                <p>Already have an account ? <a href=''>Login Now</a></p>
            </div>
        </div>
    )
}

export default Register