import React from "react";
import { Component } from "react";
import style from "../../style/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import headerUser from "../header/HeaderUser";

import book from "../../assets/imgs/book.png";
import "./account.css";
import { borderRadius } from "@mui/system";

function signup() {
  return (
    <>
      <div class="bg_image">
        <nav className="navbar navbar-expand-lg navbar-dark p-3 ">
          <div className="container-fluid">
            <img className="book" src={book} alt="" />
            {/* <i className="fa-solid fa-bell"></i> */}
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
                  {/* <a className="nav-link mx-2 active" aria-current="page" href="/user">My Book</a> */}
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

        <div className="signUpForm">
          <center>
            <h1>Sign Up</h1>

            <div className="row" style={{ margintop: "30px" }}>
              <div className="col_half">
                <input
                  type="text"
                  style={{
                    width: "200px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                  name="name"
                  placeholder="Email"
                />
              </div>
              <div className="col_half">
                <input
                  type="text"
                  name="name"
                  style={{
                    width: "200px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col_half">
                <input
                  type="text"
                  style={{
                    width: "200px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                  name="name"
                  placeholder="Username"
                />
              </div>
              <div className="col_half">
                <input
                  type="text"
                  name="name"
                  style={{
                    width: "200px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col_half">
                <input
                  type="text"
                  style={{
                    width: "200px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                  name="name"
                  placeholder="Password"
                />
              </div>
              <div className="col_half">
                <input
                  type="text"
                  name="name"
                  style={{
                    width: "200px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col_half">
                <label for="birthday">Birthday:</label>
                <input
                  type="date"
                  style={{
                    width: "130px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                  name="name"
                  placeholder="Day of birth"
                />
              </div>
              <div className="col_half">
                <select
                  name="department"
                  style={{
                    width: "200px",
                    borderRadius: "5%",
                    height: "40px",
                  }}
                >
                  <option value="">Role</option>
                  <option>Reader</option>
                  <option>Translator</option>
                  <option>Admin</option>
                  <option>Author</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-success"
              style={{ marginTop: "30px" }}
            >
              SUBMIT
            </button>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <a href="/login/SignIn">Have an account? Sign In?</a>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default signup;
