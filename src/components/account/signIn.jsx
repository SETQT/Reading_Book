import React from "react";
import { Component } from "react";
import style from "../../style/header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
import headerUser from "../header/HeaderUser";
import bell from "../../assets/imgs/bell-solid.svg";
import chat from "../../assets/imgs/chat.svg";
import book from "../../assets/imgs/book.png";
import user from "../../assets/imgs/user2.png";
import "./account.css";
import { borderRadius } from "@mui/system";
import { useCallback, useState, useEffect } from "react";

import { useHref, useNavigate } from "react-router-dom";

function SignIn() {
  const [userName, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  async function login() {
    let item = { username: userName, password: password };
    fetch("https://ebook4u-server.onrender.com/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("user", data.accessToken);
          if (data?.admin) navigate("/admin");
          else navigate("/home");
        }
      })
      .catch((e) => {});
  }

  return (
    <>
      <div className="bg_image">
        <nav className="navbar navbar-expand-lg navbar-dark p-3 ">
          <div className="container-fluid">
            <img className="book" src={book} alt="" />
            <a className="navbar-brand" href="/home">
              EBoo4U
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto ">
                <li
                  className="nav-item"
                  style={{
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Donate
                </li>
                <li
                  className="nav-item"
                  style={{
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  My Library
                </li>
                <li
                  className="nav-item"
                  style={{
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Write
                </li>
                <li
                  className="nav-item"
                  style={{
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Company
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="signInForm">
          <center>
            <h1>Sign In</h1>
            <div>
              <input
                id="inputLogin"
                placeholder="Username"
                type="text"
                name="name"
                style={{
                  marginTop: "30px",
                  width: "250px",
                  borderRadius: "5%",
                  height: "40px",
                }}
                value={userName}
                onChange={onUsernameChange}
              />
            </div>
            <div>
              <input
                id="inputLogin"
                type="password"
                style={{
                  marginTop: "30px",
                  width: "250px",
                  borderRadius: "5%",
                  height: "40px",
                }}
                placeholder="Password"
                name="name"
                value={password}
                onChange={onPasswordChange}
              />
            </div>

            <div
              style={{
                marginTop: "10px",
              }}
            >
              <a
                style={{
                  marginTop: "30px",
                }}
                href="/login/forgetPass"
              >
                Forget password
              </a>
            </div>
            <button
              type="button"
              className="btn btn-success"
              style={{ marginTop: "20px" }}
              onClick={login}
            >
              SIGN
            </button>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <a className="link" href="/login/signup">
                New User? Sign Up
              </a>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default SignIn;
