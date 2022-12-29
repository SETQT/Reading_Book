import React, { useCallback } from 'react'
import { useState, useEffect } from 'react';
import "./admin.css"
import StyleHome from '../../style/content.module.css'
import chat from "../../assets/imgs/chat.png";
import updateIcon from "../../assets/imgs/update.png";
import del from "../../assets/imgs/delete.png";
import add from "../../assets/imgs/addChapter.png";
import { Link, Navigate, Route, Routes, useHref, useNavigate } from 'react-router-dom';


import { Dialog } from 'primereact/dialog';
import AlertDialogSlide from '../dialog/Dialog';
import { render } from 'react-dom';


import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import bookService from '../../service/bookService';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { Category } from '@mui/icons-material';
import { useStore } from '../store/hook';
import { updateBook } from '../store/action';
import { jwt } from '../../service/authHeader';
import AuthAdmin from '../../service/auth';
import AnimatedMulti from './Selecter';
const animatedComponents = makeAnimated();




// import { fontSize } from '@mui/system';

// import HeaderAdmin from '../../components/header/HeaderAdmin'
const data = [
    {
        "Name": "Sách hay",
        "Page": "1000",
        "Author": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Create": "Active",
        // Action:""
    },
    {
        "Name": "Trí tuệ do thái",
        "Page": "11011",
        "Author": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Create": "Banned",
        // Action:""
    },
    {
        "Name": "Nhà giả kim",
        "Page": "12270",
        "Author": "Jack 5 củ",
        "Type": "Reader",
        "Views": "1000",
        "Create": "Deleted",
        // Action:""
    },
]

const dataComment = [
    {
        "Username": "messi1987",
        "Content": "I like this book",
        "Reply_to": "",

        // Action:""
    },
    {
        "Username": "ronaldo1985",
        "Content": "This is helpful website",
        "Reply_to": "4",
        // Action:""
    },
    {
        "Username": "neymarjr",
        "Content": "Excellent!",
        "Reply_to": "",
        // Action:""
    },
    {
        "Username": "kylianmpabbe",
        "Content": "I will share this website to my friend",
        "Reply_to": "2",
        // Action:""
    },
]

function ManagerBook() {
    return (
        <>
            <Routes>
                {/* <Route path='/'> */}

                <Route index element={<Navigate to="all" replace />} />
                <Route path='all' element={<AllBook />} />
                <Route path='comment' element={<CommentBook />} />
                <Route path='add' element={<AddBook />} />
                <Route path='addChapter' element={<AddChapter />} />

                <Route path='update' element={<UpdateBook />} />

                {/* </Route> */}
            </Routes>
        </>
    )
}



function AllBook() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Book Management </div>
                <Title title={"Admin > Book Management"} />
                <div className='mainContent'>

                    <Content data={data} />
                </div>
            </div>

        </div >
    )
}

function CommentBook() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Comment Management </div>
                <Title title={"Admin > Book Management > Comment Management"} />
                <div className='mainContent'>

                    <ContentComment data={dataComment} />
                </div>
            </div>

        </div >
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function AddBook() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Add new book</div>
                <Title title={"Admin > Book Management > Add new book "} />
                <div className='mainContent'>

                    <ContentBan data={data} />
                </div>
            </div>

        </div >
    )
}

function AddChapter() {
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Add new chapter</div>
                <Title title={"Admin > Book Management > Add new chapter "} />
                <div className='mainContent'>

                    <ContentAddChapter data={data} />
                </div>
            </div>

        </div >
    )
}

function UpdateBook() {
    // const id = localStorage.getItem("bookUpdate");
    // const [list, setList] = useState([])
    // useEffect(() => {
    //     const data = async () => {
    //         let a = await initData(id);
    //         return a

    //     }
    //     setList(data());
    // }, [])
    // const list = initData(id)
    // us
    return (
        <div>

            <div className='mainTittle'>
                {/* <HeaderAdmin /> */}

                <div className='mainTitleMgb'>Update Book</div>
                <Title title={"Admin > Book Management > Update Book "} />
                <div className='mainContent'>

                    <ContentUpdate data={data} />
                </div>
            </div>

        </div >
    )
}



function Title(props) {

    const [Title, setTitle] = useState("");
    useEffect(() => {

        setTitle(props.title);
    }, [props.title])
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../all', { replace: true }), [navigate]);
    return (
        <div className={"titleManagerBook"} onClick={handleOnClick}> {Title} </div >

    )
}



