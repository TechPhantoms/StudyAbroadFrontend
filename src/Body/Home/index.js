<<<<<<< HEAD
import React, { Component } from 'react'
import { Button } from "../../Header/Button";
=======
import React, { Component, Button } from 'react'
import News from '../Home/news'
>>>>>>> phantom
import './index.css'

class Home extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className='home-container'>
=======
            <>
               {/* <div className='home-container'>
>>>>>>> phantom
                <h1>Discover. Research. Decide.</h1>
                <p>We will help you to find, apply & enroll at universities abroad</p>

                <div className='home-btns'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                </div>
<<<<<<< HEAD
            </div>
=======
            </div> */}
            <News/>
            </>
>>>>>>> phantom
        )
    }
}

export default Home