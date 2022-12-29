import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import $ from "jquery"

import Comment from '../comment/Comment'
import { useNavigate } from "react-router-dom";
import Style from "../../components/userPage/style1.module.css";
import moment from "moment";
import Header from '../../components/header/HeaderDetailBook'
import bookService from "../../service/bookService";
import UserService from "../../service/UserService";
import { jwt } from "../../service/authHeader";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);


  const [comment, setComment] = useState([])
  let ids = window.localStorage.getItem("idBookForRead")




  useEffect(() => {
    fetchData();
    fetch();
  }, []);

  const fetch = async () => {

    await bookService.getBookById(ids).
      then(response => {



        setComment(response.data.data.comments)

        // setCurrenChapter(response.data.data.chapters[0])
        // console.log(book);
      }).catch(err => {
        console.log(err);
      })
  }

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
            <div >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={Style.bookDetailsItem}>
                  <span
                    className="fw-6 fs-24"
                    style={{ fontWeight: "bold", fontSize: "30px" }}
                  >
                    {book?.name}
                  </span>
                </div>
                <button type="button" class="btn btn-danger" style={{ marginRight: "20px", marginTop: "20px" }} onClick={() => {
                  localStorage.setItem("idToAddFav", book?._id);

                  addToFavorite();
                }}>Add to favorite</button>

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
              <div className={Style.bookDetailsInfo}>
                <span><p dangerouslySetInnerHTML={{ __html: `${book?.description}` }} /></span>

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

              <button type="button" class="btn btn-danger" style={{ marginLeft: "20px", marginBottom: "20px" }} onClick={() => {
                // localStorage.setItem("idToAddFav", book?._id);
                window.location.href = "http://localhost:3000/read"
                // addToFavorite();

              }}>Đọc sách</button>
            </div>

          </div>

        </div>



      </section>
      <div className="enterComment" >

        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Comment" name="name" id='CommentRead' required />
          <label for="name" class="form__label">Comment</label>
        </div>
        <div className='sendding'>
          <button className='buttonSend' onClick={upComment}>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </div>
      </div>
      <div className="commentDetail" style={{ flex: "3", backgroundColor: "", padding: "30px", margin: "0 10px 0 10px" }}>
        {comment?.map((item, index) =>
          <div className="commentLine" key={index}>
            <img className="imgAdd" src={item.user.avatar}></img>
            <div className='commentReadBook'>
              <div className='nameUserRead'>{item.user.username} </div>
              <div> {item.content}
              </div>
            </div>
          </div>
        )}
      </div>


    </div>

  );
}

const upComment = async () => {
  // alert("Asd")
  let ids = window.localStorage.getItem("idBookForRead")

  // let formData = new FormData();
  let content = $('#CommentRead').val();
  $('#CommentRead').val("");


  let jwts = jwt()

  await fetch(
    `https://ebook4u-server.onrender.com/user/comment/${ids}`,
    {

      headers: {
        'Content-Type': 'application/json',
        'Authorization': jwts
      },
      method: 'POST',
      body: JSON.stringify({ "contentComment": content })


    }
  )

    .then((result) => {
      // <div className='nameUserRead'>{item.user.username} </div>

      const load = async () => {
        const datas = await UserService.getProfileUser();
        let user = datas.data.data;
        let a = `
              <div class="commentLine">
              <img class ="imgAdd" src=${user.avatar}></img>
                              <div class='commentReadBook'>
                                   <div class='nameUserRead'>${user.username} </div>
                              <div> ${content}</div>
                              </div>
                              </div>`
        $(".commentDetail").prepend(a)

      }
      load()
      // window.location.href = "http://localhost:3000/read"

    })
    .catch((error) => {

    });
}
const addToFavorite = async () => {
  const id = localStorage.getItem('idToAddFav');
  let idBook = { idBook: id };
  // console.log(idBook);
  const user = localStorage.getItem('user');

  await fetch(
    'https://ebook4u-server.onrender.com/user/me/favorite-book',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',

        'Authorization': `Bearer ${user}`,
      },
      body: JSON.stringify(idBook),


    }
  )
    // .then((response) => console.log(response))
    .then((result) => {
      // window.location.href("http://localhost:3000/admin/book/all")
      // console.log('Success:', result);
    })
    .catch((error) => {

    });

}

export default BookDetails;
