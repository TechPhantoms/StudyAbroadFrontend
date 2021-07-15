import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import './login.css'

class Login extends Component{
    state ={
        username : "",
        password : ""
    }

    inputHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    submitLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:90/login', this.state)
        .then((response) =>{
            console.log(response)
            localStorage.setItem('token', response.data.token)
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(localStorage.getItem('token')){
            return <Redirect to = "/home"/>
        }
        return(
            <div className = 'login-box'>
                <h2 className="textlogin">Login</h2>

                <form>
                    <div className = 'text-box'>
                        <i class = "fas fa-user"></i>
                        <input type = 'text' name = 'username' placeholder='Username' value={this.state.username} onChange={this.inputHandler}/>
                    </div>

                    <div className = 'text-box'>
                        <i class = "fas fa-lock"></i>
                        <input type = 'password' name = 'password' placeholder='Password' value={this.state.password} onChange={this.inputHandler}/>
                    </div>

                    <button onClick= {this.submitLogin} className='login-btn'>Sign In</button>
                </form>
                   <div className='boyimg'>
                   
                </div>
            </div>
            
        )
    }
}


export default Login