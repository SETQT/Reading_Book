import React, { useState, useEffect } from "react";
import bookService from "../../service/bookService";
import "./searchbook.css";

function SearchBook(){
  //   if(loading) return <Loading />;
  const [listCategory, setListCategory] = useState([]);
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {

    bookService.getAllCategory().
        then(response => {
            console.log(response.data.data);
            setListCategory(response.data.data);

        }).catch(err => {
            console.log(err);
        });
    
        bookService.getAllCountry().
        then(response => {
            console.log(response.data.data);
            setListCountry(response.data.data);

        }).catch(err => {
            console.log(err);
        });

}, [])


  return (
    <>
      <div className="container-Search">
        <div className="search-content">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with segmented dropdown button"
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-secondary">
                Search
              </button>
              
            </div>
            
          </div>
          <div>
                        <label htmlFor="category" style={{marginBottom:"10px",marginTop:"10px"}}>Thể loại:</label>
                        <br />
                        <select name="category" id="category">
                            {
                                listCategory.map((item, index) => {
                                    return (
                                            <option key={index}>{item.name}</option>
                                        
                                    )

                                })
                            }

                        </select>

                    </div>
                    <div>
                        <label htmlFor="country" style={{marginBottom:"10px",marginTop:"10px"}}>Đất nước:</label>
                        <br />
                        <select name="country" id="country">
                            {
                                listCountry.map((item, index) => {
                                    return (
                                            <option key={index}>{item.name}</option>
                                        
                                    )

                                })
                            }

                        </select>

                    </div>
        </div>
      </div>
    </>
  );
};

export default SearchBook;
