import { Component } from "react";
import { Link } from 'react-router-dom'

class Reading extends Component{
    render(){
        return(
            <div className='Reading-section'>
                <h1>Reading Test Section</h1>
                <div className='instructions'>
                    <h2>How to take a Test</h2>
                    <p>Ensure you read this guide from start to finish.</p>
                    <ul className='browser-default' id= 'main-list'>
                        <li>The test has a duration of 15 minutes and ends as soon as your time elapses.</li>
                        <li>Each test consists of 10 questions.</li>
                        <li>Every question contains 4 options.</li>
                        <li>Select the option which best answers the question by clicking (0r selecting) it.</li>
                        <li>Each test has a 2 lifelines</li>
                    </ul>
                    <button><Link to={'/instruction/page'}>View Complete Instruction</Link></button>
                </div>

                <div className='reading-test'>
                    <h1>Take a Test</h1>
                    <button>START TEST</button>
                </div>
                
            </div>
        )
    }
}

export default Reading;