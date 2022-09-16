import React, { Component } from 'react'
import "./css/index.css"

export class Home extends Component {
    render() {
        return (
            <div>
                <section className="home">
                    <h1>DIGITAL AGENCY</h1>
                    <br />
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum
                        non odit illum esse necessitatibus iusto fugit, molestiae impedit
                        suscipit magnam repudiandae quaerat distinctio ab alias possimus
                        corrupti temporibus voluptatibus.
                    </h4>
                    <br />
                    <button type="button">Explore Now</button>
                </section>
            </div>
        )
    }
}

export default Home