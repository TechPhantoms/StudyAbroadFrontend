import React, { Component } from 'react'
// import React, { Component, Button } from 'react'
import News from '../NewsandPolicy/news'
import AboutUs from '../AboutUs/AboutUs'
import Faq from '../Faq/faq'
import Feature from '../Feature/feature'
import Works from '../Works/works'
// import FAQ from '../FAQ/faq'
// import { Button,Form,FormControl } from 'react-bootstrap';
import './index.css'
import { Carousel,Button } from 'antd';


class Home extends Component {
    render() {
        return (
            <>
                <div className='home-container'>
                    <div className="homediv">
                    <h1>Discover. Research. Decide.</h1>
                    <p>We will help you to find, apply & enroll at universities abroad</p>

                    <div className='home-btns'>
                        {/* <Form className="d-flex">
                            
                            <Button className='search-btn'>SEARCH</Button>
                        </Form> */}
                         <div className="btnHolder">
                  <Button type="primary" size="large">Find a University</Button>
                 
                </div>
                </div>
                    </div>
                </div>
                <AboutUs />
                <Faq />
                <Feature />
                <Works />
                <News />
            </>
        )
    }
}

export default Home