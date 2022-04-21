import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import RoundButton from '../RoundButton/RoundButton'
import Globe from '../../Images/Globe.svg'

// Styles
import './Home.css'

export default function Home() {
    return (
        <div className='Home'>
            <img src={Globe} alt="Globe img" className='Home-img' />
            <div className='Home-content'>
                <h1 style={{ marginTop: "80px" }}>All of the world,<br />just a <span style={{ textDecoration: "line-through" }}>click</span> <span style={{ color: "#4FCAFF" }}>command</span> away.</h1>
                <div className='Home-cards'>
                    <Link to="/weather">
                        <Card width={282} height={289}>
                            <h2>"Weather"</h2>
                            <p style={{ textAlign: "center" }}>Know about the<br></br> weather conditions of<br></br> any place around the <br></br>globe.</p>
                            <RoundButton />
                        </Card>
                    </Link>
                    <Link to="/news">
                        <Card width={282} height={289}>
                            <h2>"News"</h2>
                            <p style={{ textAlign: "center" }}>Stay up to date<br></br>regarding the national<br></br>and international<br></br>affairs.</p>
                            <RoundButton />
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

