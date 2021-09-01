import { Component } from "react";
import axios from 'axios'
import './register.css'
import { Redirect } from "react-router-dom";
import images from '../../images/img.png'
// import '../Login/login.css'


class Register extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        username: "",
        password: ""
    };

    submitUser = (e) => {
        e.preventDefault();
        const userdata = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            username: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:90/register", userdata)
            .then((response) => {
                console.log(response)
                this.props.history.push('/login')
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    render() {
        return (
            <div className ='containerr'>
                <div className ='form-containers'>
                    <div class= 'signin-signup'>
                        {/* {for register} */}
                        <form className= 'register-form'>
                            <h2 className='titles'>Register Here</h2>
                            <div className='input-fields'>
                                <i class="fas fa-user"></i>
                                <input type="text"  value = {this.state.firstname} onChange= {(event => {this.setState({firstname: event.target.value})})} placeholder='Firstname' required/>

                            </div>
                                <div className='input-fields'>
                                <i class="fas fa-user"></i>
                                <input type="text" value = {this.state.lastname} onChange= {(event => {this.setState({lastname: event.target.value})})} placeholder='Lastname' required/>
                                
                            </div>
                              <div className='input-fields'>
                                <i class="fas fa-envelope"></i>
                                <input type="text" value = {this.state.email} onChange= {(event => {this.setState({email: event.target.value})})} placeholder='Email' required/>
                            </div>

                            <div className='input-fields'>
                                <i class="fas fa-phone-square-alt"></i>
                                <input type="text" value = {this.state.phone} onChange= {(event => {this.setState({phone: event.target.value})})} placeholder='Phone' required/>
                            </div>

                            <div className='input-fields'>
                                <i class="fas fa-user"></i>
                                <input type="text" value = {this.state.username} onChange= {(event => {this.setState({username: event.target.value})})} placeholder='Username' required/>
                            </div>

                            <div className='input-fields'>
                                <i class="fas fa-lock"></i>
                                <input type="password" value = {this.state.password} onChange= {(event => {this.setState({password: event.target.value})})} placeholder='Password' required/>
                            </div>
                            <button onClick={this.submitUser} className='btn'>Submit</button>
                            <p class="social-texts">Or Sign up with social platforms</p>
                            <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                 </div>
            </div>
                <div class="panels-container">
                <div class="panel left-panel">
                    <div class="contents">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button class="btn transparent" className="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                     {/* <div className='imges'>
                         <img src={images} classname="login-image" alt="" /></div> */}
                    {/* <img src={images} classname="login-image" alt="" /> */}
                    
                </div>

                {/* <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button class="btn transparent" className="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" class="image" alt="" />
                </div> */}
            </div>

                
            </div>
            // <div className = 'containerr'>


            //         <form action='' >

            //         <h2 className ="text"> Register</h2>
            //         <div className='text-box'>
            //         <i class="fas fa-user"></i>
            //         <input type="text" value = {this.state.firstname} onChange= {(event => {this.setState({firstname: event.target.value})})} placeholder='Firstname'/>
            //         </div>
            //         <div className='text-box'>
            //         <i class="fas fa-user"></i>
            //         <input type="text" value = {this.state.lastname} onChange= {(event => {this.setState({lastname: event.target.value})})} placeholder='Lastname'/>
            //         </div>
            //         <div className='text-box'>
            //         <i class="fas fa-envelope"></i>
            //         <input type="text" value = {this.state.email} onChange= {(event => {this.setState({email: event.target.value})})} placeholder='Email'/>
            //         </div>
            //         <div className='text-box'>
            //         <i class="fas fa-phone-square-alt"></i>
            //         <input type="text" value = {this.state.phone} onChange= {(event => {this.setState({phone: event.target.value})})} placeholder='Phone'/>
            //         </div>
            //         <div className='text-box'>
            //         <i class="fas fa-user"></i>
            //         <input type="text" value = {this.state.username} onChange= {(event => {this.setState({username: event.target.value})})} placeholder='Username'/>
            //         </div>
            //         <div className='text-box'>
            //         <i class="fas fa-lock"></i>
            //         <input type="password" value = {this.state.password} onChange= {(event => {this.setState({password: event.target.value})})} placeholder='Password'/>
            //         </div>

            //         <button onClick={this.submitUser} className='Submit-Btn'>Submit</button>


            //         <p className='social-text'>Or</p>

            //         {/* </div> */}
            //         </form>
            //         <div className='social-media'>
            //             <div className='social-icon'>
            //                  <i className='fab fa-facebook-f'></i>
            //             </div>

            //         <div className='social-icon'>
            //             <i className='fab fa-twitter'></i>
            //             </div>

            //         <div className='social-icon'>
            //             <i className='fab fa-google'></i>
            //             </div>

            //         <div className='social-icon'>
            //             <i className='fab fa-linkedin-in'></i>
            //             </div>

            //             </div>
            //     </div>


/**********/////////////


            // <div className='containerr'>
            //     <div className='form-container'>
            //         <div className='signup-signin'>
            //             <form className='sign-up-form'>
            //                 <h2 className='title'>Sign Up</h2>
            //                 <div className='input-field'>
            //                     <i class="fas fa-user"></i>
            //                     <input type="text" value={this.state.firstname} onChange={(event => { this.setState({ firstname: event.target.value }) })} placeholder='Firstname' />
            //                 </div>
            //                 <div className='input-field'>
            //                     <i class="fas fa-user"></i>
            //                     <input type="text" value={this.state.lastname} onChange={(event => { this.setState({ lastname: event.target.value }) })} placeholder='Lastname' />
            //                 </div>
            //                 <div className='input-field'>
            //                     <i class="fas fa-envelope"></i>
            //                     <input type="text" value={this.state.email} onChange={(event => { this.setState({ email: event.target.value }) })} placeholder='Email' />
            //                 </div>
            //                 <div className='input-field'>
            //                     <i class="fas fa-phone-square-alt"></i>
            //                     <input type="text" value={this.state.phone} onChange={(event => { this.setState({ phone: event.target.value }) })} placeholder='Phone' />
            //                 </div>

            //                 <div className='input-field'>
            //                     <i class="fas fa-user"></i>
            //                     <input type="text" value={this.state.username} onChange={(event => { this.setState({ username: event.target.value }) })} placeholder='Username' />
            //                 </div>
            //                 <div className='input-field'>
            //                     <i class="fas fa-lock"></i>
            //                     <input type="password" value={this.state.password} onChange={(event => { this.setState({ password: event.target.value }) })} placeholder='Password' />
            //                 </div>

            //                 <button onClick={this.submitUser} className='btn'>Submit</button>

            //                 <p class="social-text">Or Sign up with social platforms</p>
            //                 <div class="social-media">
            //                     <a href="#" class="social-icon">
            //                         <i class="fab fa-facebook-f"></i>
            //                     </a>
            //                     <a href="#" class="social-icon">
            //                         <i class="fab fa-twitter"></i>
            //                     </a>
            //                     <a href="#" class="social-icon">
            //                         <i class="fab fa-google"></i>
            //                     </a>
            //                     <a href="#" class="social-icon">
            //                         <i class="fab fa-linkedin-in"></i>
            //                     </a>
            //                 </div>

            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Register