import { Component } from "react";
import axios from 'axios'
import './register.css'


class Register extends Component{

    state = {
        firstname : "",
        lastname : "",
        email: "",
        phone : "",
        username : "",
        password : ""
    };

    submitUser=(e)=>{
        e.preventDefault();
        const userdata = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            phone : this.state.phone,
            username : this.state.username,
            password : this.state.password
        }
        axios.post("http://localhost:90/register", userdata)
        .then((response) =>{
            console.log(response)
            this.props.history.push('/login')
        })
        .catch((err) =>{
            console.log(err.response)
        })

    }

    render(){
        return(
        <div className = 'container'>
            <div className = 'SignUp-box'> 
                {/* <h1> Register</h1> */}
                <form>
                <h2 className ="text"> Register</h2>
                <div className='text-box'>
                <i class="fas fa-user"></i>
                <input type="text" value = {this.state.firstname} onChange= {(event => {this.setState({firstname: event.target.value})})} placeholder='Firstname'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-user"></i>
                <input type="text" value = {this.state.lastname} onChange= {(event => {this.setState({lastname: event.target.value})})} placeholder='Lastname'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-envelope"></i>
                <input type="text" value = {this.state.email} onChange= {(event => {this.setState({email: event.target.value})})} placeholder='Email'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-phone-square-alt"></i>
                <input type="text" value = {this.state.phone} onChange= {(event => {this.setState({phone: event.target.value})})} placeholder='Phone'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-user"></i>
                <input type="text" value = {this.state.username} onChange= {(event => {this.setState({username: event.target.value})})} placeholder='Username'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-lock"></i>
                <input type="password" value = {this.state.password} onChange= {(event => {this.setState({password: event.target.value})})} placeholder='Password'/>
                </div>

                <button onClick={this.submitUser} className='Submit-Btn'>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default Register