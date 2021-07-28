import React, { Component } from 'react'
// import React, { Component, Button } from 'react'
import News from '../NewsandPolicy/news'
import { Button,Form,FormControl } from 'react-bootstrap';

import './index.css'

class Home extends Component {
    render() {
        return (
            <>
                <div className='home-container'>
                    <h1>Discover. Research. Decide.</h1>
                    <p>We will help you to find, apply & enroll at universities abroad</p>

                    <div className='home-btns'>
                        {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                   <h1>CHECK HERE</h1>
                </Button> */}
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Find your university"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button className='search-btn'>SEARCH</Button>
                        </Form>
                    </div>
                </div>
                <News />
            </>
        )
    }
}

export default Home