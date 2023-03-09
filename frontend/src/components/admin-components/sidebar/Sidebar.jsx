import React, { useState } from 'react';
import {FaTh, FaThList ,FaBars , } from 'react-icons/fa'
import {IoIosNotifications } from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Sidebar.css'

const Sidebar = ({children}) => {
    const [isOpen , setisOpen ] = useState(false)

    const toggle = () => setisOpen(!isOpen)

    const Sidebar = styled.div`
    background-color: #292929;
    color: white;
    height: 100vh;
    width: 270px;
    position: fixed;
    left: 0;
    z-index : 1;
    transition: all 0.5s;
    `
    const TopSection = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 15px;`
    

    const Bars = styled.div`
    display: flex;
    font-size: 23px;
    margin-left: 50px;
    `

    
    
    
    const menuItem=[
        {
             path : "/dashboard",
             name : "Dashboard",
             icon : <FaTh/>
        },
        {
             path : "/movieList",
             name : "movie list",
             icon : <FaThList/>
        },
        {
             path : "/Orders",
             name : "Orders",
             icon : <IoIosNotifications/>
        },
    
    ]
    
    
  return (
    
    <div className='container-sidebar' style={{display : "flex"}}>
        <Sidebar style={{ width: isOpen ? "230px" : "50px" , }}>
            <TopSection>
                <img style={{width: "120px", display: isOpen ? "block" : "none", transition : "all 0.7s" }}  src="../images/logo/logo-cinema.png" alt="" />
                <Bars style={{marginLeft : isOpen ? "50px"  : "0px" , transition : "all 0.1s"}}>
                    <FaBars  onClick={() => toggle()} />
                </Bars>
            </TopSection>
            <hr className='c-white'/>
    
            {
                menuItem.map((item,index) => (
                    <NavLink to={item.path} key={index} className="NavLink" activeclaassName="active" >
                        <div  className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </Sidebar>
        <div style={{width: isOpen ? "300px" : "50px" , transition  : "all 0.5s" }}></div>
     <main style={{width : "100%"}} >{children}</main>
    </div>
  )
}






export default Sidebar

// cara mengatasi salah install atau typo saat install contoh npm i react-incon harusnya pake s