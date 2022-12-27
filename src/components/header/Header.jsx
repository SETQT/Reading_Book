import React from 'react'
import { Component } from 'react'
import style from "../../style/header.css"
// import "../../style/styleGlobal.js/index.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { jwt, logout } from '../../service/authHeader';




const LogoutAccount = () => {
    logout()
    window.location.href = "/login"
}

const profile = () => {
    // logout()
    let jwts = jwt()
    if (jwts == "{}") window.location.href = "/login"
    else window.location.href = "/user"
}
function header() {
    return (
        <>
            <div >

                {/* <div className='navbar__header'> dwd</div> */}



                <nav className="navbar navbar-expand-lg navbar-dark p-3 ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <a className="nav-link mx-2 active" aria-current="page" onClick={profile}>Profile</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link mx-2" href="#">About Us</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        My Acount
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                        <li><a className="dropdown-item" href="/login">Login</a></li>
                                        <li><a className="dropdown-item" onClick={LogoutAccount}>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className={"background"}>
                    <img src="https://storyshares.blob.core.windows.net/media/staff_pick/biddyweb.jpg" alt="book" />
                </div>


            </div>
        </>
    )
}

export default header
