import React from 'react'
import RightChevron from '../../Images/RightChevron.svg';

// Styles
import './RoundButton.css'

export default function RoundButton() {
    return (
        <div className='RoundButton'>
            <img src={RightChevron} alt="Right Chevron" />
        </div>
    )
}
