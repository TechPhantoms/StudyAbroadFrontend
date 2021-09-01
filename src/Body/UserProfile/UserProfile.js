import { Component } from "react";
import { Container,Row,Col,Form,Butoom } from "react-bootstrap";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import images from '../../images/img.png'
// import '../Login/login.css'


class UserProfile extends Component {

    state = {
        
        email: "",
        username: "",
        profileImage:''
    };

    submitUser = (e) => {
        e.preventDefault();
        const userdata = {
            email: this.state.email,
            username: this.state.username,
            profileImage: this.state.profileImage
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
            <div className="Container">
                <Row>
                    <Col>
                    <img src ="" alt="profiles pic"/>

                    </Col>
                    <Col>
                    <h1>User Profile</h1>
                    <Form className="form">
                        <p>  </p>
                        <Form.Group controlId="formCategory1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" defaultValue = {this.state.username}  placeholder='Username'/>
                        </Form.Group>

                        <Form.Group controlId="formCategory2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" defaultValue = {this.state.email}  placeholder='Email'/>
                        </Form.Group>

                        <Form.Group controlId="formCategory4">
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control type="file" onChange = {this.state.changeProfileImage}  placeholder='Email'/>
                        </Form.Group>


                    </Form>
                    </Col>
                </Row>
            </div>
            // <div className ='container'>
            //     <div className ='form-containers'>
            //         <div class= 'signin-signup'>
                
            //             <form className= 'register-form'>
            //                 <h2 className='titles'>UserProfile</h2>
                            
                           
            //                   <div className='input-fields'>
            //                     <i class="fas fa-envelope"></i>
            //                     <input type="text" value = {this.state.email}  placeholder='Email'/>
            //                 </div>


            //                 <div className='input-fields'>
            //                     <i class="fas fa-user"></i>
            //                     <input type="text" value = {this.state.username}  placeholder='Username'/>
            //                 </div>

            //                 <div className='input-fields'>
            //                     <i class="fas fa-lock"></i>
            //                     <input type="password" value = {this.state.password} onChange= {(event => {this.setState({password: event.target.value})})} placeholder='Password'/>
            //                 </div>
            //                 <button onClick={this.submitUser} className='btn'>Submit</button>
                            
            //         </form>
            //      </div>
            // </div>
            

                
            // </div>
           
        )
    }
}
const mapStatetoProps=(state)=>{
    return{
        user_id:state.user.userDetails.userid,
        username:state.user.userDetails.username,
       email:state.user.email,
       profileImage: state.user.profileImage,
       msg:state.user.msg
    }
   }
   
export default UserProfile