import { Component } from "react"
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <>
                <nav className = "navbar">
                    <div className="navbar-container">
                        <Link to='/' className= 'navbar-logo'>StudyAbroad</Link>
                        
                        <ul>
                            <li className= "nav_item">
                                <Link to='/countries' className='nav-links'>
                                    Countries
                                </Link>
                            </li>

                            <li className= "nav_item">
                                <Link to='/exams' className='nav-links'>
                                    Exams
                                </Link>
                            </li>

                            <li className= "nav_item">
                                <Link to='/Universities' className='nav-links'>
                                    Universities
                                </Link>
                            </li>

                            <li className= "nav_item">
                                <Link to='/Guide' className='nav-links'>
                                    Guide
                                </Link>
                            </li>

                            <li className= "nav_item">
                                <Link to='/register' className='nav-links'>
                                    Sign-Up
                                </Link>
                            </li>

                            <li className= "nav_item">
                                <Link to='/login' className='nav-links'>
                                    Sign_In
                                </Link>
                            </li>
                        </ul>

                        
                    </div>

                </nav>
            </>
        )
    }
}

export default Header