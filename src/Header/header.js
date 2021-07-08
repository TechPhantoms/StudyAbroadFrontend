import { Component } from "react"
import { Link } from 'react-router-dom'
import './header.css'

class Header extends Component{
    
    render(){
        const logout = () =>{ 
            localStorage.clear()
            window.location.href= '/'
        }
        const token = localStorage.getItem('token')
    // const type = localStorage.getItem('type')
        return(
            <>
                <nav className = "navbar">
                    <div className="navbar-container">
                        { <Link to='/' className= 'navbar-logo'>StudyAbroad</Link> }
                        
                        <ul classname ='nav-menu'>
                        <li className= "nav_item">
                                <Link to='/' className='nav-links'>
                                    Home
                                </Link>
                            </li>

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

                           
                        {token?<>
                            <li className= "nav_item">
                                <Link to='/' className='nav-links' onClick ={logout}>
                                    Logout
                                </Link>
                            </li>

                            </>:<>
                            <li className= "nav_item">
                                <Link to='/register' className='nav-links'>
                                    SignUp
                                </Link>
                            </li>

                            <li className= "nav_item">
                                <Link to='/login' className='nav-links'>
                                    SignIn
                                </Link>
                            </li>

                        </>}
                          
                        </ul>

                        
                    </div>

                </nav>
            </>
        )
    }
}

export default Header