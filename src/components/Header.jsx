import React, { useState } from 'react'
import "../App.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <header>
                <div className="content">
                    <div className="logo">LOGO</div>
                    <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <div className={`nav-container ${isOpen ? "active" : ""}`}>
                        <div className="nav">
                            <a href="#">Home</a>
                            <a href="#">Articles</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="log">
                            <button className="login">Login</button>
                            <button className="trial">Start Free Trial</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header