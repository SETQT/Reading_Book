import React, { useState, useEffect } from 'react'
import SidebarAdmin from './SidebarAdmin'
import UserPage from '../userPage/UserPage';

import "./homeUser.css"
import HeaderUser from '../../components/header/HeaderUser'

import { Outlet } from 'react-router-dom'

const data = {
    Avatar: "https://static01.nyt.com/images/2022/11/22/multimedia/22world-cup-argentina-saudi-arabia-gamer-1-b19a/22world-cup-argentina-saudi-arabia-gamer-1-b19a-superJumbo.jpg?quality=75&auto=webp",
    Username: "messi1987",
    Name: "Lionel Messi",
    Email: "sati@gmail.com",
    TypeOfUser: "Reader",
    DateOfBirth: "24/06/1987"
}

function Content(props) {
    const [listAccount, setList] = useState([]);
    
    useEffect(() => {

        setList(props.data)
        console.log(listAccount);

    }, [props.data])

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
                                    <img src={listAccount.Avatar} alt="" height="170" width="120" style={{marginTop: "5px", marginLeft:"10px",marginRight:"10px"}}/>
                                    </div>
                                    <div>
                                    <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark" >
                                      Username: {listAccount.Username} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Name: {listAccount.Name} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}} >
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Email: {listAccount.Email} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" style={{paddingBottom:"15px"}}>
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Type of user: {listAccount.TypeOfUser} 
                                    </span>
                                    <br />
                                    
                                  </h5>
                                  <h5 className="font-weight-bolder mb-0" >
                                    <span className=" text-sm font-weight-bolder .text-dark">
                                      Date of birth: {listAccount.DateOfBirth} 
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

function HomeUser() {
    return (
        <div className='homeUserAll'>
            <HeaderUser />
            <div className='homeUser'>


                <div className='sidebarUser' >

                    < UserPage/>
                </div>
                <div className="contentUser">
                    <Outlet />
                    { window.location.pathname == "/user" ? <Content data={data} /> : null}
                    
                </div>

            </div>
        </div>
    )
}

export default HomeUser