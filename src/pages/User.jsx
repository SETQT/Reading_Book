import React from "react";
import UserPage from "../components/userPage/UserPage";
import MyLibrary from "../components/user/MyLibrary";
import FavoriteBook from "../components/user/FavoriteBook";
import UpdateProfile from "../components/user/UpdateProfile";
import MyProfile from "../components/user/MyProfile";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import HomeUser from "../components/sidebar/HomeUser";
import Style from "../style/content.module.css";
function User() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />}>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/library" element={<MyLibrary />} />
        <Route path="/favorite" element={<FavoriteBook />} />
        <Route path="/update" element={<UpdateProfile />} />
      </Route>
    </Routes>
  );
}

// bodyHome
// }
export default User;
