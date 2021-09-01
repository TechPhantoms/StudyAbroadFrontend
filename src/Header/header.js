import { Component } from "react"
import React, { useState, useEffect } from 'react'
import { Navbar,Nav,NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './header.css'


function Header(){
    
    
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const logout = () =>{ 
        localStorage.clear()

       window.location.href= '/'
    }

    const showButton = () =>{
        if(window.innerWidth <=960) {
            setButton(false);
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);
    const token = localStorage.getItem('token')
    const type = localStorage.getItem('type')

        return (
            <>
                <nav className="navbar">
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            StudyAbroad
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className= { click? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>

                             <li className='nav-item'>
                                <Link to='/countries' className= 'nav-links' onClick={closeMobileMenu}>
                                    Countries
                                </Link>
                            </li>

                            
                             <li className='nav-item'>
                                <Link to='/exams' className= 'nav-links' onClick={closeMobileMenu}>
                                    Exams
                                </Link>
                            </li>

                             <li className='nav-item'>
                                <Link to='/Universities' className= 'nav-links' onClick={closeMobileMenu}>
                                    Universities
                                </Link>
                            </li>
                            

                          
                            <li className='nav-item'>
                                <Link to='/news' className= 'nav-links' onClick={closeMobileMenu}>
                                    Guide
                                </Link>
                            </li>
                         
                            {/* {(type==="User")?
                            
                            <li className='nav-item'>
                                <Link to='/carts' className= 'nav-links' onClick={closeMobileMenu}>
                                    Mycarts
                                </Link>
                            </li>:<></>
        } */}
                            {token?<>
                              {/* <li className='nav-item'>
                                <Link to='/product/showall' className= 'nav-links' onClick={closeMobileMenu}>
                                    Product
                                </Link>
                            </li> */}
                            <NavDropdown title="name" id="nav-dropdown">
                                <NavDropdown.Item eventKey ="profile">Profile</NavDropdown.Item>
                            </NavDropdown>

                                <li className='nav-item'>
                                <Link to='/' className= 'nav-links' onClick={logout}>
                                    Logout
                                </Link>
                            </li>
                                
                            </>:<>
                            <li className='nav-item'>
                                <Link to='/register' className= 'nav-links' onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/login' className= 'nav-links' onClick={closeMobileMenu}>
                                    Sign In
                                </Link>
                            </li>
                            </>}
                           
                        </ul>

                    {/* {button && <Button buttonStyle = 'btn--outline'>Sign UP</Button>}
                    {button && <Button buttonStyle = 'btn--outline'>Sign IN</Button>} */}

                    </div>
                </nav>

                
            </>










            // <>
            // <div className='Navbar'>
            //     <div className = "logo">
            //         <img src="images/logo.png" alt="Travel"></img>
            //     </div>
            
            // <ul>
            //     <Link  to= "/" exact >Home</Link>
            //     <Link to= "/destination/showall" >Destinations</Link>
            //     <Link to= "/services" >Services</Link>
            //     <Link to= "/about" >AboutUs</Link>
            //     <Link to= "/register" >Sign Up</Link>
            //     <Link to= "/login" >Sign In</Link>
            // </ul>
            //     </div>

            // </>

        )
    }


// class Header extends Component {

//     render() {
//         const logout = () => {
//             localStorage.clear()
//             window.location.href = '/'
//         }
//         const token = localStorage.getItem('token')
//         // const type = localStorage.getItem('type')
//         return (
//             <>
//                 <nav className="navbar">
//                     <div className="navbar-container">
//                         {<Link to='/' className='navbar-logo'>StudyAbroad <i className='fab fa-typo3'/> </Link>}

//                         <ul classname='nav-menu'>
//                             <li className="nav_item">
//                                 <Link to='/' className='nav-links'>
//                                     Home
//                                 </Link>
//                             </li>

//                             <li className="nav_item">
//                                 <Link to='/countries' className='nav-links'>
//                                     Countries
//                                 </Link>
//                             </li>

                            // <li className="nav_item">
                            //     <Link to='/exams' className='nav-links'>
                            //         Exams
                            //     </Link>
                            // </li>

//                             <li className="nav_item">
//                                 <Link to='/Universities' className='nav-links'>
//                                     Universities
//                                 </Link>
//                             </li>

//                             <li className="nav_item">
//                                 <Link to='/news' className='nav-links'>
//                                     News&policy
//                                 </Link>
//                             </li>


//                             {token ? <>
//                                 <li className="nav_item">
//                                     <Link to='/' className='nav-links' onClick={logout}>
//                                         Logout
//                                     </Link>
//                                 </li>

//                             </> : <>
//                                 <li className="nav_item">
//                                     <Link to='/register' className='nav-links'>
//                                         SignUp
//                                     </Link>
//                                 </li>

//                                 <li className="nav_item">
//                                     <Link to='/login' className='nav-links'>
//                                         SignIn
//                                     </Link>
//                                 </li>

//                             </>}

//                         </ul>


//                     </div>

//                 </nav>
//             </>
//         )
//     }
// }

export default Header