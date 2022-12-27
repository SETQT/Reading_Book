import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import $ from "jquery"

import Comment from '../comment/Comment'
import { useNavigate } from "react-router-dom";
import Style from "../../components/userPage/style1.module.css";
import moment from "moment";
import Header from '../../components/header/HeaderDetailBook'


function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const user = localStorage.getItem('user');

      const { data } = await axios(
        `https://ebook4u-server.onrender.com/api/book/${id}`,
        {
          headers: {
            "content-type": "application/json",
            accept: "application/json",
            Authorization:
              `Bearer ${user}`,
          },
        }
      );
      // console.log(data);
      setBook(data.data.book);
    } catch (error) {
      // console.log(error.response);
    }
  };
  //   if(loading) return <Loading />;

  return (
    <div>
      <Header />
      <section className={Style.bookDetails}>
        <div className="container">
          <div className={Style.bookDetailsContent}>
            <div className={Style.bookDetailsImg}>
              <img src={book?.image} alt="cover img" />
            </div>
            <div className={Style.bookDetailsInfo}>
              <div className={Style.bookDetailsItem}>
                <span
                  className="fw-6 fs-24"
                  style={{ fontWeight: "bold", fontSize: "30px" }}
                >
                  {book?.name}
                </span>
              </div>
              <div className={Style.bookDetailsItem}>
                <span className="fw-6 fs-24">Tác giả: {book?.author}</span>
              </div>
              <div className={Style.bookDetailsItem}>
                <span className="fw-6 fs-24">
                  Thể loại:{" "}
                  {book?.category?.map((item, index) => {
                    return <span key={index + 1}>{item.name},</span>;
                  })}
                </span>
              </div>
              <div className={Style.bookDetailsItem}>
                <span>Nội dung: <p dangerouslySetInnerHTML={{ __html: `${book?.description}` }} /></span>
              </div>
              <div className={Style.bookDetailsItem}>
                <span>Nước sản xuất: {book?.country?.name}</span>
              </div>
              <div className={Style.bookDetailsItem}>
                <span>
                  Lần cuối cập nhật:{" "}
                  {moment.utc(book?.updateAt).format("DD/MM/YYYY")}
                </span>
              </div>
              <div className={Style.bookDetailsItem}>
                <span>Lượt xem: {book?.view}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Comment />
    </div>

  );
}

export default BookDetails;
