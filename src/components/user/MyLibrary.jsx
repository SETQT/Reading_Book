import React, { useState, useEffect } from 'react'
import UserPage from '../userPage/UserPage';
import style from '../userPage/style1.module.css'
import DescribeContentUser from '../content/DescribeContentUser'
import ContentUser from '../content/ContentUser'
import "../sidebar/homeUser.css"
import AlertDialogSlide from '../dialog/Dialog';
import BeatLoader from "react-spinners/ClipLoader";

import HeaderUser from '../../components/header/HeaderUser'

import { Outlet } from 'react-router-dom'



function MyLibrary() {
    const [book, setBook] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
                setLoading(false)
        },5000)
    },[])
    return (
         
            <div>
                {
                        loading?
                        <BeatLoader color={"D0021B"} loading={loading}  size={150}/>
                        :
                        <div>
                        <div className={style.libraryheader1}>
                           <div className={style.title1}>My history</div>

                        </div>
                        <ContentUser style={{ flex: 1 }} setBook={setBook} /> 
                          </div>
                }
                
                      
            </div>
                    
    )
}

export default MyLibrary
