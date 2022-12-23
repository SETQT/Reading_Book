import React, { useState, useEffect } from 'react'
import UserPage from '../userPage/UserPage';
import style from '../userPage/style1.module.css'
import DescribeContentUser from '../content/DescribeContentUser'
import ContentUser from '../content/ContentUser'
import "../sidebar/homeUser.css"
import AlertDialogSlide from '../dialog/Dialog';

import HeaderUser from '../../components/header/HeaderUser'

import { Outlet } from 'react-router-dom'



function MyLibrary() {
    const [book, setBook] = useState(10);
    return (
         
            <div>
                    <DescribeContentUser style={{ flex: 3 }} book={book} />    
                    <ContentUser style={{ flex: 1 }} setBook={setBook} />         
            </div>
                    
    )
}

export default MyLibrary
