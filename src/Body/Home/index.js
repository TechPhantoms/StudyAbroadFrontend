import React, { Component } from 'react'
// import React, { Component, Button } from 'react'
import News from '../NewsandPolicy/news'
import { Button,Form,FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './index.css'

class Home extends Component {
    render() {
        return (
            <>
                <div className='home-container'>
                    <h1>Discover. Research. Decide.</h1>
                    <p>We will help you to find, apply & enroll at universities abroad</p>

                    <div className='home-btns'>
                    
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
                    <div className='mailer-section'>
                        <button><Link to='/book/counseling'>Book Counseling</Link></button>
                    </div>
            </>
        )
    }
}

  

export default Home