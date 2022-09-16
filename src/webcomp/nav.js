import React, { Component } from 'react'
import "./css/index.css"

class Nav extends Component {
    render() {
        return (
            <div>
                <header className="navbar">

                    <ul className="nav-links">
                        <input style={{ cursor: 'pointer' }} type="checkbox" id="checkbox_toggle" />
                        <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                        <div className="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/a">About</a></li>
                            <li>
                                <a href="/">Services</a>
                            </li>
                            <li><a href="/">Projects</a></li>

                            <li><a href="/">Contact</a></li>
                        </div>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Nav