import React from 'react'
import { Component } from 'react'
import style from "../../style/header.css"
// import "../../style/styleGlobal.js/index.js"

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
function header() {
    return (
        <>
            <div >




                <nav className="navbar navbar-expand-lg navbar-dark p-3 ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <a className="nav-link mx-2 active" aria-current="page" href="/user">My Book</a>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </nav>



            </div>
        </>
    )
}

export default header
