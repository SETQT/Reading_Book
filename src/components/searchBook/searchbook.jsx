import React, { useState, useEffect } from "react";
import bookService from "../../service/bookService";
import { Route, Routes } from "react-router-dom";
import Style from "../../style/content.module.css";
import { Main, StoreContext } from "../cartBook/CartSearch";
import Header from '../header/HeaderDetailBook'
import "./searchbook.css";
import $ from "jquery"

function Search() {
  // const [state, update] = useStore()

  
  return (
    <>
      <Routes>
        {/* <Route path='/'> */}

        <Route path="/" element={<SearchBook />} />
        <Route path="book/page/:id" element={<SearchBook />} />

        {/* </Route> */}
      </Routes>
    </>
  );
}


function SearchBook() {
  //   if(loading) return <Loading />;
  let searchContent = localStorage.getItem('searchName');

  const [listCategory, setListCategory] = useState([]);
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {

    bookService
      .getAllCategory()
      .then((response) => {
        setListCategory(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    bookService
      .getAllCountry()
      .then((response) => {
        setListCountry(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
          <Header />

      <div className="container-Search">
        <div className="search-content" style={{marginTop:"20px"}}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with segmented dropdown button"
              placeholder="Nhập tên truyện"
              defaultValue={`${searchContent}`} id="searchBookPage"
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-secondary" onClick={()=>{
                        let name = $('#searchBookPage').val();
                        let category = $('#categorySearch option:selected').val();
                        console.log(category);
                        let country = $('#countrySearch option:selected').val();
                        console.log(country);

                        let result = name.toLowerCase();
                        localStorage.setItem("searchName", result);
                        localStorage.setItem("searchCategoryPage", category);
                        localStorage.setItem("searchCountryPage", country);
                        
                        window.location.reload(false);

                }}>
                Search
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              Thể loại:
            </label>
            <br />
            <select name="category" id="categorySearch" defaultValue="">

            <option defaultValue={true}></option>

              {listCategory.map((item, index) => {
                return <option key={index} id={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
          <div>
            <label
              htmlFor="country"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              Đất nước:
            </label>
            <br />
            <select name="country" id="countrySearch" defaultValue={""}>
            <option defaultValue={true}></option>

              {listCountry.map((item, index) => {
                return <option key={index} id={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="bodyHome1" style={{marginTop:"20px"}}>
        <div className={Style.content} >
          <div className={Style.forYou }>
            <div className={Style.contentForYou} style={{marginLeft:"30px"}}>
              <Main />
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Search;