function BanAccountUser(props) {
    // alert(user)
    // <Dialog />
    // <AlertDialogSlide />
    // alert("ASd")
    const [open, setOpen] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>

        </>
    )
}
const deleteAccount = (user) => {
    alert(user)
}
const restore = (user) => {
    alert(user)
}
function Content(props) {
    const [listAccount, setList] = useState([]);
    const [state, update] = useStore()

    useEffect(() => {

        // const authen = async () => await AuthAdmin()
        // authen()
        // AuthAdmin()
        // console.log(a);
        bookService.getAllBook().
            then(response => {
                // console.log(response.data.data);
                setList(response.data.data)

            }).catch(err => {
                console.log(err);
            })


    }, [])



    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../add', { replace: true }), [navigate]);

    const handleOnClick1 = useCallback(() => navigate('../update', { replace: true }), [navigate]);

    const handleOnClick2 = useCallback(() => navigate('../comment', { replace: true }), [navigate]);

    const handleOnClick3 = useCallback(() => navigate('../addChapter', { replace: true }), [navigate]);

    return (
        <>
            <div>


                <div className={StyleHome.searchBarAdmin}>
                    <input className={StyleHome.searchInputAdmin} type="text" placeholder="Search" />
                    <button className='banned' onClick={handleOnClick}>Add new book</button>

                </div>
                <hr style={{ color: "red" }}></hr>
                <table class="paleBlueRows">
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Number of Chapter</th>
                            <th>Category</th>
                            <th>Create at</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {listAccount} */}

                        {listAccount?.map((item, index) => {
                            let text = item.category.map(a => (a.name));
                            text = text.toString()
                            text = text.substring(0, text.length - 1);
                            return (
                                <tr key={index + 1}>
                                    <th>{index + 1}</th>
                                    <th>{item.name}</th>
                                    <td>{item.author}</td>
                                    <td>{item.numberChapter}</td>
                                    <td>{text}</td>
                                    <td>{item.createdAt}</td>

                                    <td className='optionAdmin'>


                                        <img className='icon' src={chat} alt="" onClick={() => {
                                            // alert(item._id)
                                            localStorage.setItem("bookComment", item._id);
                                            handleOnClick2()
                                        }
                                        } type={"chat"} style={{cursor:"pointer"}}/>
                                        <img className='icon' src={updateIcon} alt=""
                                            onClick={() => {
                                                // alert(item._id)
                                                localStorage.setItem("bookUpdate", item._id);
                                                update(updateBook(item._id))
                                                handleOnClick1()
                                            }
                                            } type={"update"} style={{cursor:"pointer"}}/>
                                        <AlertDialogSlide icon={del} user={item._id} type={"delete"} style={{cursor:"pointer"}}/>
                                        <img className='icon' src={add} alt="" onClick={() => {
                                            // alert(item._id)
                                            localStorage.setItem("bookAddChapter", item._id);
                                            handleOnClick3()
                                        }
                                        } type={"addChapter"} style={{cursor:"pointer"}}/>
                                    </td>

                                </tr>
                            )


                        })}

                    </tbody>

                </table>
            </div>
        </>
    )
}

function ContentComment(props) {
    const [listAccount, setList] = useState([]);

    const id = localStorage.getItem('bookComment');


    useEffect(() => {
  
  
      bookService.getBookById(id).
        then(response => {
          console.log(response.data.data);
          setList(response.data.data.comments)
  
        }).catch(err => {
          console.log(err);
        })
  
  
    }, [])



    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../add', { replace: true }), [navigate]);

    const handleOnClick1 = useCallback(() => navigate('../update', { replace: true }), [navigate]);
    return (
        <>
            <div>



                <hr ></hr>
                <table class="paleBlueRows">
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Username</th>
                            <th>Content</th>
                            <th>Reply to</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {listAccount} */}

                        {listAccount?.map((item, index) => {

                            return (
                                <tr key={index + 1}>
                                    <th>{index + 1}</th>
                                    <th>{item.Username}</th>
                                    <td>{item.Content}</td>
                                    <td>{item.Reply_to}</td>


                                    <td className='optionAdmin' >
                                        {/* <img className='icon' src={chat} alt="" onClick={() => <BanAccountUser user={item.Page} />} /> */}


                                        <AlertDialogSlide icon={del} user={item.Page} type={"delete"} />                                        {/* <img className='icon' src={del} alt="" onClick={() => deleteAccount(item.Page)} /> */}
                                    </td>

                                </tr>
                            )


                        })}

                    </tbody>

                </table>
            </div>
        </>
    )
}

