import user from "./user.png";
import React, { useState } from "react";
import ContentUser from "../content/ContentUser";
import DescribeContentUser from "../content/DescribeContentUser";
import { Link } from "react-router-dom";
import notification from "./notification.png";
import chat from "./chat.png";
import { Component } from "react";
import style from "./style1.module.css";
import "./style1.module.css";
// import "../../style/styleGlobal.js/index.js"
import { SideBarData } from "./SideBarData";
import { SideBarDataOption } from "./SideBarDataOption";
import { jwt, logout } from "../../service/authHeader";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const LogoutAccount = () => {
  logout();
  window.location.href = "http://localhost:3000/login";
};

function UserPage() {
  const [book, setBook] = useState(10);

  return (
    <>
      <div className={style.App}>
        <div className={style.Sidebar}>
          <div>
            <img
              src={notification}
              alt=""
              height={20}
              width={20}
              className={style.notification}
            />
            <img
              src={chat}
              alt=""
              height={20}
              width={20}
              className={style.chat}
            />
          </div>
          <img
            src={user}
            alt=""
            height="80"
            width="80"
            className={style.userimg}
          />
          <ul className={style.SidebarList}>
            {SideBarData.map((val, key) => {
              return (
                <Link to={val.link}>
                  <li className={style.row} key={`keyTop${key}`}>
                    <div id={style.icon}>{val.icon}</div>
                    {""}
                    <div id={style.title}>{val.title}</div>
                  </li>
                </Link>
              );
            })}
            <hr
              style={{
                width: "100%",
                textAlign: "left",
                marginLeft: 0,
                borderWidth: "2px",
              }}
            />
            {SideBarDataOption.map((val, key) => {
              return (
                <li
                  className={style.row}
                  key={`keyOption${key}`}
                  onClick={LogoutAccount}
                >
                  <div id={style.icon}>{val.icon}</div>
                  {""}
                  <div id={style.title}>{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserPage;
