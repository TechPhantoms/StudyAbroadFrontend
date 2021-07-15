import React, { Component } from 'react'
import { Button } from "../../Header/Button";
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <h1>Discover. Research. Decide.</h1>
                <p>We will help you to find, apply & enroll at universities abroad</p>

                <div className='home-btns'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                </div>
            </div>
        )
    }
}

export default Home