function ContentPreview() {
    const [avatar, setAvatar] = useState();
    const id = localStorage.getItem("bookUpdate");
    const [listAccount, setList] = useState([]);


    useEffect(() => {
  
  
      bookService.getBookById(id).
        then(response => {
        //   console.log(response.data.data);
          setList(response.data.data.book)
  
        }).catch(err => {
          console.log(err);
        })
  
  
    }, [])
  
    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.preview);
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

    return (
        <>
            {!avatar && (<img
          style={{ marginTop: 8, marginLeft: "10px", height: "290px", marginBottom: "10px" }}
          src={listAccount.image}
          alt=""
          width="80%"

        />)}

            {avatar && (
                <img
                    style={{ marginTop: 8, marginLeft: "10px", height: "140px", marginBottom: "10px" }}
                    src={avatar.preview}
                    alt=""
                    width="50%"

                />
            )}
            <div
                style={{ marginLeft: "10px" }}
            >
                <input type="file" onChange={handlePreviewAvatar} id="contentPDF" />


            </div>
        </>
    );
}

let CategoryListFromSV = []

function ContentBan(props) {

    const [listCountry, setCountry] = useState([]);
    const [options, setOption] = useState([]);

    // const options = [

    // ]
    useEffect(() => {



        const load = async () => {
            const result = await bookService.getAllCategory();

            // console.log(result);


            let list = [];
            result.data.data.map((item) => {
                list.push({ value: item._id, label: item.name });
            });

            setOption(list);
            CategoryListFromSV = list

        };

        load()

        bookService.getAllCountry().
            then(response => {

                setCountry(response.data.data);

            }).catch(err => {
                console.log(err);
            });


    }, [])


    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
    };
    const animatedComponents = makeAnimated();

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../reported', { replace: true }), [navigate]);
    return (
        <>
            <div>
                <div className='formBook'>
                    <div>
                        <label htmlFor="Name">Name:</label>
                        <input id="nameBook" placeholder='Name' name='name' />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input id="author" placeholder='Name' name='name' />
                    </div>
                    <div>

                        <label htmlFor="category">Category:</label>
                        <Select closeMenuOnSelect={false}

                            components={animatedComponents}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            options={options} isMulti
                            maxMenuHeight={250}

                            menuPlacement="auto"
                            id="category"

                        />


                    </div>
                    <div>
                        <label htmlFor="country">Country:</label>
                        <select name="country" id="country">
                            {
                                listCountry.map((item, index) => {
                                    return (

                                        <option key={index} value={item._id}>{item.name}</option>
                                    )

                                })
                            }

                        </select>

                    </div>
                    <div className="descriptionFormBook">
                        <label htmlFor="descriptionFormBook">Description:</label>

                        <input id='descriptionFormBook' type="text" name="descriptionFormBook" />
                    </div>

                    <label>Add cover image
                        <br />
                        <ContentPreview />
                    </label>



                </div>
                <div className='submitFormBook'>
                    <span id='submitBook' onClick={submitBook}>SUBMIT</span>
                </div>
            </div>
        </>
    )
}
async function initData(id) {

    const response = await bookService.getBookById(id);
    let data = response.data.data.book;
    if (!data) return
    // console.log(data);
    $('#nameBook2').val(data.name)
    $('#author2').val(data.author)
    $('#country2').val(data.country);

    $('#descriptionFormBook2').val(data.description);
    let op = []
    data.category.map((index, item) => op.push({ label: index.name, value: index._id }));
    console.log("---");
    console.log(op);
    // localStorage.location.setItem("typeOld", op)
    return op

}
{
    // op.map((item.index)=>{
    //     <>sd</>
    // })
}
function asd() {
    $('#chkveg').multiselect({

        includeSelectAllOption: true
    });

    $('#btnget').click(function () {

        alert($('#chkveg').val());
    });
}
function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
function ContentUpdate(props) {
    const [listCountry, setCountry] = useState([]);
    const [options, setOption] = useState([]);
    const [state, update] = useStore()
    const [op, setOp] = useState(null);
    const id = localStorage.getItem("bookUpdate");
    // const id = state.id
    // asd()
    useEffect(() => {
        console.log(props);


        // console.log(state);



        const load = async () => {
            // const dataNew =  initData(id)
            // setOp(initData(id))

            bookService.getBookById(id).then((response) => {
                let data = response.data.data.book;
                if (!data) return
                // console.log(data);

                let options = []
                data.category.map((index, item) => options.push({ label: index.name, value: index._id }));
                console.log("---");
                console.log(options);
                setOp(options)
                $('#nameBook2').val(data.name)
                $('#author2').val(data.author)
                // $('#country2').val(data.country);

                $('#descriptionFormBook2').val(data.description);
                selectElement('country2', data.country._id);
                // localStorage.location.setItem("typeOld", op)

            });

            // initData(id)
            const result = await bookService.getAllCategory();

            let list = [];
            result.data.data.map((item) => {
                list.push({ value: item._id, label: item.name });
            });

            setOption(list);
            CategoryListFromSV = list

        };

        load()

        bookService.getAllCountry().
            then(response => {

                setCountry(response.data.data);

            }).catch(err => {
                console.log(err);
            });


    }, [])


    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
    };
    const animatedComponents = makeAnimated();

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../reported', { replace: true }), [navigate]);
    return (
        <>
            <div>
                <div className='formBook'>
                    <div>
                        <label htmlFor="Name2">Name:</label>
                        <input id="nameBook2" placeholder='Name' name='name' />
                    </div>
                    <div>
                        <label htmlFor="author2">Author:</label>
                        <input id="author2" placeholder='Name' name='name' />
                    </div>
                    <div>

                        <label htmlFor="category2">Category:</label>


                        {/* 
                        <Select closeMenuOnSelect={false}

                            components={animatedComponents}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            options={options} isMulti
                            maxMenuHeight={250}
                            value={op}
                            // defaultValue={props.list}
                            // defaultValue={op}
                            // defaultValue={initData(id)}
                            menuPlacement="auto"
                            id="category2"

                        /> */}
                        {op && <AnimatedMulti list={options} default={op} />}


                    </div>
                    <div>
                        <label htmlFor="country">Country:</label>
                        <select name="country2" id="country2">
                            {
                                listCountry.map((item, index) => {
                                    return (

                                        <option key={index} value={item._id}>{item.name}</option>
                                    )

                                })
                            }

                        </select>

                    </div>
                    <div className="descriptionFormBook">
                        <label htmlFor="descriptionFormBook">Description:</label>

                        <input id='descriptionFormBook2' type="text" name="descriptionFormBook" />
                    </div>

                    <label>Add cover image
                        <br />
                        <ContentPreview />
                    </label>



                </div>
                <div className='submitFormBook'>
                    <span id='submitBook' onClick={submitUpdateBook}>SUBMIT</span>
                </div>
            </div>
        </>
    )
}



