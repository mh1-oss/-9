import React from 'react'
import "../App.css"

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content container">
                <div className="hero-text">
                    <h1>A modern way to build websites.</h1>
                    <p>Empower designers to build professional, custom websites in a completely visual canvas with no code.</p>
                </div>
                <button className="trial">Start Free Trial</button>
            </div>
        </div>
    )
}

export default Hero