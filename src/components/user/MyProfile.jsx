import React, { useState, useEffect } from 'react'
import SidebarAdmin from '../sidebar/SidebarAdmin'
import UserPage from '../userPage/UserPage';
import moment from 'moment';
import UserService from '../../service/UserService';

import "../sidebar/sidebar.css"
import HeaderUser from '../../components/header/HeaderUser'

import { Outlet } from 'react-router-dom'
import axios from 'axios';

const url = 'https://ebook4u-server.onrender.com/user/me'
// const axios = require('axios');



// const axiosInstance = axios.create({
//   baseURL: "https://ebook4u-server.onrender.com/user/me",
//   headers: {
//     'content-type': 'application/json',
//     'accept': 'application/json',
//     'referer': 'survtech-axios-tutorialv1.0',
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzgyMTZjZmJjMmI3YTNhZjE2YWVkNzkiLCJpYXQiOjE2NzE3NzE1MDMsImV4cCI6MTY3MTg1NzkwM30.tlEjAYVSsKLnYwQY_99QbISoL4DpgfvUB7t40-XL8Fs'
//   },
//   credentials: true
// })

// const data = {
//     Avatar: "https://static01.nyt.com/images/2022/11/22/multimedia/22world-cup-argentina-saudi-arabia-gamer-1-b19a/22world-cup-argentina-saudi-arabia-gamer-1-b19a-superJumbo.jpg?quality=75&auto=webp",
//     Username: "messi1987",
//     Name: "Lionel Messi",
//     Email: "sati@gmail.com",
//     TypeOfUser: "Reader",
//     DateOfBirth: "24/06/1987"
// }

function Content(props) {
    const [listAccount, setList] = useState([]);
   
    
    useEffect(() => {


      UserService.getAllAccount().
          then(response => {
              console.log(response.data.data);
              setList(response.data.data[0])

          }).catch(err => {
              console.log(err);
          })


  }, [])

    return (
        <>
            <div>
            <div className="cardInfo">
                                <div className="mainContentUser"  >
                                  <p className="text-sm mb-0 text-capitalize font-weight-bold text-center " style={{marginLeft:"10px",fontSize:"30px",fontWeight:"bold"}}>
                                    My Profile
                                  </p>
                                  <div className="contentUserMain">
                                    <div>
                                    <img src={listAccount.avatar} alt="" height="250" width="200" style={{marginTop: "5px", marginLeft:"50px",marginRight:"100px"}}/>
                                    </div>
                                    <div>
                                    <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark" >
                                      Username: {listAccount.fullname} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Address: {listAccount.address} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}} >
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Email: {listAccount.email} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Type of user: {listAccount.role} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0"  style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Date of birth: {moment.utc(listAccount.dateOfBirth).format('DD/MM/YYYY')
} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Phone: {listAccount.phone} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Status: {listAccount.status} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                    </div>
                                  </div>
                    

                        </div>
                    </div>
            </div>
        </>
    )
}

function MyProfile() {
    return (
        
                <div className="contentUser">
                     <Content  /> 
                    
                </div>

    )
}

export default MyProfile
