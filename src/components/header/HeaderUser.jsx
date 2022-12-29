import React from 'react'
import { Component } from 'react'
import style from "../../style/header.css"
// import "../../style/styleGlobal.js/index.js"

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import bell from "../../assets/imgs/bell-solid.svg"
import chat from "../../assets/imgs/chat.svg"
import book from "../../assets/imgs/book.png"
import user from "../../assets/imgs/user2.png"
function headerUser() {
    return (
        <>
            <div >

                {/* <div className='navbar__header'> dwd</div> */}



                <nav className="navbar navbar-expand-lg navbar-dark p-3 ">
                    <div className="container-fluid">
                        <img className='book' src={book} alt="" />
                        {/* <i className="fa-solid fa-bell"></i> */}
                        <a className="navbar-brand" href="/">EBook4U</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item" style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "20px" }}>
                                    Donate
                                    {/* <a className="nav-link mx-2 active" aria-current="page" href="/user">My Book</a> */}
                                </li>
                                <li className="nav-item" style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "20px" }}>
                                    My Library
                                </li>
                                <li className="nav-item" style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "20px" }}>
                                    Write

                                </li>
                                <li className="nav-item" style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "20px" }}>
                                    Company

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <div className={"background"}>
                    <img src="https://storyshares.blob.core.windows.net/media/staff_pick/biddyweb.jpg" alt="book" />
                </div> */}


            </div>
        </>
    )
}

export default headerUser
