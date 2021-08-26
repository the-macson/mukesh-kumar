import React from 'react'

export default function BoxService(props) {
    return (
        <div className={props.order}>
            <img src={props.src} alt="" />
        </div>
    )
}
