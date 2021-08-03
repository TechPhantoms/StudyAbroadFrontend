import axios from 'axios';
import React, { Component } from 'react';
import './UniversityDetails.css'

class UniversityDetails extends Component {

    state = {
        UniversityInfo: [],
        config: {
            headers: { authorization: `Bearer${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    componentDidMount() {
        axios.get('http://localhost:90/universities/single/' + this.state.id)
            .then(response => {
                console.log(response)
                this.setState({
                    UniversityInfo: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
        
            <div className='university-details-section'>
                <div className='universityDetails' key={this.state.UniversityInfo._id}>
                    <div className='university-image'>
                        <img src={`http://localhost:90/${this.state.UniversityInfo.universityImage}`} />
                    </div>
                    <div classname='university-name'>
                        <h1>{this.state.UniversityInfo.universityName}</h1>
                        <p>Check whether {this.state.UniversityInfo.universityName} is right for you as an</p>
                        <p>intertnational student.</p>
                        <button className='university-website-btn'>Official university website</button>
                    </div>
                    <div className='university-box'>
                        <div className='universities-name'>
                            <h3>{this.state.UniversityInfo.universityName}</h3>
                            <span>{this.state.UniversityInfo.universityLocation}</span>
                        </div>
                        <div className='universities-details'>

                            <div className='universities-info'>
                                <span className="universities-text">Type</span>
                                <h3>{this.state.UniversityInfo.universityType}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Rank</span>
                                <h3>{this.state.UniversityInfo.universityRank}</h3>
                            </div>
                            <div className='universities-info'>
                                <p>International</p>
                                <span className="universities-text">Students</span>
                                <h3>{this.state.UniversityInfo.internationalStudents}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Nationalities</span>
                                <h3>{this.state.UniversityInfo.nationalities}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Total Programs</span>
                                <h3>{this.state.UniversityInfo.totalPrograms}</h3>
                            </div>
                            <div className='universities-info'>
                                <span className="universities-text">Acceptance rate</span>
                                <h3>{this.state.UniversityInfo.acceptanceRate}</h3>
                            </div>

                        </div>
                    </div>
                    <div className='studyAbroad'>
                        <h1>Study abroad at {this.state.UniversityInfo.universityName}</h1>
                        <p>{this.state.UniversityInfo.studyAbroadPara1}</p>
                        <p>{this.state.UniversityInfo.studyAbroadPara2}</p>
                        <p>{this.state.UniversityInfo.studyAbroadPara3}</p>
                    </div>
                    <div className='whyStudy'>
                        <h1>Why study as {this.state.UniversityInfo.universityName}?</h1>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle1}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara1}</p>
                        </div>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle2}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara2}</p>
                        </div>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle3}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara3}</p>
                        </div>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle4}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara4}</p>
                        </div>
                        <div className='whyStudy-title'>
                            <h3>{this.state.UniversityInfo.whyStudyTitle5}</h3>
                            <p>{this.state.UniversityInfo.whyStudyPara5}</p>
                        </div>
                    </div>
                    <div className='internationalStudents'>
                        <h1>Life as an international student</h1>
                        <p>{this.state.UniversityInfo.internationalLifePara1}</p>
                        <p>{this.state.UniversityInfo.internationalLifePara2}</p>
                        <p>{this.state.UniversityInfo.internationalLifePara3}</p>
                    </div>
                    <div className='Fees-Funding'>
                        <h1>Fees and Fundings</h1>
                        <p>International student fees are guaranteed in advance for the duration of the study.
                             {this.state.UniversityInfo.universityName} offers financial support for living and travel costs.</p>

                             <div className='fee-Information'>
                                 <h2>Fee Information</h2>
                                 <ul>
                                     <li><p>{this.state.UniversityInfo.feeInformation1}</p></li>
                                     <li><p>{this.state.UniversityInfo.feeInformation2}</p></li>
                                 </ul>
                             </div>

                             <div className='Funding'>
                                 <h2>Funding</h2>
                                 <div className='funding-title'>
                                     <h3>{this.state.UniversityInfo.undergraduatefunding}</h3>

                                     <p>{this.state.UniversityInfo.undergraduatefundingAmount}</p>

                                     
                                         {this.state.UniversityInfo.undergraduatefunding1}
                                         {this.state.UniversityInfo.undergraduatefunding2}
                                         {this.state.UniversityInfo.undergraduatefunding3}
                                         {this.state.UniversityInfo.undergraduatefunding4}
                                     
                                 </div>

                                 <div className='funding-title'>
                                     <h3>{this.state.UniversityInfo.postgraduatefunding}</h3>

                                     <p>{this.state.UniversityInfo.postgraduateAmount}</p>

                                     
                                         {this.state.UniversityInfo.postgraduateFunding1}
                                         {this.state.UniversityInfo.postgraduateFunding2}
                                     
                                 </div>
                             </div>

                    </div>

                    <div className='location'>
                        <h1>Location</h1>

                        <p>{this.state.UniversityInfo.universityName}</p>

                        <p>{this.state.UniversityInfo.locationStreetName}</p>

                        <p>{this.state.UniversityInfo.locationStreetDetails}</p>
                    </div>

                </div>

            </div>

            // <h1>UniversityDetails</h1>
        )
    }
}

export default UniversityDetails