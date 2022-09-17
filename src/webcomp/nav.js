import React, { Component } from 'react'

// import { AiFillCaretDown } from 'react-icons/ai'
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
class Nav extends Component {


    render() {
        return (
            <div className='cont' >
                <header className="navbar">
                    <div className="logo">
                        CustCare
                    </div>
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

                            <div className='dropdown'>
                                <Button className='dropbtn' variant='contained'>Login/SignUp</Button>
                                <div className="dropdown-content">


                                    <Link className='links' target='_blank' to='/organization/login'>Organization</Link>
                                    <Link className='links' target='_blank' to='/customer/login'>Customer</Link>
                                </div>
                            </div>
                        </div>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Nav