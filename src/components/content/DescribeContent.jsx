import React, { useEffect, useState } from 'react'
import { useStore } from '../store/hook'

import Style from "./styleDescript.module.css"

import "../topbook/card.css"
import bookService from '../../service/bookService'

const read = (id) => {
    // localStorage.setItem.
    window.localStorage.setItem("idBookForRead", id)
    window.location.href = "http://localhost:3000/read"


}
function DescribeContent(props) {
    const [state, update] = useStore()
    const [top, setTop] = useState([])
    useEffect(() => {
        bookService.getTopBook(3).then((res) => {
            setTop(res.data.data)
            console.log(res.data.data);
        }).catch((e) => {

        })
    }, [])
    // const id = state.id
    return (
        <>
            {/* <div style={props.style}> */}
            <div className={Style.container} style={props.style} >
                <div style={{ "marginTop": "40px" }}>
                    TOP BOOK
                    <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "40px" }}>

                        <div className="listTopBook">

                            {top.map((item, index) => {
                                let text = item?.category.map(a => (a.name));
                                text = text.toString()
                                text = text.substring(0, text.length);
                                return (
                                    <div className="cardHoverMe" key={index} >
                                        <div className="contentHoverMe">
                                            <div className="front">
                                                {/* <h3 className="title">Hey</h3> */}
                                                {/* <p className="subtitle">Hover me :)</p> */}

                                                <div className="cardTopBook" >

                                                    <div className='TopBook' >

                                                        <img src={item?.image} alt="top book" />
                                                        {/* <img src={item?.image} alt="top book" /> */}
                                                        {/* aasd */}
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="back">
                                                <div>

                                                    <div style={{ "marginBottom": "10px" }} > {item?.name}</div>
                                                    <div className="country block-ellipsis ">
                                                        <span className='titleTopBook'>
                                                            Author:&nbsp;
                                                        </span>
                                                        {item?.author}</div>
                                                    <div className="country block-ellipsis ">
                                                        <span className='titleTopBook'>
                                                            Category:&nbsp;
                                                        </span>
                                                        {text}
                                                        {/* {item?.category?.map((item) => {
                                                            return (<span> {item.name} </span>)
                                                        })} */}
                                                    </div>
                                                    <div className="country block-ellipsis ">
                                                        <span className='titleTopBook'>
                                                            Country:&nbsp;
                                                        </span>
                                                        {item?.country?.name}
                                                    </div>
                                                    <button onClick={() => {
                                                        read(item?._id)
                                                        // alert(item?._id)
                                                    }}>Read Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}

                        </div>

                    </div>

                    {/* <h2> Sách {id}</h2> */}
                </div>
            </div>
        </>
    )
}


export default DescribeContent
