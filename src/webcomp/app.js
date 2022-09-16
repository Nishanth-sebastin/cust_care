import React, { Component } from 'react'
import Footer from './footer'
import Home from './home'
import Nav from './nav'
import Testimonials from './testimonials'
import Uniqueideas from './uniqueideas'

class app extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Home />
                <Uniqueideas />
                <Testimonials />
                <Footer />
            </div>
        )
    }
}

export default app