import React from 'react'
import { Component } from 'react'
import "./style1.css"
// import "../../style/styleGlobal.js/index.js"
import { SideBarData } from './SideBarData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
function UserPage() {
    return (
        <>
            <div className="App">
                <div className="Sidebar">
                    <ul className='SidebarList'>
                    {SideBarData.map((val, key)=>{
                        return <li  
                                id={window.location.pathname == val.link ? "active" : ""}
                                className='row'
                                key={key} onClick={()=>{window.location.pathname = val.link}} >
                                <div id="icon">{val.icon}</div>{""}
                                <div id="title">
                                    {val.title}
                                </div>
                            </li>
                        
                    })}
                    </ul>
                    
                </div>
              
            </div>
        </>
    )
}

export default UserPage
