import React from "react";
import styled from "styled-components";
import {MdOutlineNotificationsActive} from 'react-icons/md';

const Profile = () => {
  const ContainerProfile = styled.div`
    width: 90% ;
    // border: 1px solid black ;
    display: flex ;
    justify-content: flex-end ;
    height: 40px ;
    margin-bottom: 10px ;
    margin: 0px  auto   30px ;
    font-size : 12px;
  };

  text{
    margin-top : 9px;
    color : gray;
  }

  .notification{
    margin-top : 7px;
    font-size : 24px;
    color : #BCBCBC;
    cursor : pointer;
  }

  
  `
  const ProfilePicture = styled.img`
          display: block ;
          border-radius: 100% ;
          width: 30px ;
          height: 30px ;
          margin:  6px 13px ;
          cursor : pointer;

  `


  
  
  
  

  return (
    <ContainerProfile>
      <MdOutlineNotificationsActive className="notification" title="notification" />
      <ProfilePicture src="./images/image-profil.png" title="profile-picture"/>
    </ContainerProfile>
  );
};

export default Profile;