const submitUpdateBook = async () => {
    let name = $('#nameBook2').val();
    let author = $('#author2').val();

    let category = $('#category2').val();
    var ek = [];
    $('.react-select__multi-value__label').each(function () {
        let labels = ($(this).html());
        // console.log(labels);
        const result = getByValue(CategoryListFromSV, labels)

        ek.push(result.value)
    });

    let country = $('#country2').val();

    let descript = $('#descriptionFormBook2').val();
    let content = $('#contentPDF').prop('files')[0];
    const formData = new FormData();

    formData.append("file", content);
    formData.append("name", name);
    formData.append("description", descript);
    formData.append("author", author);
    ek.forEach(element => {
        formData.append("category[]", element);
    });

    formData.append("country", country);
    let jwts = jwt()
    let id = localStorage.getItem("bookUpdate");
    console.log("--------");

    for (let [key, value] of formData) {
        console.log(`${key}: ${value}`)
    }
    console.log("--------");
    console.log(id);
    await fetch(
        `https://ebook4u-server.onrender.com/api/book/${id}`,
        {
            method: 'PUT',
            body: formData,
            headers: {

                'Authorization': jwts,
            },

        }
    )
        // .then((response) => console.log(response))
        .then((result) => {
            // window.location.href("http://localhost:3000/admin/book/all")
            // window.location.reload(false)
            console.log(':', result);
        })
        .catch((error) => {

        });

}

const submitNewChapter = async () => {
    let name = $('#nameChapter').val();
    let descript = $('#descriptionFormChapter').val();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("contentText", descript);
    let jwts = jwt()
    let id = localStorage.getItem("bookAddChapter");
   
    await fetch(
        `https://ebook4u-server.onrender.com/api/chapter/${id}`,
        {
            method: 'POST',
            body: formData,
            headers: {

                'Authorization': jwts,
            },

        }
    )
        // .then((response) => console.log(response))
        .then((result) => {
            // window.location.href("http://localhost:3000/admin/book/all")
            // window.location.reload(false)
            console.log(':', result);
        })
        .catch((error) => {

        });
}

