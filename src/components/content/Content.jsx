import React, { useContext } from "react";
import Style from "../../style/content.module.css";
import { Main, StoreContext } from "../cartBook/CartBook";
import { updateBook } from "../store/action";
import Context from "../store/Context";
import { useStore } from "../store/hook";
import Pagination from "../cartBook/pagination";
import $ from "jquery"
function Content(props) {
  return (
    <>
      {/* {props.setBook(7)} */}
      <div style={props.style}>
        <div className={Style.content}>
          <div className={Style.headerContent}>
            <div style={{ flex: 1 }}>
              <span className={Style.title}>Books</span>
              <span className={Style.title}>Audiobooks</span>
              <span className={Style.title}>Postcasts</span>
            </div>
            <div style={{ flex: 1 }}> </div>
            <div class="main-search-input-wrap">
              <div
                class="main-search-input fl-wrap"
                style={{ display: "flex" }}
              >
                <div class="main-search-input-item">
                  <input type="text" defaultValue="" placeholder="Search..." id="searchHome" />
                </div>

                <button class="main-search-button" onClick={()=>{
                        let name = $('#searchHome').val();
                        let result = name.toLowerCase();
                        localStorage.setItem("searchName", result);
                        window.location.href="http://localhost:3000/search"

                }}>Search</button>
              </div>
            </div>
          </div>

          <div className={Style.forYou}>
            <div>For You</div>
            <div className={Style.contentForYou}>
              <Main />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const PostsData = [
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
];

export default Content;
