import React from 'react'

// Styles
import './Card.css'

export default function Card(props) {
    return (
        <div className='Card' style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            {props.children}
        </div>
    )
}
