import React from 'react'
import user from './user.jfif';
import notification from './notification.png'
import chat from './chat.png'
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
                    <div className="above-user">
                        <img src={notification} alt="" height={20} width={20} className="notification"/>
                        <img src={chat} alt="" height={20} width={20} className="chat"/>

                    </div>
                    <img src={user} alt="" height="80" width="80" className='user-img'/>
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
