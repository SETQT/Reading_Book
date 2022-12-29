import React, { useState, useEffect } from 'react';

import { useStore } from '../store/hook'
import HeaderUser from '../header/HeaderUser';
import "./readbook.css"
import { getListChapter } from '../../service/GetChapter';
import left from "../../assets/imgs/left.png"
import star from "../../assets/imgs/star.png"
import heart from "../../assets/imgs/love.png"
import right from "../../assets/imgs/right.png"
import redirect from "../../assets/imgs/next.png"
import volume from "../../assets/imgs/volume.png"
import bookService from '../../service/bookService';
import UserService from '../../service/UserService';
import { jwt } from '../../service/authHeader';
import $ from "jquery"
const data =
{
    "id": "2220",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
}
const chapterData = [
    {
        "id": "212",
        "name": "Chapter 1"
    },
    {
        "id": "212",
        "name": "Chapter 2"
    },
    {
        "id": "212",
        "name": "Chapter 3"
    },
    {
        "id": "212",
        "name": "Chapter 4"
    },
]

function ContentAB(props) {
    console.log(props);
    // && props.book && props.currentChapter
    // let cur =
    if (props.chapter) return <ContentRead chapter={props.chapter[props.currentChapter]} book={props.book.name} />
}


const upComment = async () => {
    // alert("Asd")
    let ids = window.localStorage.getItem("idBookForRead")

    // let formData = new FormData();
    let content = $('#CommentRead').val();
    $('#CommentRead').val("");

    // formData.append("contentComment", content);

    // for (let [key, value] of formData) {
    //     console.log(`${key}: ${value}`)
    // }
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
                $(".footerComment").prepend(a)

            }
            load()
            // window.location.href = "http://localhost:3000/read"

        })
        .catch((error) => {

        });
}
const ReadBook = () => {

    // const [state, update] = useStore()
    const [chapter, setChapter] = useState(null)
    const [book, setbook] = useState([])
    const [comment, setComment] = useState([])
    let a = localStorage.getItem("currentChapter");
    if (!a) a = 0
    // setCurrentChapter(parseInt(a))
    const [currentChapter, setCurrentChapter] = useState(parseInt(a))

    // const [currentChapter, setCurrenChapter] = useState("")
    // const currentChapter = 0;
    // let content; 
    useEffect(() => {
        // bookService 
        // setCurrentChapter(0)
        let ids = window.localStorage.getItem("idBookForRead")
        // alert(ids)
        // console.log(ids);
        // ids.toString()
        const fetch = async () => {

            await bookService.getBookById(ids).
                then(response => {

                    console.log(response.data.data);
                    const load = async () => {
                        await setChapter(response.data.data.chapters)
                        console.log(chapter);
                    }
                    load()
                    setbook(response.data.data.book)
                    setComment(response.data.data.comments)
                    window.localStorage.setItem("maxChapter", response.data.data.chapters.length)

                    // setCurrenChapter(response.data.data.chapters[0])
                    // console.log(book);
                }).catch(err => {
                    console.log(err);
                })
        }
        fetch()

    }, [])

    // const id = state.id


    //   if(loading) return <Loading />;

    return (
        <>
            <div>

                <HeaderUser />
                <div className='mainRead'>
                    <div className="beforeMain">
                        <img src={book.image} alt="" />
                    </div>
                    <div className="contentRead">

                        {/* contentAB(chapter, book, currentChapter) */}
                        <ContentAB chapter={chapter} book={book} currentChapter={currentChapter} />
                        {/* {(chapter != null) && (<ContentRead id={chapter[currentChapter]?._id} book={book.name} />)} */}

                    </div>
                    <div className="afterMain">
                        <div className="titleAfterMain">Chapter List</div>
                        {chapter?.map((index, count) =>
                            <div>
                                <span key={count} className="chapterOfBook" onClick={() => {

                                    window.localStorage.setItem("currentChapter", count)
                                    window.location.reload(false)
                                }}> Chapter {count + 1}</span>
                            </div>
                        )} </div>
                </div>
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
                <div className='footerComment'>
                    {comment?.map((item, index) =>
                        <div className="commentLine" key={index}>
                            <img className='imgAdd' src={item.user.avatar}></img>
                            <div className='commentReadBook'>
                                <div className='nameUserRead'>{item.user.username} </div>
                                <div> {item.content}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}



function ContentRead(props) {



    const [currentChapter, setCurrenChapter] = useState([])

    console.log("---");
    console.log(props);
    return (
        <div className='outContent'>
            {/* {dataChapter.data.name} */}
            <div className='titleRead'>

                <div className="prevTitle">
                    <img src={left} alt="" onClick={() => {
                        let index = parseInt(window.localStorage.getItem("currentChapter"))
                        let max = parseInt(window.localStorage.getItem("maxChapter"))
                        if (index != max) {
                            index += 1
                            window.localStorage.setItem("currentChapter", index)
                            window.location.reload(false)
                        }
                    }
                    }
                    />

                </div>
                <div className="midTittle">
                    <img src={heart} alt="" />
                    <img src={star} alt="" />
                    <img src={redirect} alt="" />
                    <img src={volume} alt="" />
                </div>
                <div className="nextTittle">
                    <img src={right} alt="" onClick={() => {
                        let index = parseInt(window.localStorage.getItem("currentChapter"))
                        if (index != 0) {
                            index -= 1
                            window.localStorage.setItem("currentChapter", index)
                            window.location.reload(false)
                        }
                    }}
                    />

                </div>
            </div>
            <div className="story">
                <div className='nameBook'> {props.book}</div>
                <div className='nameChapter'> {props.chapter?.name}</div>
                {/* <div className='contentOfPerChapter'> {props.chapter?.contentText}</div> */}
                <div className='contentOfPerChapter'>
                    <p dangerouslySetInnerHTML={{ __html: `${props.chapter?.contentText}` }} />
                </div>

            </div>
        </div>
    )
}

export default ReadBook