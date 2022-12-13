import React from 'react'
import { useStore } from '../store/hook'

import Style from "./styleDescript.module.css"



function DescribeContent(props) {
    const [state, update] = useStore()
    const id = state.id
    return (
        <>
            {/* <div style={props.style}> */}
            <div className={Style.container} style={props.style}>
                <div>
                    <div>


                    </div>

                    <h2> Sách {id}</h2>
                </div>
            </div>
        </>
    )
}

export default DescribeContent
