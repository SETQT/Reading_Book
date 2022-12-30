// import React from "react";
// import { Component } from "react";
// import style from "../../style/header.css";
// // import "../../style/styleGlobal.js/index.js"

// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.js';
// import { jwt, logout } from "../../service/authHeader";

// import "../../style/header.css";

// const LogoutAccount = () => {
//   logout();
//   window.location.href = "/login";
// };

// const profile = () => {
//   // logout()
//   let jwts = jwt();
//   if (jwts == "{}") window.location.href = "/login";
//   else window.location.href = "/user";
// };
// function header() {
//   return (
//     <>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark p-3 ">
//           <div className="container-fluid">
//             <a
//               className="navbar-brand"
//               href="/"
//               onClick={() => {
//                 localStorage.setItem("searchName", "");
//                 localStorage.setItem("searchCategoryPage", "");
//                 localStorage.setItem("searchCountryPage", "");
//                 localStorage.setItem("currentPage", "1");
//                 localStorage.setItem("currentPageSearch", "1");
//               }}
//             >
//               Home
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavDropdown"
//               aria-controls="navbarNavDropdown"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className=" collapse navbar-collapse" id="navbarNavDropdown">
//               <ul className="navbar-nav ms-auto ">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link mx-2 active"
//                     aria-current="page"
//                     onClick={profile}
//                     style={{ cursor: "pointer" }}
//                   >
//                     Profile
//                   </a>
//                 </li>

//                 <li className="nav-item">
//                   <a className="nav-link mx-2" href="#">
//                     About Us
//                   </a>
//                 </li>
//                 <li class="nav-item dropdown">
//     <div class="sms-button" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         <a class="nav-link dropdown-toggle"  >&nbsp;SMS&nbsp;&nbsp;</a>
//     </div>
//     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//         <a class="dropdown-item" href="#">Delivered Status</a>
//         <a class="dropdown-item" href="#">Log details</a>
//     </div>
// </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className={"background"} style={{ zIndex: "2" }}>
//           <img
//             src="https://storyshares.blob.core.windows.net/media/staff_pick/biddyweb.jpg"
//             alt="book"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default header;


import React from 'react'
import { Component } from 'react'
import style from "../../style/header.css"
// import "../../style/styleGlobal.js/index.js"

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { jwt, logout } from '../../service/authHeader';

import "../../style/header.css"
import { Link } from 'react-router-dom';
import down from "../../assets/imgs/downButton.png"

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

            <div className='headerNew'>
                <div className='headerItemHome'>
                <a
              className="navbar-brand"
              href="/"
              onClick={() => {
                localStorage.setItem("searchName", "");
                localStorage.setItem("searchCategoryPage", "");
                localStorage.setItem("searchCountryPage", "");
                localStorage.setItem("currentPage", "1");
                localStorage.setItem("currentPageSearch", "1");
              }}
            >
              Home
            </a> </div>
                <div className='headerItemProfile'>
                <a
                    className="nav-link mx-2 active"
                    aria-current="page"
                    onClick={profile}
                    style={{ cursor: "pointer" }}
                  >
                     Profile
                  </a></div>
                <div className='headerItemAbout'> AboutUs</div>
                <div className='headerItemAccount'>
                    <div className="dropdown">

                        <div className="dropdown__trigger">
                            Account
                            <img src={down} alt="down" style={{ "marginLeft": "10px" }} />
                        </div>
                        <div className="dropdown__content">
                            <Link to="/login"> Login</Link>
                            <Link onClick={LogoutAccount}> Logout</Link>
                        </div>

                    </div>
                </div>


            </div>
            <div className={"background"} style={{ "zIndex": "2" }}>
                <img src="https://storyshares.blob.core.windows.net/media/staff_pick/biddyweb.jpg" alt="book" />
            </div>
        </>
    )
}

export default header