function ContentAddChapter(props) {
    // const [listCountry, setCountry] = useState([]);
    // const [options, setOption] = useState([]);
    // const [state, update] = useStore()
    // const [op, setOp] = useState(null);
    const id = localStorage.getItem("bookUpdate");
    // const id = state.id
    // asd()
    useEffect(() => {
        console.log(props);

        // const load = async () => {
            // const dataNew =  initData(id)
            // setOp(initData(id))

            // bookService.getBookById(id).then((response) => {
            //     let data = response.data.data.book;
            //     if (!data) return
            //     // console.log(data);

            //     let options = []
            //     data.category.map((index, item) => options.push({ label: index.name, value: index._id }));
            //     console.log("---");
            //     console.log(options);
            //     // setOp(options)
            //     $('#nameBook2').val(data.name)
            //     $('#author2').val(data.author)
            //     // $('#country2').val(data.country);

            //     $('#descriptionFormBook2').val(data.description);
            //     selectElement('country2', data.country._id);
            //     // localStorage.location.setItem("typeOld", op)

            // });

            // // initData(id)
            // const result = await bookService.getAllCategory();

            // let list = [];
            // result.data.data.map((item) => {
            //     list.push({ value: item._id, label: item.name });
            // });

            // setOption(list);
            // CategoryListFromSV = list

        // };

        // load()

        // bookService.getAllCountry().
        //     then(response => {

        //         setCountry(response.data.data);

        //     }).catch(err => {
        //         console.log(err);
        //     });


    }, [])


    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
    };
    const animatedComponents = makeAnimated();

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('../reported', { replace: true }), [navigate]);
    return (
        <>
            <div>
                <div className='formBook'>
                    <div>
                        <label htmlFor="nameChapter">Name of Chapter:</label>
                        <br />
                        <input id="nameChapter" placeholder='Name' name='nameChapter' />
                    </div>
                    <div className="descriptionFormBook">
                        <label htmlFor="descriptionFormChapter">Description:</label>

                        <input id='descriptionFormChapter' type="text" name="descriptionFormChapter" placeholder='Content'/>
                    </div>



                </div>
                <div className='submitFormBook'>
                    <span id='submitChapter' onClick={submitNewChapter}>SUBMIT</span>
                </div>
            </div>
        </>
    )
}

function getByValue(arr, value) {

    for (var i = 0, iLen = arr.length; i < iLen; i++) {

        if (arr[i].label == value) return arr[i];
    }
}
const submitBook = async () => {
    let name = $('#nameBook').val();
    let author = $('#author').val();

    let category = $('#category').val();
    var ek = [];
    $('.react-select__multi-value__label').each(function () {
        let labels = ($(this).html());
        console.log(labels);
        const result = getByValue(CategoryListFromSV, labels)

        ek.push(result.value)
    });

    let country = $('#country').val();

    let descript = $('#descriptionFormBook').val();
    let content = $('#contentPDF').prop('files')[0];

    const formData = new FormData();

    formData.append("file", content);
    formData.append("name", name);
    formData.append("description", descript);
    formData.append("author", author);

    ek.forEach(element => {

        formData.append("category[]", element);
    });
    formData.append("country", country);
    let jwts = jwt()

    await fetch(
        'https://ebook4u-server.onrender.com/api/book',
        {
            method: 'POST',
            body: formData,
            headers: {
                // 'content-type': `multipart/form-data`,
                // 'boundary': "asdsd",
                // 'accept': 'application/json',
                'Authorization': jwts,

            },

        }
    )
        // .then((response) => console.log(response))
        .then((result) => {
            // window.location.href("http://localhost:3000/admin/book/all")
            window.location.reload(false)
            // console.log('Success:', result);
        })
        .catch((error) => {

        });

}






















//    <th>ID</th>
//                             <th>:</th>
//                             <th>Author</th>
//                             <th>Pages</th>
//                             <th>Views</th>
//                             <th>Category</th>
//                             <th>Create at</th>
//                             <th>Action</th>




// <table class="paleBlueRows">
// <thead>
//     <tr>
//         <th>ID</th>
//         <th>Author</th>
//         <th>Author</th>
//         <th>Pages</th>
//         <th>Views</th>
//         <th>Category</th>
//         <th>Create at</th>
//         <th>Action</th>
//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
//     <tr>
//         <td>1</td><td>The Secret GoldFish</td><td>Ariel Morison</td><td>5000</td><td>10035</td><td>Novel</td><td>10/10/2000</td>
//         <td>
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={chat} alt="" />
//             <img className='icon' src={del} alt="" />
//         </td>
//     </tr>
// </tbody>

// </table>
export default ManagerBook








