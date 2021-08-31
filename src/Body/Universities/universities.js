import axios from 'axios';
import React, { Component,  useState} from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import './universities.css'

class Universities extends Component {

    state = {
        Universities:[],
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:90/universities/showall')
            .then((response) => {
                console.log(response)
                this.setState({
                    Universities: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        
        return (
            <>
            {/* <div className='searchh'>
            <Col lg={4} className="d-none d-md-none d-lg-block"></Col>
                        <Col lg={4}>
                            <div className="Search">
                                <input type="text" placeholder="I am looking for....." onChange={(e) => {
                                    setSearch(e.target.value);
                                }} id="txtSearch" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={4} className="d-none d-md-none d-lg-block"></Col>
            </div> */}
            <div className='universities-section'>
                 <p className= 'heading-text'>We will help you find your dream university</p>
                <div className='universities'>{this.state.Universities.map((universities) => {
                    return (
                        <div className='universities-card'>
                           
                            <div className='universities-box'>
                                <div className='universities-image'> 
                                    <img src={`http://localhost:90/${universities.universityImage}`}  />
                                </div>
                                <div className='universities-name'>
                                        <h3>{universities.universityName}</h3>
                                        <span className='uni-location'>{universities.universityLocation}</span>
                                    </div>
                                <div className='university-details'>
     
                                    <div className='university-info'>
                                        <span className="university-text">Type</span>
                                        <h3>{universities.universityType}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Rank</span>
                                        <h3>{universities.universityRank}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <p>International</p>
                                        <span className="university-text">Students</span>
                                        <h3>{universities.internationalStudents}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Nationalities</span>
                                        <h3>{universities.nationalities}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Total Programs</span>
                                        <h3>{universities.totalPrograms}</h3>
                                    </div>
                                    <div className='university-info'>
                                        <span className="university-text">Acceptance rate</span>
                                        <h3>{universities.acceptanceRate}</h3>
                                    </div>
                                    
                                </div>
                                <button className='details-button'>
                                        <Link to ={'/universityDetails/' + universities._id} className='university-button'>University Details</Link>
                                    </button>

                            </div>
                        </div>
                    )
                })}</div>
            </div>

            </>

        )
    }
}

export default Universities